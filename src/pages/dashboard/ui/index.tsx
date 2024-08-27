import { FC } from 'react';
import { WrapperDynamicReducers } from 'shared/ui/pages';



const DashboardPage: FC = () => {

  return (
    <WrapperDynamicReducers>
      <Sidenav
        color={sidenavColor}
        brand={(transparentSidenav && !darkMode) || whiteSidenav ? brandDark : brandWhite}
        brandName="Material Dashboard 2"
        routes={routes}
        onMouseEnter={handleOnMouseEnter}
        onMouseLeave={handleOnMouseLeave}
      />
      {/* <Configurator /> */}
      {/* {configsButton} */}
    </WrapperDynamicReducers>
  );
};

export default DashboardPage;
