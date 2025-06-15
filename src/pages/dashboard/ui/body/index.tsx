import { memo, useEffect } from 'react';
import { useCompany } from 'entities/company';
import { getInitialState as getInitialStateData, useDashboardData } from 'entities/dashboard-data';
import { DashboardBodyWrapper } from './wrapper';
import { DashboardBodyPanel, DashboardBodyContent } from 'widgets/dashboard-view';
import { getInitialState as getInitialStateView, useDashboardView } from 'entities/dashboard-view';
import { ViewItemConfigurator } from 'widgets/view-configurator';
import { __devLog } from 'shared/lib/tests/__dev-log';



export const DashboardBody = memo(() => {
  __devLog('DashboardBody ');
  const { paramsCompanyId } = useCompany();
  const { isMounted, setInitial: setInitialData } = useDashboardData();
  const { setInitial: setInitialView } = useDashboardView();


  useEffect(() => {
    if (paramsCompanyId && isMounted) {
      setInitialData(getInitialStateData(paramsCompanyId));
      setInitialView(getInitialStateView(paramsCompanyId));
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [paramsCompanyId, isMounted]);

  // Вначале должен смонтироваться dashboardReducer
  if (! isMounted)  return  null


  return (
    <DashboardBodyWrapper>
      <DashboardBodyPanel />
      <ViewItemConfigurator />
      <DashboardBodyContent />
    </DashboardBodyWrapper>
  )
});
