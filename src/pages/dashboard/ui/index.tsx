import { FC, memo } from 'react';
import { reducerDashboard } from 'entities/dashboard';
import { Sidenav } from 'widgets/sidenav';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components';
import { DashboardBody } from './body';
import { SidenavRegulatorWrapper } from 'shared/ui/wrappers';
import { useInitialEffect } from 'shared/lib/hooks';
import { setIsSidenav, useUIConfiguratorController } from 'app/providers/theme';



const initialReducers: ReducersList = {
  dashboard: reducerDashboard
};


const DashboardPage: FC = memo(() => {
  console.log('DashboardPage');
  const [_, dispatch] = useUIConfiguratorController();

  useInitialEffect(() => setIsSidenav(dispatch, true));

  return (
    <DynamicModuleLoader reducers={initialReducers}>
      <Sidenav />
      {/* {configsButton} */}

      <SidenavRegulatorWrapper>
        <DashboardBody />
      </SidenavRegulatorWrapper>
    </DynamicModuleLoader>
  );
});

export default DashboardPage;
