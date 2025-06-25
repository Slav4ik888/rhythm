import { FC, memo, useEffect } from 'react';
import { reducerDashboardData } from 'entities/dashboard-data';
import { Sidebar } from 'widgets/sidebar';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components';
import { DashboardBody } from './body';
import { SidebarRegulatorWrapper } from 'shared/ui/wrappers';
import { useInitialEffect } from 'shared/lib/hooks';
import { setIsSidebar, useUIConfiguratorController } from 'app/providers/theme';
import { NO_SHEET_ID, reducerDashboardView, useDashboardView, getBunchesToUpdate } from 'entities/dashboard-view';
import { useLocation } from 'react-router-dom';
import { __devLog } from 'shared/lib/tests/__dev-log';
import { useCompany } from 'entities/company';
import { LS } from 'shared/lib/local-storage';



const initialReducers: ReducersList = {
  dashboardData: reducerDashboardData,
  dashboardView: reducerDashboardView
};


export const DashboardPageContainer: FC = memo(() => {
  const [_, dispatch] = useUIConfiguratorController();
  const { paramsCompanyId, paramsCompany, paramsBunchesUpdated } = useCompany();
  const { pathname } = useLocation();
  const { serviceGetBunches, setDashboardBunchesFromCache } = useDashboardView();

  useInitialEffect(() => {
    setIsSidebar(dispatch, true);
  });

  useEffect(() => {
    const bunchesForLoad = getBunchesToUpdate(paramsBunchesUpdated, LS.getDashboardBunchesUpdated(paramsCompanyId));

    // TODO: sheetId подставлять нужный

    // Загружаем всё, что в кеше
    setDashboardBunchesFromCache(paramsCompany.id);

    if (bunchesForLoad.length) {
      __devLog('Bunches for load:', bunchesForLoad.length);
      __devLog(bunchesForLoad);
      serviceGetBunches({
        companyId      : paramsCompany.id,
        bunchIds       : bunchesForLoad,
        bunchesUpdated : paramsBunchesUpdated,
        pathname
      });
    }
    else {
      __devLog('All bunches from cache');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <DynamicModuleLoader reducers={initialReducers}>
      <Sidebar />

      <SidebarRegulatorWrapper body>
        <DashboardBody />
      </SidebarRegulatorWrapper>
    </DynamicModuleLoader>
  );
});
