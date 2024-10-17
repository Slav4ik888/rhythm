import { DashboardPage } from 'pages/dashboard';
import { LoginPage } from 'pages/login';
import { NotFoundPage } from 'pages/not-found';
import { SignupPage } from 'pages/signup';
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
  [AppRoutes.DASHBOARD]: {
    path    : RoutePath.DASHBOARD,
    element : <DashboardPage />
  },
  [AppRoutes.DASHBOARD_ID]: {
    path    : RoutePath.DASHBOARD_ID,
    element : <DashboardPage />
  },
  [AppRoutes.SIGNUP]: {
    path    : RoutePath.SIGNUP,
    element : <SignupPage />
  },
  [AppRoutes.LOGIN]: {
    path    : RoutePath.LOGIN,
    element : <LoginPage />
  },
  [AppRoutes.NOT_FOUND]: {
    path    : RoutePath.NOT_FOUND,
    element : <NotFoundPage />
  },
};
