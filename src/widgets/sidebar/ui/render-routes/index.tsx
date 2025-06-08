import { ColorName } from 'app/providers/theme';
import { SidebarRouteListItem } from 'entities/dashboard-data';
import { Fragment } from 'react/jsx-runtime';
import { MDDivider } from 'shared/ui/mui-design-components';
import { SidebarLink } from '../sidebar-items/sidebar-link';
import { SidebarNavLink } from '../sidebar-items/sidebar-navlink';
import { SidebarTitle } from '../sidebar-items/sidebar-title';



// Render all the routes from the routes.js (All the visible items on the Sidebar)
export const renderRoutes = (
  routesList : SidebarRouteListItem[],
  activeName : string,
  textColor  : ColorName
) => routesList.map(({ type, title, icon, noCollapse, key, href, route }) => {
  let returnValue;

  if (type === 'collapse') {
    returnValue = href ? (
      <SidebarLink
        href       = {href}
        title      = {title as string}
        icon       = {icon}
        activeName = {activeName}
        noCollapse = {noCollapse}
      />
    ) : (
      <SidebarNavLink
        route      = {route as string}
        title      = {title as string}
        icon       = {icon}
        activeName = {activeName}
      />
    );
  }
  else if (type === 'title') {
    returnValue = (
      <SidebarTitle
        textColor = {textColor}
        title     = {title as string}
      />
    );
  }
  else if (type === 'divider') {
    returnValue = <MDDivider />;
  }

  return <Fragment key={key}>{returnValue}</Fragment>;
});
