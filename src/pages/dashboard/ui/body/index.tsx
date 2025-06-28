import { memo, useEffect } from 'react';
import { useCompany } from 'entities/company';
import { getInitialState as getInitialStateData, useDashboardData } from 'entities/dashboard-data';
import { DashboardBodyWrapper } from './wrapper';
import { DashboardBodyPanel, DashboardBodyContent } from 'widgets/dashboard-view';
import { getInitialState as getInitialStateView, useDashboardView } from 'entities/dashboard-view';
import { ViewItemConfigurator } from 'widgets/view-configurator';
import { __devLog } from 'shared/lib/tests/__dev-log';
import cfg from 'app/config';
import { useDashboardTemplates, getInitialState as getInitialStateTemplates } from 'entities/dashboard-templates';
import { DashboardTemplates } from 'widgets/templates';



export const DashboardBody = memo(() => {
  const { paramsCompanyId } = useCompany();
  const { isMounted: isMountedData, setInitial: setInitialData } = useDashboardData();
  const { setInitial: setInitialView, editMode } = useDashboardView();
  const { setInitial: setInitialTemplates } = useDashboardTemplates();


  useEffect(() => {
    if (paramsCompanyId && isMountedData) {
      setInitialData(getInitialStateData(paramsCompanyId));
      setInitialView(getInitialStateView(paramsCompanyId));
      setInitialTemplates(getInitialStateTemplates());
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [paramsCompanyId, isMountedData]);

  // Вначале должен смонтироваться dashboardReducer
  if (! isMountedData) return  null


  // dev
  if (cfg.IS_DEV && cfg.DASHBOARD_DISABLE) return null

  return (
    <DashboardBodyWrapper>
      {editMode && <DashboardBodyPanel />}
      <ViewItemConfigurator />
      <DashboardBodyContent />
      <DashboardTemplates />
    </DashboardBodyWrapper>
  )
});
