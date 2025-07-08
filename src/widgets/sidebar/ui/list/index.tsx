import { FC, useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import List from '@mui/material/List';
import { useUIConfiguratorController, ColorName } from 'app/providers/theme';
import { renderRoutes } from '../render-routes';
import { routesListCss1d3r8 } from 'entities/dashboard-data';
import { AddNewSheetBtn } from 'features/ui/sidebar';



export const SidebarList: FC = () => {
  const [configuratorState] = useUIConfiguratorController();
  const { mode } = configuratorState;
  const darkMode = mode === 'dark';
  const location = useLocation();
  const activeName = location.pathname.replace('/', ''); // dashboard/css_1d3r8

  const textColor: ColorName = useMemo(() => {
    if (! darkMode) return 'dark';
    if (darkMode) return 'inherit';
    return 'white' as ColorName
  }, [darkMode]);


  // TODO: вставлять routesList в функцию по companyId
  const routes = useMemo(() => renderRoutes(routesListCss1d3r8, activeName, textColor),
    [activeName, textColor]
  );


  return (
    <List>
      {routes}
      <AddNewSheetBtn />
    </List>
  );
}
