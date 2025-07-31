import { LinkType, RoutePath } from 'app/providers/routes';


export const getLinks = (companyId: string): LinkType[] => [
  {
    name        : 'Перейти в Dashboard',
    href        : `${companyId}/${RoutePath.DASHBOARD}`,
    requireAuth : true,
  },
];
