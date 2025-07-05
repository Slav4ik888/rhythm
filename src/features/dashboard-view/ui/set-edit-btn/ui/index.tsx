import { FC, memo, useCallback } from 'react';
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';
import { useDashboardViewActions } from 'entities/dashboard-view';
import { useCompany } from 'entities/company';
import { NavbarIcon } from 'shared/ui/navbar';



export const DashboardSetEditBtnContainer: FC = memo(() => {
  const { editMode, setEditMode } = useDashboardViewActions();
  const { paramsCompanyId } = useCompany();


  const handleToggle = useCallback(() => {
    setEditMode({
      editMode  : ! editMode,
      companyId : paramsCompanyId
    })
  },
    [editMode, paramsCompanyId, setEditMode]
  );


  return (
    <NavbarIcon
      toolTitle = {`${editMode ? 'Выключить' : 'Включить'} режим редактирования`}
      icon      = {AutoFixHighIcon}
      onClick   = {handleToggle}
    />
  )
});
