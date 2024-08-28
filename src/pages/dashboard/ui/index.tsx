import { FC } from 'react';
import { DashboardContainer } from 'entities/dashboard';
import { WrapperDynamicReducers } from 'shared/ui/pages';



const DashboardPage: FC = () => {
  console.log('DashboardPage ');

  return (
    <WrapperDynamicReducers>
      {/* <Sidenav
        color={sidenavColor}
        brand={(transparentSidenav && !darkMode) || whiteSidenav ? brandDark : brandWhite}
        brandName="Rhythm Dashboard"
        routes={routes}
        onMouseEnter={handleOnMouseEnter}
        onMouseLeave={handleOnMouseLeave}
      /> */}
      {/* <Configurator /> */}
      {/* {configsButton} */}

      <DashboardContainer />
    </WrapperDynamicReducers>
  );
};

export default DashboardPage;
