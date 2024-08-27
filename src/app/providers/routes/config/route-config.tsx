import { DashboardPage } from 'pages/dashboard';
import { NotFoundPage } from 'pages/not-found';
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
  [AppRoutes.NOT_FOUND]: {
    path    : RoutePath.NOT_FOUND,
    element : <NotFoundPage />
  },
};
