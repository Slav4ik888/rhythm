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
import { CardItemSettingsConfigurator } from './settings';
import { UnsavedChanges } from './unsaved-changes';



export const CardItemConfigurator: FC = memo(() => {
  const { companyId } = useCompany();
  const { editMode, selectedId, entities, prevStoredCard, setSelectedId, setEditMode, serviceUpdateCardItem } = useDashboardView();
  const [value, setValue] = useState('1');

  const handleChange = (event: SyntheticEvent, newValue: string) => setValue(newValue);

  /** Сохраняем изменившиеся поля | стили */
  useEffect(() => {
    const prevId = (prevStoredCard as CardItem)?.id; // Так как selectedId это уже нововыбранный
    if (! prevId) return // Например, выбрали первый раз или удалили карточку

    const changedFields = getChanges(prevStoredCard, entities?.[prevId]);
    
    if (isEmpty(changedFields)) return
    const cardItem = {
      id: prevId,
      ...changedFields
    };

    serviceUpdateCardItem({ companyId, cardItem });
  }, [selectedId]);


  /** Закрываем конфигуратор */
  const handleClose = useCallback(() => {
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
      <TabContext value={value}>
        <Box sx={{ mt: 2, borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Styles" value="1" />
            <Tab label="Settings" value="2" />
          </TabList>
        </Box>
        <TabPanel value="1" keepMounted sx={{ p: 0 }}>
          <CardItemStylesConfigurator />
        </TabPanel>
        <TabPanel value="2" keepMounted sx={{ p: 0 }}>
          <CardItemSettingsConfigurator />
        </TabPanel>
      </TabContext>
    </DrawerStyled>
  )
});
