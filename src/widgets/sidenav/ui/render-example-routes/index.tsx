import { routesList } from 'app/providers/routes';
import { Fragment } from 'react';
import { SidenavLink } from '../sidenav-items/sidenav-link';
import { SidenavNavLink } from '../sidenav-items/sidenav-navlink';



export const renderExampleRoutes = (collapseName: string) => routesList.map(
  ({ type, name, icon, title, noCollapse, href, key, route }) => {
    let returnValue;

    if (type === "examples") {
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
    return <Fragment key={key}>{returnValue}</Fragment>;
  }
);
