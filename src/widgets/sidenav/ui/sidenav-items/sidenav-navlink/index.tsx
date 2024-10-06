import { FC, memo } from 'react';
import SidenavCollapse from "../sidenav-collapse";
import { NavLink, To } from 'react-router-dom';


interface Props {
  k          : string
  route      : To
  title      : string
  icon       : React.ReactNode
  activeName : string
}

export const SidenavNavLink: FC<Props> = memo(({ k: key, activeName, icon, title, route }) => (
  <NavLink to={route}>
    <SidenavCollapse
      title  = {title}
      icon   = {icon}
      active = {key === activeName}
    />
  </NavLink>
));

    