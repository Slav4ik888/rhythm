import { FC, memo, useState } from 'react';
import { Dashboard, reducerDashboard } from 'entities/dashboard';
import { Sidenav } from 'widgets/sidenav';
import { useMaterialUIController, setMiniSidenav } from 'app/providers/theme';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components';



const initialReducers: ReducersList = {
  dashboard: reducerDashboard
};


const DashboardPage: FC = memo(() => {
  const [controller, dispatch] = useMaterialUIController();
  const { miniSidenav } = controller;
  
  const [onMouseEnter, setOnMouseEnter] = useState(false);
  
  // Open sidenav when mouse enter on mini sidenav
  const handleOnMouseEnter = () => {
    if (miniSidenav && !onMouseEnter) {
      setMiniSidenav(dispatch, false);
      setOnMouseEnter(true);
    }
  };

  // Close sidenav when mouse leave mini sidenav
  const handleOnMouseLeave = () => {
    if (onMouseEnter) {
      setMiniSidenav(dispatch, true);
      setOnMouseEnter(false);
    }
  };

  console.log('DashboardPage ');

  return (
    <DynamicModuleLoader reducers={initialReducers}>
      <Sidenav
        onMouseEnter={handleOnMouseEnter}
        onMouseLeave={handleOnMouseLeave}
      />
      {/* <Configurator /> */}
      {/* {configsButton} */}

      <Dashboard />
    </DynamicModuleLoader>
  );
});

export default DashboardPage;
