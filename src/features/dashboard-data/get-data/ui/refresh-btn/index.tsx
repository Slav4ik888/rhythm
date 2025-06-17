import { FC, memo, useCallback } from 'react';
import RefreshIcon from '@mui/icons-material/Autorenew';
import { useCompany } from 'entities/company';
import { useDashboardData } from 'entities/dashboard-data';
import { NavbarIcon } from 'shared/ui/navbar';



export const DashboardRefreshButton: FC = memo(() => {
  const { serviceGetData } = useDashboardData();
  const { paramsCompany } = useCompany();
  const handleRefresh = useCallback(() => serviceGetData(paramsCompany), [paramsCompany, serviceGetData]);


  return (
    <NavbarIcon
      toolTitle = 'Обновить данные из гугл таблицы'
      icon      = {RefreshIcon}
      onClick   = {handleRefresh}
    />
  )
});
