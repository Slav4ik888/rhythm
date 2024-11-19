import { FC, memo } from 'react';
import { reducerDashboard } from 'entities/dashboard';
import { Sidebar } from 'widgets/sidebar';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components';
import { DashboardBody } from './body';
import { SidebarRegulatorWrapper } from 'shared/ui/wrappers';
import { useInitialEffect } from 'shared/lib/hooks';
import { setIsSidebar, useUIConfiguratorController } from 'app/providers/theme';



const initialReducers: ReducersList = {
  dashboard: reducerDashboard
};


const DashboardPage: FC = memo(() => {
  console.log('DashboardPage');
  const [_, dispatch] = useUIConfiguratorController();

  useInitialEffect(() => setIsSidebar(dispatch, true));

  return (
    <DynamicModuleLoader reducers={initialReducers}>
      <Sidebar />
      {/* {configsButton} */}

      <SidebarRegulatorWrapper body>
        <DashboardBody />
      </SidebarRegulatorWrapper>
    </DynamicModuleLoader>
  );
});

export default DashboardPage;
