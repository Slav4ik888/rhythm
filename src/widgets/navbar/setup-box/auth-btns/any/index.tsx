import { FC, memo } from 'react';
import { Link } from 'react-router-dom';
import { RoutePath } from 'app/providers/routes';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { MDBox, MDButton } from 'shared/ui/mui-design-components';
import { NavbarIcon } from 'shared/ui/navbar';
import { OpenUIConfiguratorBtn } from 'features/ui';



/** Кнопка Navbar для входа в авторизацию */
export const AnyAuthBtns: FC = memo(() => (
  <MDBox>
    <Link to={RoutePath.SIGNUP}>
      <MDButton
        variant = 'text'
        color   = 'text'
        sx      = {{ root: { textTransform: 'none', px: 3 } }}
      >
        Регистрация
      </MDButton>
    </Link>

    <Link to={RoutePath.LOGIN}>
      <NavbarIcon toolTitle='Войти' icon={AccountCircle} />
    </Link>

    <OpenUIConfiguratorBtn />
  </MDBox>
));
