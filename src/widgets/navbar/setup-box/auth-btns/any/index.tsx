import { FC, memo } from 'react';
import { Link } from 'react-router-dom';
import { RoutePath } from 'app/providers/routes';
import { IconButton, Button } from '@mui/material';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { Tooltip } from 'shared/ui/tooltip';
import { CustomTheme, useTheme } from 'app/providers/theme';
import { MDBox, MDButton } from 'shared/ui/mui-design-components';



const useStyles = (theme: CustomTheme) => ({
  root: {
    display        : 'flex',
    justifyContent : 'flex-end',
  },
  signup: {
    // color: '#4e4d3f',
    textTransform: 'none',
    // py: 1,
    px: 3,
  }
});


/** Кнопка Navbar для входа в авторизацию */
export const AnyAuthBtns: FC = memo(() => {
  const { signup } = useStyles(useTheme());

  return (
    <MDBox >
      <Link to={RoutePath.SIGNUP}>
        <MDButton sx={signup} variant='text' color='text'>
          Регистрация
        </MDButton>
      </Link>

      <Tooltip title='Войти'>
        <Link to={RoutePath.LOGIN}>
          <IconButton>
            <AccountCircle />
          </IconButton>
        </Link>
      </Tooltip>
    </MDBox>
  );
});
