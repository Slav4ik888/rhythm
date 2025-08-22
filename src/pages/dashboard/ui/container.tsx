import { FC, memo, useEffect } from 'react';
import { reducerDashboardData } from 'entities/dashboard-data';
import { Sidebar } from 'widgets/sidebar';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components';
import { DashboardBody } from './body';
import { SidebarRegulatorWrapper } from 'shared/ui/wrappers';
import { reducerDashboardView, getBunchesToUpdate, NO_SHEET_ID } from 'entities/dashboard-view';
import { useLocation } from 'react-router-dom';
import { __devLog } from 'shared/lib/tests/__dev-log';
import { useAccess, useCompany } from 'entities/company';
import { LS } from 'shared/lib/local-storage';
import { useDashboardViewServices } from 'features/dashboard-view/model/hooks/use-dashboard-view-services';
import { usePages } from 'shared/lib/hooks';
import { useDashboardGetData } from 'features/dashboard-data';
import { useUI } from 'entities/ui';



const initialReducers: ReducersList = {
  dashboardData      : reducerDashboardData,
  dashboardView      : reducerDashboardView,
};


export const DashboardPageContainer: FC = memo(() => {
  const { paramsCompanyId, paramsCompany, paramsBunchesUpdated } = useCompany();
  const { pathname } = useLocation();
  const { serviceGetBunches, setDashboardBunchesFromCache } = useDashboardViewServices();
  const { dashboardSheetId = NO_SHEET_ID } = usePages();
  const { serviceGetData } = useDashboardGetData();
  const { setPageLoading } = useUI();
  const { isDashboardAccessView } = useAccess();


  useEffect(() => {
    // Если нет доступа то нах с мопэда
    if (! isDashboardAccessView) return;

    // 1. GOOGLE-DATA - если нет данных, то загружаем
    if (! LS.getDashboardDataState(paramsCompanyId)) {
      setPageLoading({
        'get-g-data': {
          text: 'Загрузка данных c google-таблицы...',
          name: 'DashboardPageContainer'
        }
      });
      serviceGetData({ companyId: paramsCompanyId, dashboardSheetId });
    }

    // 2. VIEW-ITEMS
    const bunchesForLoad = getBunchesToUpdate(
      paramsBunchesUpdated,
      LS.getDashboardViewBunchesUpdated(paramsCompanyId)
    );

    // Загружаем из кеша bunches в которых нет изменений
    setDashboardBunchesFromCache({
      companyId      : paramsCompanyId, // paramsCompany.id,
      changedBunches : bunchesForLoad
    });

    if (bunchesForLoad.length) {
      __devLog('DashboardPageContainer', 'Bunches for load:', bunchesForLoad.length);
      __devLog('DashboardPageContainer', bunchesForLoad);
      serviceGetBunches({
        companyId      : paramsCompanyId, // paramsCompany.id,
        bunchIds       : bunchesForLoad,
        bunchesUpdated : paramsBunchesUpdated,
        dashboardSheetId,
        pathname
      });
    }
    else {
      __devLog('DashboardPageContainer', 'All bunches from cache');
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
