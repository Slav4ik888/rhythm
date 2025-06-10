import { FC, memo } from 'react';
import { Link } from 'react-router-dom';
import { RoutePath } from 'app/providers/routes';
import IconButton from '@mui/material/IconButton';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { Tooltip } from 'shared/ui/tooltip';
import { CustomTheme, useTheme } from 'app/providers/theme';
import { MDBox, MDButton } from 'shared/ui/mui-design-components';
import { SxNavbarIcon } from '../../..';



const useStyles = (theme: CustomTheme) => ({
  root: {
    display        : 'flex',
    justifyContent : 'flex-end',
  },
  signup: {
    textTransform: 'none',
    px: 3,
  }
});


interface Props {
  sx: SxNavbarIcon
}

/** Кнопка Navbar для входа в авторизацию */
export const AnyAuthBtns: FC<Props> = memo(({ sx }) => {
  const { signup } = useStyles(useTheme());

  return (
    <MDBox>
      <Link to={RoutePath.SIGNUP}>
        <MDButton sx={{ root: signup }} variant='text' color='text'>
          Регистрация
        </MDButton>
      </Link>

      <Tooltip title='Войти'>
        <Link to={RoutePath.LOGIN}>
          <IconButton sx={sx.button}>
            <AccountCircle sx={sx.icon} />
          </IconButton>
        </Link>
      </Tooltip>
    </MDBox>
  );
});
