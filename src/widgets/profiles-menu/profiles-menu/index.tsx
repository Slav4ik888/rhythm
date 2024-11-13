import { FC } from 'react';
import { MenuItem, Menu } from '@mui/material';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { KeyboardReturn, AccountCircle, Home as HomeIcon } from '@mui/icons-material';
import { useUser } from 'entities/user';
import { RoutePath } from 'app/providers/routes';
import { Link, useNavigate } from 'react-router-dom';
import { SidebarDivider } from 'shared/ui/sidebar-divider';



type Props = {
  open       : boolean;
  anchorEl   : HTMLElement | null;
  menuId     : string;
  onClose    : () => void;
};


// Меню с профилями для Navbar
export const ProfilesMenu: FC<Props> = ({ open, anchorEl, menuId, onClose }) => {
  const { serviceLogout } = useUser();
  const navigate = useNavigate();

  // Выход из аккаунта
  const handleUserLogout = () => {
    onClose();
    serviceLogout();
    navigate(RoutePath.ROOT);
  };
  
  // const type = role === Role.SUPER ? WhoInProfile.SUPER : WhoInProfile.USER;
  
  return (
    <Menu
      keepMounted
      id              = {menuId}
      open            = {open}
      anchorEl        = {anchorEl}
      anchorOrigin    = {{ vertical: 'top', horizontal: 'right' }}
      transformOrigin = {{ vertical: 'top', horizontal: 'right' }}
      onClose         = {onClose}
    >
      <Link to={RoutePath.USER_PROFILE} onClick={onClose}>
        <MenuItem>
          <ListItemIcon>
            <AccountCircle fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="Ваш профиль" />
        </MenuItem>
      </Link>

      <Link to={RoutePath.COMPANY_PROFILE} onClick={onClose}>
        <MenuItem>
            <ListItemIcon>
              <HomeIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText primary="Аккаунт компании" />
        </MenuItem>
      </Link>

      <SidebarDivider />

      <MenuItem onClick={handleUserLogout}>
        <ListItemIcon>
          <KeyboardReturn fontSize="small" />
        </ListItemIcon>
        <ListItemText primary="Выйти" />
      </MenuItem>
    </Menu>
  )
};
