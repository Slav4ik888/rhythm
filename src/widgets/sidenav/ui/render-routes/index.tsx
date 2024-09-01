import { routesList } from 'app/providers/routes';
import { ColorName } from 'app/providers/theme';
import React from 'react';
import { SidenavDivider } from '../sidenav-items/sidenav-divider';
import { SidenavLink } from '../sidenav-items/sidenav-link';
import { SidenavNavLink } from '../sidenav-items/sidenav-navlink';
import { SidenavTitle } from '../sidenav-items/sidenav-title';



// Render all the routes from the routes.js (All the visible items on the Sidenav)
export const renderRoutes = (collapseName: string, textColor: ColorName) => routesList.map(({ type, name, icon, title, noCollapse, key, href, route }) => {
    let returnValue;

    if (type === "collapse") {
      returnValue = href ? (
        <SidenavLink
          k            = {key}
          href         = {href}
          name         = {name}
          icon         = {icon}
          collapseName = {collapseName}
          noCollapse   = {noCollapse}
        />
      ) : (
        <SidenavNavLink
          k            = {key}
          route        = {route}
          name         = {name}
          icon         = {icon}
          collapseName = {collapseName} 
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
  
  return <React.Fragment key={key}>{returnValue}</React.Fragment>;
});
