import EqualizerIcon from '@mui/icons-material/Equalizer';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';
import GroupsIcon from '@mui/icons-material/Groups';
import StorefrontIcon from '@mui/icons-material/Storefront';
import CalculateIcon from '@mui/icons-material/Calculate';
import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturing';
import FolderSpecialIcon from '@mui/icons-material/FolderSpecial';
import { SidebarListItem } from 'shared/types/sidebar';
import { creatorFixDate } from 'entities/base';


const date = creatorFixDate('Korzant', 1752019200000); // 1752019200000  - '2025-07-09'


/** Sidebar routesList ЦСС */
export const routesListCss1d3r8: SidebarListItem[] = [
  {
    id         : 'dashboard',
    type       : 'collapse',
    title      : 'Dashboard',
    iconId     : 'equalizer',
    route      : '/dashboard',
    order      : 1000,
    createdAt  : date,
    lastChange : date
  },
  {
    type       : 'divider',
    id         : 'divider-1',
    order      : 2000,
    createdAt  : date,
    lastChange : date
  },
  {
    id         : 'department-7',
    type       : 'collapse',
    title      : '7 отделение',
    iconId     : 'account-balance',
    route      : '/dashboard/department-7',
    order      : 3000,
    createdAt  : date,
    lastChange : date
  },
  {
    id         : 'department-1',
    type       : 'collapse',
    title      : '1 отделение',
    iconId     : 'groups',
    route      : '/dashboard/department-1',
    order      : 4000,
    createdAt  : date,
    lastChange : date
  },
  {
    id         : 'department-2',
    type       : 'collapse',
    title      : '2 отделение',
    iconId     : 'storefront',
    route      : '/dashboard/department-2',
    order      : 5000,
    createdAt  : date,
    lastChange : date
  },
  {
    id         : 'department-4',
    type       : 'collapse',
    title      : '3 отделение',
    iconId     : 'calculate',
    route      : '/dashboard/department-3',
    order      : 6000,
    createdAt  : date,
    lastChange : date
  },
  {
    id         : 'department-4',
    type       : 'collapse',
    title      : '4 отделение',
    iconId     : 'precision-manufacturing',
    route      : '/dashboard/department-4',
    order      : 7000,
    createdAt  : date,
    lastChange : date
  },
  {
    id         : 'department-5',
    type       : 'collapse',
    title      : '5 отделение',
    iconId     : 'folder-special',
    route      : '/dashboard/department-5',
    order      : 8000,
    createdAt  : date,
    lastChange : date
  },
  {
    id         : 'department-6',
    type       : 'collapse',
    title      : '6 отделение',
    iconId     :'auto-fix-high',
    route      : '/dashboard/department-6',
    order      : 9000,
    createdAt  : date,
    lastChange : date
  },
];
