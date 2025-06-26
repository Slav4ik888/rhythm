import { FC, memo, useCallback } from 'react';
import RefreshIcon from '@mui/icons-material/Autorenew';
import { useCompany } from 'entities/company';
import { useDashboardData } from 'entities/dashboard-data';
import { NavbarIcon } from 'shared/ui/navbar';
import { useUI } from 'entities/ui';



export const DashboardRefreshButton: FC = memo(() => {
  const { serviceGetData } = useDashboardData();
  const { setPageText } = useUI();
  const { paramsCompanyId } = useCompany();

  const handleRefresh = useCallback(() => {
    serviceGetData(paramsCompanyId);
    setPageText({ name: 'RefreshButton', text: 'Загрузка данных c google-таблицы...' });
  },
    [paramsCompanyId, serviceGetData, setPageText]
  );


  return (
    <NavbarIcon
      toolTitle = 'Обновить данные из гугл таблицы'
      icon      = {RefreshIcon}
      onClick   = {handleRefresh}
    />
  )
});
