import { FC, useCallback } from 'react';
import Menu from '@mui/material/Menu';
import KeyboardReturn from '@mui/icons-material/KeyboardReturn';
import AccountCircle from '@mui/icons-material/AccountCircle';
import HomeIcon from '@mui/icons-material/Home';
import { useUser } from 'entities/user';
import { RoutePath } from 'app/providers/routes';
import { useNavigate } from 'react-router-dom';
import { MDDivider } from 'shared/ui/mui-design-components';
import { MenuItem } from 'shared/ui/items/menu-item';
import { CustomTheme } from 'app/providers/theme';



type Props = {
  open     : boolean
  anchorEl : HTMLElement | null
  menuId   : string
  onClose  : () => void
};


// Меню с профилями для Navbar
export const ProfilesMenu: FC<Props> = ({ open, anchorEl, menuId, onClose }) => {
  const { serviceLogout } = useUser();
  const navigate = useNavigate();

  // Выход из аккаунта
  const handleUserLogout = useCallback(() => {
    onClose();
    serviceLogout();
    navigate(RoutePath.ROOT);
  }, [onClose, serviceLogout, navigate]);


  // const type = role === Role.SUPER ? WhoInProfile.SUPER : WhoInProfile.USER;

  return (
    <Menu
      keepMounted
      id              = {menuId}
      open            = {open}
      anchorEl        = {anchorEl}
      anchorOrigin    = {{ vertical: 'top', horizontal: 'right' }}
      transformOrigin = {{ vertical: 'top', horizontal: 'right' }}
      slotProps       = {{
        paper: {
          sx: {
            backgroundColor: (theme) => (theme as CustomTheme).palette.navbar.bg
          }
        }
      }}
      onClose         = {onClose}
    >
      <MenuItem
        label   = 'Ваш профиль'
        route   = {RoutePath.USER_PROFILE}
        icon    = {<AccountCircle fontSize='small' />}
        onClick = {onClose}
      />
      <MenuItem
        label   = 'Аккаунт компании'
        route   = {RoutePath.COMPANY_PROFILE}
        icon    = {<HomeIcon fontSize='small' />}
        onClick = {onClose}
      />

      <MDDivider />

      <MenuItem
        label   = 'Выйти'
        icon    = {<KeyboardReturn fontSize='small' />}
        onClick = {handleUserLogout}
      />
    </Menu>
  )
};
