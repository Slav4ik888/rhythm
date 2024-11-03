
export enum AppRoutes {
  ROOT            = 'ROOT',
  
  // Auth
  SIGNUP          = 'SIGNUP',
  LOGIN           = 'LOGIN',

  USER_PROFILE    = 'USER_PROFILE',
  COMPANY_PROFILE = 'COMPANY_PROFILE',

  DASHBOARD       = 'DASHBOARD',
  DASHBOARD_ID    = 'DASHBOARD_ID',

  NOT_FOUND       = 'NOT_FOUND',
}

export const RouteName: Record<string, string> = {
  [AppRoutes.ROOT]            : '',
  // Auth
  [AppRoutes.SIGNUP]          : 'signup',
  [AppRoutes.LOGIN]           : 'login',
  // Profiles
  [AppRoutes.USER_PROFILE]    : 'user-profile',
  [AppRoutes.COMPANY_PROFILE] : 'company-profile',
  // Dashboard
  [AppRoutes.DASHBOARD]       : 'dashboard',
  [AppRoutes.NOT_FOUND]       : '*',
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.ROOT]            : '/',
  // Auth
  [AppRoutes.SIGNUP]          : '/signup',
  [AppRoutes.LOGIN]           : '/login',
  // Profiles
  [AppRoutes.USER_PROFILE]    : '/user-profile',
  [AppRoutes.COMPANY_PROFILE] : '/company-profile',
  // Dashboard
  [AppRoutes.DASHBOARD]       : '/dashboard',
  [AppRoutes.DASHBOARD_ID]    : '/dashboard/:companyId',
  [AppRoutes.NOT_FOUND]       : '*',
};
