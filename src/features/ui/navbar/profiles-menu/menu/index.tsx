import { FC, useCallback, memo } from 'react';
import KeyboardReturn from '@mui/icons-material/KeyboardReturn';
import AccountCircle from '@mui/icons-material/AccountCircle';
import HomeIcon from '@mui/icons-material/Home';
import { useUser } from 'entities/user';
import { RoutePath } from 'app/providers/routes';
import { useNavigate } from 'react-router-dom';
import { MenuItem } from 'shared/ui/items/menu-item';
import { Divider } from 'shared/ui/mui-components';



interface Props {
  onClose: () => void
}


// Меню с профилями для Navbar
export const ProfilesMenu: FC<Props> = memo(({ onClose }) => {
  const { serviceLogout } = useUser();
  const navigate = useNavigate();

  // Выход из аккаунта
  const handleUserLogout = useCallback(() => {
    onClose();
    serviceLogout();
    navigate(RoutePath.ROOT);
  }, [onClose, serviceLogout, navigate]);


  return (
    <>
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

      <Divider />

      <MenuItem
        label   = 'Выйти'
        icon    = {<KeyboardReturn fontSize='small' />}
        onClick = {handleUserLogout}
      />
    </>
  )
});
