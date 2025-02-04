import { FC, memo, useCallback, useEffect, useState, SyntheticEvent, useMemo } from 'react';
import DrawerStyled from './styled';
import { ConfiguratorMainHeader as MainHeader } from 'shared/ui/configurators-components';
import { useDashboardView, ViewItem } from 'entities/dashboard-view';
import { Box, Tab } from '@mui/material';
import { f } from 'shared/styles';
import { CustomTheme } from 'app/providers/theme';
import { getChanges, isEmpty, isNotEmpty } from 'shared/helpers/objects';
import { useCompany } from 'entities/company';
import { ViewItemStylesConfigurator } from './styles';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { UnsavedChanges } from './unsaved-changes';
import { ViewItemConfiguratorSettings } from './settings';
import { ViewItemControlConfigurator } from './control';
import { InfoBlock } from './info-block';



export const ViewItemConfigurator: FC = memo(() => {
  const { companyId, storedCompany, company, serviceUpdateCompany } = useCompany();
  const { editMode, selectedId, selectedItem, entities, prevStoredViewItem, setSelectedId, setEditMode, serviceUpdateViewItem } = useDashboardView();
  const [value, setValue] = useState('1');
  const isSettings = useMemo(() =>
    selectedItem?.type === 'chart'      ||
    selectedItem?.type === 'chip'       ||
    selectedItem?.type === 'growthIcon' ||
    selectedItem?.type === 'digitIndicator', [selectedItem]);
  
  const handleChange = (event: SyntheticEvent, newValue: string) => setValue(newValue);

  useEffect(() => {
    if (value === '3' && ! isSettings) setValue('1');

    /** Сохраняем изменившиеся customSettings */
    const changedCompany = getChanges(storedCompany, company);
    if (isNotEmpty(changedCompany)) serviceUpdateCompany({ id: companyId, ...changedCompany });
    
    /** Сохраняем изменившиеся поля | стили */
    const prevId = (prevStoredViewItem as ViewItem)?.id; // Так как selectedId это уже нововыбранный
    if (! prevId) return // Например, выбрали первый раз или удалили карточку

    const changedFields = getChanges(prevStoredViewItem, entities?.[prevId]);
    if (isEmpty(changedFields)) return

    const viewItem = { id: prevId, ...changedFields };
    serviceUpdateViewItem({ companyId, viewItem });
  }, [selectedId]);


  /** Закрываем конфигуратор */
  const handleClose = useCallback(() => {
    setValue('1');
    setEditMode(false);
    setSelectedId(''); // Убираем, чтобы prevStoredViewItem обновился и произошло сохранение
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
              label = {isSettings ? 'Settings' : null}
              value = '3'
            />
            
          </TabList>
        </Box>

        <TabPanel value='1' keepMounted sx={{ p: 0 }}>
          <ViewItemControlConfigurator />
        </TabPanel>
        <TabPanel value='2' keepMounted sx={{ p: 0 }}>
          <ViewItemStylesConfigurator />
        </TabPanel>
        <TabPanel value='3' keepMounted sx={{ p: 0 }}>
          <ViewItemConfiguratorSettings />
        </TabPanel>
      </TabContext>
    </DrawerStyled>
  )
});
