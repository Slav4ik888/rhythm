import { RoutePath } from 'app/providers/routes';
import { useLocation } from 'react-router-dom';
import { isDashboardPage as isDashboardPageFunc } from './utils';



export const usePages = () => {
  const location        = useLocation();
  const isDashboardPage = isDashboardPageFunc(location);
  const isLoginPage     = location.pathname === RoutePath.LOGIN;
  const isSignupPage    = location.pathname === RoutePath.SIGNUP;

  const dashboardSheetId = isDashboardPage
    ? location.pathname.split('/')[3] || 'main' // '/{companyId}/dashboard/{pageId}'
    : undefined;

  const isDashboardSheetMain = dashboardSheetId === 'main';


  return {
    isDashboardPage,
    isLoginPage,
    isSignupPage,

    dashboardSheetId,
    isDashboardSheetMain,
  }
}
