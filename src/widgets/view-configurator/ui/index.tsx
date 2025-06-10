import { FC, memo, useCallback, useEffect, useState, SyntheticEvent, useMemo } from 'react';
import DrawerStyled from './styled';
import { ConfiguratorMainHeader as MainHeader } from 'shared/ui/configurators-components';
import { useDashboardView } from 'entities/dashboard-view';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { useCompany } from 'entities/company';
import { ViewItemStylesConfigurator } from './styles';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { UnsavedChanges } from './unsaved-changes';
import { ViewItemConfiguratorSettings } from './settings';
import { ViewItemControlConfigurator } from './control';
import { InfoBlock } from './info-block';
import { PaletteModeSwitcher } from 'features/ui';
import { Unselected } from './unselected';
import { useUI } from 'entities/ui';
import { f } from 'shared/styles';



const sxTabPanel = {
  overflowY : 'auto',
  p         : 0,
};


export const ViewItemConfigurator: FC = memo(() => {
  const { companyId } = useCompany();
  const { setWarningMessage } = useUI();
  const { editMode, selectedId, selectedItem, isUnsaved, setSelectedId, setEditMode } = useDashboardView();

  const [value, setValue] = useState('1');
  const isSettings = useMemo(() =>
       selectedItem?.type === 'box'
    || selectedItem?.type === 'chart'
    || selectedItem?.type === 'chip'
    || selectedItem?.type === 'growthIcon'
    || selectedItem?.type === 'digitIndicator', [selectedItem]);

  const handleChange = (event: SyntheticEvent, newValue: string) => setValue(newValue);

  useEffect(() => {
    if (value === '3' && ! isSettings) setValue('1');

  //  TODO:Убрал попробовать, возможно надо навсегда от этого избавиться
  //   /** Сохраняем изменившиеся customSettings */
  //   const changedCompany = getChanges(storedCompany, company);
  //   if (isNotEmpty(changedCompany)) serviceUpdateCompany({ id: companyId, ...changedCompany });

  //   /** Вроде как при закрытии Конфигуратора - сохраняем изменившиеся поля | стили */
  //   const prevId = (prevStoredViewItem as ViewItem)?.id; // Так как selectedId это уже нововыбранный
  //   if (! prevId) return // Например, выбрали первый раз или удалили карточку

  //   const changedFields = getChanges(prevStoredViewItem, entities?.[prevId]);
  //   if (isEmpty(changedFields)) return

  //   const viewItem = { id: prevId, ...changedFields };
  //   serviceUpdateViewItems({ name: 'Configurator', companyId, viewItems: [viewItem] });
  // }, [value, companyId, company, selectedId, entities, isSettings, prevStoredViewItem, storedCompany,
  //   serviceUpdateCompany, serviceUpdateViewItems]);
  }, [value, isSettings]);


  /** Закрываем конфигуратор */
  const handleClose = useCallback(() => {
    if (isUnsaved) return setWarningMessage('Cохраните изменения'); // TODO: autoclick to saveBtn
    setValue('1');
    setEditMode({ editMode: false, companyId });
    setSelectedId(''); // Убираем, чтобы prevStoredViewItem обновился и произошло сохранение
  }, [companyId, isUnsaved, setValue, setEditMode, setSelectedId, setWarningMessage]);


  return (
    // @ts-ignore
    <DrawerStyled anchor='right' variant='permanent' ownerState={{ editMode }}>
      <Box>
        <MainHeader view onClose={handleClose} />
        <UnsavedChanges />
        {! selectedId && <Unselected />}
        {selectedId && <InfoBlock />}

        {
          selectedId && <TabContext value={value}>
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

            <TabPanel value='1' keepMounted sx={sxTabPanel}>
              <ViewItemControlConfigurator />
            </TabPanel>
            <TabPanel value='2' keepMounted sx={sxTabPanel}>
              <ViewItemStylesConfigurator />
            </TabPanel>
            <TabPanel value='3' keepMounted sx={sxTabPanel}>
              <ViewItemConfiguratorSettings selectedItem={selectedItem} />
            </TabPanel>
          </TabContext>
        }
      </Box>

      <Box sx={f('--fe')}>
        <PaletteModeSwitcher />
      </Box>
    </DrawerStyled>
  )
});
