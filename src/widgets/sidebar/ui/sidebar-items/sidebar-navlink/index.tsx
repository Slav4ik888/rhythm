import { FC, memo } from 'react';
import { SidebarCollapse } from '../sidebar-collapse';
import { NavLink, To } from 'react-router-dom';



interface Props {
  route  : To
  title  : string
  active : boolean // текущий активный sheetId
  icon   : MuiIcon | string
}

export const SidebarNavLink: FC<Props> = memo(({ active, icon, title, route }) => (
  <NavLink to={route}>
    <SidebarCollapse
      title  = {title}
      icon   = {icon}
      active = {active}
    />
  </NavLink>
));
