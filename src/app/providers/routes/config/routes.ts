
export enum AppRoutes {
  ROOT            = 'ROOT',
  // Auth
  SIGNUP          = 'SIGNUP',
  LOGIN           = 'LOGIN',
  // Profiles
  USER_PROFILE    = 'USER_PROFILE',
  // In Company
  SLUG            = 'SLUG',
  COMPANY_PROFILE = 'COMPANY_PROFILE',
  DASHBOARD       = 'DASHBOARD',
  // Docs
  POLICY          = 'POLICY',

  NOT_ACCESS      = 'NOT_ACCESS',
  NOT_FOUND       = 'NOT_FOUND',
}

export const RouteName: Record<string, string> = {
  [AppRoutes.ROOT]            : '',
  // Auth
  [AppRoutes.SIGNUP]          : 'signup',
  [AppRoutes.LOGIN]           : 'login',
  // Profiles
  [AppRoutes.USER_PROFILE]    : 'user-profile',
  // In Company
  [AppRoutes.SLUG]            : ':companyId',
  [AppRoutes.COMPANY_PROFILE] : 'company-profile',
  [AppRoutes.DASHBOARD]       : 'dashboard',
  // Docs
  [AppRoutes.POLICY]          : 'policy',

  [AppRoutes.NOT_ACCESS]      : 'not-access',
  [AppRoutes.NOT_FOUND]       : '*',
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.ROOT]            : '/',
  // Auth
  [AppRoutes.SIGNUP]          : '/signup',
  [AppRoutes.LOGIN]           : '/login',
  // Profiles
  [AppRoutes.USER_PROFILE]    : '/user-profile',

  // In Company
  [AppRoutes.SLUG]            : ':companyId',
  [AppRoutes.COMPANY_PROFILE] : 'company-profile',
  [AppRoutes.DASHBOARD]       : 'dashboard',
  // Docs
  [AppRoutes.POLICY]          : '/policy',

  [AppRoutes.NOT_ACCESS]      : '/not-access',
  [AppRoutes.NOT_FOUND]       : '*',
};
