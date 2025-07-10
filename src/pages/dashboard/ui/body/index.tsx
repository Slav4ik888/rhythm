import { memo, useEffect } from 'react';
import { useCompany } from 'entities/company';
import { getInitialState as getInitialStateData, useDashboardData } from 'entities/dashboard-data';
import { DashboardBodyWrapper } from './wrapper';
import { DashboardBodyPanel, DashboardBodyContent } from 'widgets/dashboard-view';
import {
  getBunchesToUpdate, getInitialState as getInitialStateView, useDashboardViewActions
 } from 'entities/dashboard-view';
import { ViewItemConfigurator } from 'widgets/view-configurator';
import { __devLog } from 'shared/lib/tests/__dev-log';
import cfg from 'app/config';
import { useDashboardTemplates, getInitialState as getInitialStateTemplates } from 'entities/dashboard-templates';
import { DashboardTemplates } from 'widgets/dashboard-templates';
import { LS } from 'shared/lib/local-storage';



export const DashboardBody = memo(() => {
  const { paramsCompanyId } = useCompany();
  const { isMounted: isMountedData, setInitial: setInitialData } = useDashboardData();
  const { setInitial: setInitialView, editMode } = useDashboardViewActions();
  const { setInitial: setInitialTemplates } = useDashboardTemplates();
  const { bunchesUpdated, serviceGetTemplates } = useDashboardTemplates();


  useEffect(() => {
    // Templates
    if (bunchesUpdated) { // Запускаем после получения данных из DB
      const bunchesForLoad = getBunchesToUpdate(bunchesUpdated, LS.getDashboardTemplatesBunchesUpdated());

      if (bunchesForLoad.length) {
        __devLog('Template bunches for load:', bunchesForLoad.length);
        __devLog(bunchesForLoad);
        serviceGetTemplates({
          bunchIds: bunchesForLoad,
        });
      }
      else {
        __devLog('All template bunches from cache');
      }
    }
  },
    [bunchesUpdated, serviceGetTemplates]
  );


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
  if (cfg.DASHBOARD_DISABLE) return null

  return (
    <DashboardBodyWrapper>
      {editMode && <DashboardBodyPanel />}
      <ViewItemConfigurator />
      <DashboardBodyContent />
      <DashboardTemplates />
    </DashboardBodyWrapper>
  )
});
