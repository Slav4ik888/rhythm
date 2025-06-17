import { FC, memo } from 'react';
import { Link } from 'react-router-dom';
import { RoutePath } from 'app/providers/routes';
import MenuItem from '@mui/material/MenuItem';
import { CustomTheme, useTheme } from 'app/providers/theme';
import { NavbarMenu } from 'shared/ui/navbar';



const useStyles = (theme: CustomTheme) => ({
  item: {
    display: 'flex',
    justifyContent: 'center',
    mx: 2,
    py: 1,
    px: 3,
    color: theme.palette.primary.contrastText
  }
});


type Props = {
  open     : boolean
  anchorEl : HTMLElement | null
  onClose  : () => void
}

/** Кнопка Navbar для входа в авторизацию */
export const MobileAuthBtn: FC<Props> = memo(({ open, anchorEl, onClose }) => {
  const sx = useStyles(useTheme());

  if (! open) return null;

  return (
    <NavbarMenu open={open} anchorEl={anchorEl} onClose={onClose}>
      <MenuItem sx={sx.item} onClick={onClose}>
        <Link to={RoutePath.SIGNUP}>
          Регистрация
        </Link>
      </MenuItem>

      <MenuItem sx={sx.item} onClick={onClose}>
        <Link to={RoutePath.LOGIN}>
          Войти
        </Link>
      </MenuItem>
    </NavbarMenu>
  );
});
