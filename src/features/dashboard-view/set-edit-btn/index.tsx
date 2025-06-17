import { FC, memo, useEffect, useState, useCallback } from 'react';
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';
import { useDashboardView } from 'entities/dashboard-view';
import { useCompany } from 'entities/company';
import { NavbarIcon } from 'shared/ui/navbar';



export const DashboardSetEditBtn: FC = memo(() => {
  const { editMode, setEditMode } = useDashboardView();
  const { paramsCompanyId } = useCompany();
  const [text, setText] = useState<string>('');

  useEffect(() => {
    setText(editMode ? 'Выключить режим редактирования' : 'Включить режим редактирования');
  }, [editMode]);

  const handleToggle = useCallback(() => setEditMode({ editMode: ! editMode, companyId: paramsCompanyId }),
    [editMode, paramsCompanyId, setEditMode]);


  return (
    <NavbarIcon
      toolTitle = {text}
      icon      = {AutoFixHighIcon}
      onClick   = {handleToggle}
    />
  )
});
