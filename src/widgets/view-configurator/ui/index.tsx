import { FC, memo, useCallback, useState } from 'react';
import DrawerStyled from './styled';
import { ConfiguratorMainHeader as MainHeader } from 'shared/ui/configurators-components';
import { useDashboardView } from 'entities/dashboard-view';
import Box from '@mui/material/Box';
import { useCompany } from 'entities/company'
import { UnsavedChanges } from './unsaved-changes';
import { InfoBlock } from './info-block';
import { PaletteModeSwitcher } from 'features/ui';
import { Unselected } from './unselected';
import { useUI } from 'entities/ui';
import { f } from 'shared/styles';
import { ViewItemConfiguratorTabs } from './tabs';



export const ViewItemConfigurator: FC = memo(() => {
  const { paramsCompanyId } = useCompany();
  const { setWarningMessage } = useUI();
  const { editMode, selectedId, selectedItem, isUnsaved, setSelectedId, setEditMode } = useDashboardView();
  const [value, setValue] = useState('1');



  /** Закрываем конфигуратор */
  const handleClose = useCallback(() => {
    if (isUnsaved) {
      return setWarningMessage('Cохраните изменения');
      // TODO: autoclick to saveBtn
      // const element = document.getElementById('saveBtn');
      // if (element) {
      //   element.click();
      // }
    }
    setValue('1');
    setEditMode({ editMode: false, companyId: paramsCompanyId });
    setSelectedId(''); // Убираем, чтобы prevStoredViewItem обновился и произошло сохранение
  }, [paramsCompanyId, isUnsaved, setValue, setEditMode, setSelectedId, setWarningMessage]);


  return (
    // @ts-ignore
    <DrawerStyled anchor='right' variant='permanent' ownerState={{ editMode }}>
      <Box sx={{ ...f('c'), height: '100%', color: 'text.main', overflowY: 'auto' }}>
        <MainHeader view onClose={handleClose} />
        <UnsavedChanges />
        {! selectedId && <Unselected />}
        {selectedId && <InfoBlock />}

        {selectedId && <ViewItemConfiguratorTabs
          value        = {value}
          selectedItem = {selectedItem}
          onSetValue   = {setValue}
        />}
      </Box>

      <Box sx={{ ...f('-c-fe'), mt: 2 }}>
        <PaletteModeSwitcher />
      </Box>
    </DrawerStyled>
  )
});
