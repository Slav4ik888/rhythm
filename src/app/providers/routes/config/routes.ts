
export enum AppRoutes {
  ROOT         = 'ROOT',
  DASHBOARD    = 'DASHBOARD',
  DASHBOARD_ID = 'DASHBOARD_ID',

  NOT_FOUND    = 'NOT_FOUND',
  SIGNUP       = 'SIGNUP',
  LOGIN        = 'LOGIN',
}


export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.ROOT]         : '/',
  [AppRoutes.DASHBOARD]    : '/dashboard',
  [AppRoutes.DASHBOARD_ID] : '/dashboard/:companyId',
  [AppRoutes.SIGNUP]       : '/signup',
  [AppRoutes.LOGIN]        : '/login',
  [AppRoutes.NOT_FOUND]    : '*',
};
