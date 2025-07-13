import { RoutePath } from 'app/providers/routes';
import { NO_SHEET_ID } from 'entities/dashboard-view';
import { useLocation } from 'react-router-dom';
import { isDashboardPage as isDashboardPageFunc } from './utils';



export const usePages = () => {
  const location        = useLocation();
  const isDashboardPage = isDashboardPageFunc(location);
  const isLoginPage     = location.pathname === RoutePath.LOGIN;
  const isSignupPage    = location.pathname === RoutePath.SIGNUP;

  const dashboardSheetId = isDashboardPage
    ? location.pathname.split('/')[3] || NO_SHEET_ID // 'main' // '/{companyId}/dashboard/{pageId}'
    : undefined;

  const isDashboardSheetMain = dashboardSheetId === NO_SHEET_ID; // 'main';


  return {
    isDashboardPage,
    isLoginPage,
    isSignupPage,

    dashboardSheetId,
    isDashboardSheetMain,
  }
}
