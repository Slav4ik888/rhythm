import { FC, memo, useCallback } from 'react';
import RefreshIcon from '@mui/icons-material/Autorenew';
import { useCompany } from 'entities/company';
import { NavbarIcon } from 'shared/ui/navbar';
import { useUI } from 'entities/ui';
import { useDashboardGetData } from '../../model/hooks';
import { usePages } from 'shared/lib/hooks';



export const DashboardRefreshButton: FC = memo(() => {
  const { serviceGetData } = useDashboardGetData();
  const { setPageLoading } = useUI();
  const { paramsCompanyId } = useCompany();
  const { dashboardPageId = 'main' } = usePages();


  const handleRefresh = useCallback(() => {
    serviceGetData({ companyId: paramsCompanyId, dashboardPageId });
    setPageLoading({ 'get-g-data': { name: 'RefreshButton', text: 'Загрузка данных c google-таблицы...' } });
  },
    [paramsCompanyId, dashboardPageId, serviceGetData, setPageLoading]
  );


  return (
    <NavbarIcon
      toolTitle = 'Обновить данные из гугл таблицы'
      icon      = {RefreshIcon}
      onClick   = {handleRefresh}
    />
  )
});
