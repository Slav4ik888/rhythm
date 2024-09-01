import { FC, memo } from 'react';
import SidenavCollapse from "../sidenav-collapse";
import { NavLink, To } from 'react-router-dom';


interface Props {
  k: string
  route: To
  name: string
  icon: React.ReactNode
  collapseName: string
}

export const SidenavNavLink: FC<Props> = memo(({ k: key, collapseName, icon, name, route }) => (
  <NavLink to={route}>
    <SidenavCollapse name={name} icon={icon} active={key === collapseName} />
  </NavLink>
));

    