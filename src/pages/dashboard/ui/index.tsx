import { FC, memo } from 'react';
import { Dashboard, reducerDashboard } from 'entities/dashboard';
import { Sidenav } from 'widgets/sidenav';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components';



const initialReducers: ReducersList = {
  dashboard: reducerDashboard
};


const DashboardPage: FC = memo(() => {
  console.log('DashboardPage');

  return (
    <DynamicModuleLoader reducers={initialReducers}>
      <Sidenav />
      {/* <Configurator /> */}
      {/* {configsButton} */}

      <Dashboard />
    </DynamicModuleLoader>
  );
});

export default DashboardPage;
