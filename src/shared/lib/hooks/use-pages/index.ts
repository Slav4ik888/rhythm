import { RoutePath } from 'app/providers/routes';
import { useLocation } from 'react-router-dom';
import { isDashboardPage as isDashboardPageFunc } from './utils';



export const usePages = () => {
  const location    = useLocation();
  const isDashboardPage = isDashboardPageFunc(location);
  const isLoginPage     = location.pathname === RoutePath.LOGIN;
  const isSignupPage    = location.pathname === RoutePath.SIGNUP;


  return {
    isDashboardPage, isLoginPage, isSignupPage
  }
}
