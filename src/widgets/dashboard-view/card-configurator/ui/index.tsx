import { FC, memo, useCallback, useEffect, useState, SyntheticEvent } from 'react';
import DrawerStyled from './styled';
import { ConfiguratorMainHeader as MainHeader } from 'shared/ui/configurators-components';
import { useDashboardView, CardItem } from 'entities/dashboard-view';
import { Box, Tab } from '@mui/material';
import { f } from 'shared/styles';
import { CustomTheme } from 'app/providers/theme';
import { getChanges, isEmpty } from 'shared/helpers/objects';
import { useCompany } from 'entities/company';
import { CardItemStylesConfigurator } from './styles';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { UnsavedChanges } from './unsaved-changes';
import { CardItemConfiguratorSettings } from './settings';
import { CardItemControlConfigurator } from './control';
import { InfoBlock } from './info-block';



export const CardItemConfigurator: FC = memo(() => {
  const { companyId, storedCompany, company, serviceUpdateCompany } = useCompany();
  const { editMode, selectedId, selectedItem, entities, prevStoredCard, setSelectedId, setEditMode, serviceUpdateCardItem } = useDashboardView();
  const [value, setValue] = useState('1');

  const handleChange = (event: SyntheticEvent, newValue: string) => setValue(newValue);

  useEffect(() => {
    /** Сохраняем изменившиеся customSettings */
    const changedCompany = getChanges(storedCompany, company);
    if (! isEmpty(changedCompany)) serviceUpdateCompany({
      id: companyId,
      ...changedCompany
    });
    
    /** Сохраняем изменившиеся поля | стили */
    const prevId = (prevStoredCard as CardItem)?.id; // Так как selectedId это уже нововыбранный
    if (! prevId) return // Например, выбрали первый раз или удалили карточку

    const changedFields = getChanges(prevStoredCard, entities?.[prevId]);
    
    if (isEmpty(changedFields)) return
    const cardItem = {
      id: prevId,
      ...changedFields
    };

    serviceUpdateCardItem({ companyId, cardItem });
    // setValue('1');
  }, [selectedId]);


  /** Закрываем конфигуратор */
  const handleClose = useCallback(() => {
    // setValue('1');
    setEditMode(false);
    setSelectedId(''); // Убираем, чтобы prevStoredCard обновился и произошло сохранение
  }, [selectedId, setEditMode, setSelectedId]);


  return (
    // @ts-ignore
    <DrawerStyled anchor='right' variant='permanent' ownerState={{ editMode }}>
      <MainHeader onClose={handleClose} />
      <UnsavedChanges />
      {
        ! selectedId && <Box sx={(theme) => ({ ...f('-c-c'), mt: 8, color: (theme as CustomTheme).palette.error.main })}>
          Выберите элемент для редактирования
        </Box>
      }
      <InfoBlock />
      
      <TabContext value={value}>
        <Box sx={{ mt: 2, borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label='lab API tabs example'>
            <Tab label='Control' value='1' />
            <Tab label='Styles'  value='2' />
            <Tab
              label = {selectedItem?.type === 'chart' || selectedItem?.type === 'chip' ? 'Settings' : null}
              value = '3'
            />
            
          </TabList>
        </Box>

        <TabPanel value='1' keepMounted sx={{ p: 0 }}>
          <CardItemControlConfigurator />
        </TabPanel>
        <TabPanel value='2' keepMounted sx={{ p: 0 }}>
          <CardItemStylesConfigurator />
        </TabPanel>
        <TabPanel value='3' keepMounted sx={{ p: 0 }}>
          <CardItemConfiguratorSettings />
        </TabPanel>
      </TabContext>
    </DrawerStyled>
  )
});
