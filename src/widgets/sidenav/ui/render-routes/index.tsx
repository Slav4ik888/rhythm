import { ColorName } from 'app/providers/theme';
import { SidenavRouteListItem } from 'entities/dashboard';
import { SidenavDivider } from '../sidenav-items/sidenav-divider';
import { SidenavLink } from '../sidenav-items/sidenav-link';
import { SidenavNavLink } from '../sidenav-items/sidenav-navlink';
import { SidenavTitle } from '../sidenav-items/sidenav-title';



// Render all the routes from the routes.js (All the visible items on the Sidenav)
export const renderRoutes = (routesList: SidenavRouteListItem[], activeName: string, textColor: ColorName) => routesList.map(({ type, title, icon, noCollapse, key, href, route }) => {
    let returnValue;

    if (type === "collapse") {
      returnValue = href ? (
        <SidenavLink
          k          = {key as string}
          href       = {href}
          title      = {title as string}
          icon       = {icon}
          activeName = {activeName}
          noCollapse = {noCollapse}
        />
      ) : (
        <SidenavNavLink
          k          = {key as string}
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
          k         = {key as string}
          textColor = {textColor}
          title     = {title as string}
        />
      );
    }
    else if (type === "divider") {
      returnValue = <SidenavDivider k={key as string} />;
    }
  
  return returnValue;
});
