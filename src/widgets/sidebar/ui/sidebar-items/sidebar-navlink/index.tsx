import { FC, memo } from 'react';
import SidebarCollapse from "../sidebar-collapse";
import { NavLink, To } from 'react-router-dom';


interface Props {
  route      : To
  title      : string
  activeName : string // as title
  icon       : React.ReactNode
}

export const SidebarNavLink: FC<Props> = memo(({ activeName, icon, title, route }) => (
  <NavLink to={route}>
    <SidebarCollapse
      title  = {title}
      icon   = {icon}
      active = {title === activeName}
    />
  </NavLink>
));

    