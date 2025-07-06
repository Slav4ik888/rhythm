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
import { usePages } from 'shared/lib/hooks';
import { useDashboardGetData } from 'features/dashboard-data';
import { useUI } from 'entities/ui';



const initialReducers: ReducersList = {
  dashboardData      : reducerDashboardData,
  dashboardView      : reducerDashboardView,
  dashboardTemplates : reducerDashboardTemplates
};


export const DashboardPageContainer: FC = memo(() => {
  const { paramsCompanyId, paramsCompany, paramsBunchesUpdated } = useCompany();
  const { pathname } = useLocation();
  const { serviceGetViewItems, setDashboardBunchesFromCache } = useDashboardViewServices();
  const { serviceGetBunchesUpdated } = useDashboardTemplates();
  const { dashboardPageId = 'main' } = usePages();
  const { serviceGetData } = useDashboardGetData();
  const { setPageLoading } = useUI();


  useEffect(() => {
    // 1. TEMPLATES
    serviceGetBunchesUpdated(); /** Get актуальное состояние bunchesUpdated from DB */

    // 2. GOOGLE-DATA - если нет данных, то загружаем
    if (! LS.getDashboardDataState(paramsCompanyId)) {
      setPageLoading({
        'get-g-data': {
          text: 'Загрузка данных c google-таблицы...',
          name: 'DashboardPageContainer'
        }
      });
      serviceGetData({ companyId: paramsCompanyId, dashboardPageId });
    }

    // 3. VIEW-ITEMS
    const bunchesForLoad = getBunchesToUpdate(
      paramsBunchesUpdated,
      LS.getDashboardViewBunchesUpdated(paramsCompanyId)
    );

    // TODO: sheetId подставлять нужный

    // Загружаем ViewItems из кеша
    setDashboardBunchesFromCache(paramsCompany.id);

    if (bunchesForLoad.length) {
      __devLog('Bunches for load:', bunchesForLoad.length);
      __devLog(bunchesForLoad);
      serviceGetViewItems({
        companyId      : paramsCompany.id,
        bunchIds       : bunchesForLoad,
        bunchesUpdated : paramsBunchesUpdated,
        dashboardPageId,
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
