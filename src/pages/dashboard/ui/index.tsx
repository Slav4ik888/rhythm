import { FC, memo } from 'react';
import { reducerDashboardData } from 'entities/dashboard-data';
import { Sidebar } from 'widgets/sidebar';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components';
import { DashboardBody } from './body';
import { SidebarRegulatorWrapper } from 'shared/ui/wrappers';
import { useInitialEffect } from 'shared/lib/hooks';
import { setIsSidebar, useUIConfiguratorController } from 'app/providers/theme';
import { reducerDashboardView } from 'entities/dashboard-view';
import { RequireAuth } from 'app/providers/routes';



const initialReducers: ReducersList = {
  dashboardData: reducerDashboardData,
  dashboardView: reducerDashboardView
};


const DashboardPage: FC = memo(() => {
  const [_, dispatch] = useUIConfiguratorController();

  useInitialEffect(() => setIsSidebar(dispatch, true));


  return (
    <RequireAuth>
      <DynamicModuleLoader reducers={initialReducers}>
        <Sidebar />

        <SidebarRegulatorWrapper body>
          <DashboardBody />
        </SidebarRegulatorWrapper>
      </DynamicModuleLoader>
    </RequireAuth>
  );
});

export default DashboardPage;
