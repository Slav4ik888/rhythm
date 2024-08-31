import { FC, memo, useState } from 'react';
import { DashboardContainer } from 'entities/dashboard';
import { WrapperDynamicReducers } from 'shared/ui/pages';
import { Sidenav } from 'widgets/sidenav';
import { useMaterialUIController, setMiniSidenav } from 'app/providers/theme';


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
    <WrapperDynamicReducers>
      <Sidenav
        onMouseEnter={handleOnMouseEnter}
        onMouseLeave={handleOnMouseLeave}
      />
      {/* <Configurator /> */}
      {/* {configsButton} */}

      <DashboardContainer />
    </WrapperDynamicReducers>
  );
});

export default DashboardPage;
