
export enum AppRoutes {
  ROOT        = 'ROOT',
  NOT_FOUND   = 'NOT_FOUND'
}


export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.ROOT]        : '/',
  [AppRoutes.NOT_FOUND]   : '*'
};
