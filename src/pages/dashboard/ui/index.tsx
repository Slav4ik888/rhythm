import { FC, memo, useEffect } from 'react';
import { reducerDashboardData } from 'entities/dashboard-data';
import { Sidebar } from 'widgets/sidebar';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components';
import { DashboardBody } from './body';
import { SidebarRegulatorWrapper } from 'shared/ui/wrappers';
import { useInitialEffect } from 'shared/lib/hooks';
import { setIsSidebar, useUIConfiguratorController } from 'app/providers/theme';
import { NO_SHEET_ID, reducerDashboardView, useDashboardView } from 'entities/dashboard-view';
import { useLocation } from 'react-router-dom';
import { __devLog } from 'shared/lib/tests/__dev-log';
import { useCompany } from 'entities/company';



const initialReducers: ReducersList = {
  dashboardData: reducerDashboardData,
  dashboardView: reducerDashboardView
};


const DashboardPage: FC = memo(() => {
  __devLog('DashboardPage');
  const [_, dispatch] = useUIConfiguratorController();
  const { paramsCompany } = useCompany();
  const { pathname } = useLocation();
  const { serviceGetViewItems } = useDashboardView();

  useInitialEffect(() => {
    setIsSidebar(dispatch, true);
  });

  useEffect(() => {
    if (paramsCompany.id) {
      // TODO: sheetId подставлять нужный
      serviceGetViewItems({ companyId: paramsCompany.id, sheetId: NO_SHEET_ID, pathname });
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

export default DashboardPage;
