import { FC, useState } from 'react';
import { DashboardContainer } from 'entities/dashboard';
import { WrapperDynamicReducers } from 'shared/ui/pages';
import { Sidenav } from 'widgets/sidenav';
import { useMaterialUIController, setMiniSidenav } from 'app/providers/theme';
import brandDark from 'shared/assets/logo_small.png';
import { routesList } from 'app/providers/routes';


const DashboardPage: FC = () => {
  const [controller, dispatch] = useMaterialUIController();
  const {
    miniSidenav,
    sidenavColor,
    transparentSidenav,
    whiteSidenav,
    darkMode,
  } = controller;
  
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
        color={sidenavColor}
        brand={(transparentSidenav && !darkMode) || whiteSidenav ? brandDark : brandDark} //brandWhite
        brandName="Rhythm Dashboard"
        routes={routesList}
        onMouseEnter={handleOnMouseEnter}
        onMouseLeave={handleOnMouseLeave}
      />
      {/* <Configurator /> */}
      {/* {configsButton} */}

      <DashboardContainer />
    </WrapperDynamicReducers>
  );
};

export default DashboardPage;
