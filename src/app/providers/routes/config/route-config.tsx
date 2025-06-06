import { CompanyProfilePage } from 'pages/company-profile';
import { DashboardPage } from 'pages/dashboard';
import { LoginPage } from 'pages/login';
import { NotFoundPage } from 'pages/not-found';
import { SignupPage } from 'pages/signup';
import { UserProfilePage } from 'pages/user-profile';
import { RouteProps } from 'react-router-dom';
import { AppRoutes, RoutePath } from './routes';


export type AppRouteProps = RouteProps & {
  authOnly?: boolean
}


export const routeConfig: Record<AppRoutes, AppRouteProps> = {
  [AppRoutes.ROOT]: {
    path    : RoutePath.ROOT,
    element : <></>
  },
  
  // Auth
  [AppRoutes.SIGNUP]: {
    path    : RoutePath.SIGNUP,
    element : <SignupPage />
  },
  [AppRoutes.LOGIN]: {
    path    : RoutePath.LOGIN,
    element : <LoginPage />
  },

  // Profiles
  [AppRoutes.USER_PROFILE]: {
    path    : RoutePath.USER_PROFILE,
    element : <UserProfilePage />
  },
  [AppRoutes.COMPANY_PROFILE]: {
    path    : RoutePath.COMPANY_PROFILE,
    element : <CompanyProfilePage />
  },

  // Dashboard
  [AppRoutes.DASHBOARD]: {
    path    : RoutePath.DASHBOARD,
    element : <DashboardPage />
  },
  // [AppRoutes.DASHBOARD_ID]: {
  //   path    : RoutePath.DASHBOARD_ID,
  //   element : <DashboardPage />
  // },

  // Others
  [AppRoutes.NOT_FOUND]: {
    path    : RoutePath.NOT_FOUND,
    element : <NotFoundPage />
  },
};
