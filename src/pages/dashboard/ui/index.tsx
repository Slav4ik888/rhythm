import { FC, memo } from 'react';
import { reducerDashboard } from 'entities/dashboard';
import { Sidenav } from 'widgets/sidenav';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components';
import { DashboardLayout } from 'shared/ui/layouts/dashboard-layout';
import { DashboardNavbar } from 'widgets/dashboard/navbar';
import { DashboardBody } from './body';



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

      <DashboardLayout>
        <DashboardNavbar />
        <DashboardBody />
      </DashboardLayout>
    </DynamicModuleLoader>
  );
});

export default DashboardPage;
