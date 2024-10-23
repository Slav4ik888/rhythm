import { ColorName } from 'app/providers/theme';
import { SidenavRouteListItem } from 'entities/dashboard';
import { Fragment } from 'react/jsx-runtime';
import { SidenavDivider } from '../../../../shared/ui/sidenav-divider';
import { SidenavLink } from '../sidenav-items/sidenav-link';
import { SidenavNavLink } from '../sidenav-items/sidenav-navlink';
import { SidenavTitle } from '../sidenav-items/sidenav-title';



// Render all the routes from the routes.js (All the visible items on the Sidenav)
export const renderRoutes = (routesList: SidenavRouteListItem[], activeName: string, textColor: ColorName) => routesList.map(({ type, title, icon, noCollapse, key, href, route }) => {
  console.log('title key: ', title, key);
    let returnValue;

    if (type === "collapse") {
      returnValue = href ? (
        <SidenavLink
          href       = {href}
          title      = {title as string}
          icon       = {icon}
          activeName = {activeName}
          noCollapse = {noCollapse}
        />
      ) : (
        <SidenavNavLink
          route      = {route as string}
          title      = {title as string}
          icon       = {icon}
          activeName = {activeName} 
        />
      );
    }
    else if (type === "title") {
      returnValue = (
        <SidenavTitle
          textColor = {textColor}
          title     = {title as string}
        />
      );
    }
    else if (type === "divider") {
      returnValue = <SidenavDivider />;
    }
  
  return <Fragment key={key}>{returnValue}</Fragment>;
});
