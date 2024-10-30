
export enum AppRoutes {
  ROOT         = 'ROOT',
  SIGNUP       = 'SIGNUP',
  LOGIN        = 'LOGIN',

  DASHBOARD    = 'DASHBOARD',
  DASHBOARD_ID = 'DASHBOARD_ID',

  NOT_FOUND    = 'NOT_FOUND',
}

export const RouteName: Record<string, string> = {
  [AppRoutes.ROOT]         : '',
  [AppRoutes.SIGNUP]       : 'signup',
  [AppRoutes.LOGIN]        : 'login',
  [AppRoutes.DASHBOARD]    : 'dashboard',
  [AppRoutes.NOT_FOUND]    : '*',
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.ROOT]         : '/',
  [AppRoutes.SIGNUP]       : '/signup',
  [AppRoutes.LOGIN]        : '/login',

  [AppRoutes.DASHBOARD]    : '/dashboard',
  [AppRoutes.DASHBOARD_ID] : '/dashboard/:companyId',
  [AppRoutes.NOT_FOUND]    : '*',
};
