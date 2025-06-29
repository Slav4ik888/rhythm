import { FC, memo, useEffect } from 'react';
import { reducerDashboardData } from 'entities/dashboard-data';
import { Sidebar } from 'widgets/sidebar';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components';
import { DashboardBody } from './body';
import { SidebarRegulatorWrapper } from 'shared/ui/wrappers';
import { reducerDashboardView, getBunchesToUpdate } from 'entities/dashboard-view';
import { useLocation } from 'react-router-dom';
import { __devLog } from 'shared/lib/tests/__dev-log';
import { useCompany } from 'entities/company';
import { LS } from 'shared/lib/local-storage';
import { reducerDashboardTemplates, useDashboardTemplates } from 'entities/dashboard-templates';
import { useDashboardViewServices } from 'features/dashboard-view/model/hooks/use-dashboard-view';



const initialReducers: ReducersList = {
  dashboardData      : reducerDashboardData,
  dashboardView      : reducerDashboardView,
  dashboardTemplates : reducerDashboardTemplates
};


export const DashboardPageContainer: FC = memo(() => {
  const { paramsCompanyId, paramsCompany, paramsBunchesUpdated } = useCompany();
  const { pathname } = useLocation();
  const { serviceGetViewItems, setDashboardBunchesFromCache } = useDashboardViewServices();
  const { serviceGetTemplates } = useDashboardTemplates();


  useEffect(() => {
    const bunchesForLoad = getBunchesToUpdate(paramsBunchesUpdated, LS.getDashboardViewBunchesUpdated(paramsCompanyId));

    // TODO: sheetId подставлять нужный

    // Загружаем всё, что в кеше
    setDashboardBunchesFromCache(paramsCompany.id);
    // TODO: setDashboardTemplatesFromCache();

    if (
      // TODO: проверка timestamp на сервере и кэше и загрузка
      // eslint-disable-next-line no-constant-condition
      true
    ) {
      serviceGetTemplates();
    }

    if (bunchesForLoad.length) {
      __devLog('Bunches for load:', bunchesForLoad.length);
      __devLog(bunchesForLoad);
      serviceGetViewItems({
        companyId      : paramsCompany.id,
        bunchIds       : bunchesForLoad,
        bunchesUpdated : paramsBunchesUpdated,
        pathname
      });
    }
    else {
      __devLog('All bunches from cache');
    }
  },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );


  return (
    <DynamicModuleLoader reducers={initialReducers}>
      <Sidebar />

      <SidebarRegulatorWrapper body>
        <DashboardBody />
      </SidebarRegulatorWrapper>
    </DynamicModuleLoader>
  );
});
