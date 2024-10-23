import { FC, memo } from 'react';
import SidenavCollapse from "../sidenav-collapse";
import { NavLink, To } from 'react-router-dom';


interface Props {
  route      : To
  title      : string
  activeName : string // as title
  icon       : React.ReactNode
}

export const SidenavNavLink: FC<Props> = memo(({ activeName, icon, title, route }) => (
  <NavLink to={route}>
    <SidenavCollapse
      title  = {title}
      icon   = {icon}
      active = {title === activeName}
    />
  </NavLink>
));

    