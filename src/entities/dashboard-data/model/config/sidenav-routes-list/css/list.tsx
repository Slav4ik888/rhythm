import EqualizerIcon from '@mui/icons-material/Equalizer';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';
import { SidebarRouteListItem } from '../../../types';
import GroupsIcon from '@mui/icons-material/Groups';
import StorefrontIcon from '@mui/icons-material/Storefront';
import CalculateIcon from '@mui/icons-material/Calculate';
import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturing';
import FolderSpecialIcon from '@mui/icons-material/FolderSpecial';
import { CSS_SubRouteName } from './routes';



/** Sidebar routesList ЦСС */
export const routesList_css_1d3r8: SidebarRouteListItem[] = [
  {
    type  : 'collapse',
    title : 'Dashboard',
    key   : 'dashboard',
    icon  : <EqualizerIcon fontSize='small' />,
    route : '/dashboard',
  },
  {
    type  : 'divider',
    key   : 'divider-1',
  },
  {
    type  : 'collapse',
    title : '7 отделение',
    key   : `${CSS_SubRouteName.DEPARTMENT_7}`,
    icon  : <AccountBalanceIcon fontSize='small' />,
    route : `/dashboard/${CSS_SubRouteName.DEPARTMENT_7}`,
  },
  {
    type  : 'collapse',
    title : '1 отделение',
    key   : `${CSS_SubRouteName.DEPARTMENT_1}`,
    icon  : <GroupsIcon fontSize='small' />,
    route : `/dashboard/${CSS_SubRouteName.DEPARTMENT_1}`,
  },
  {
    type  : 'collapse',
    title : '2 отделение',
    key   : `${CSS_SubRouteName.DEPARTMENT_2}`,
    icon  : <StorefrontIcon fontSize='small' />,
    route : `/dashboard/${CSS_SubRouteName.DEPARTMENT_2}`,
  },
  {
    type  : 'collapse',
    title : '3 отделение',
    key   : `${CSS_SubRouteName.DEPARTMENT_3}`,
    icon  : <CalculateIcon fontSize='small' />,
    route : `/dashboard/${CSS_SubRouteName.DEPARTMENT_3}`,
  },
  {
    type  : 'collapse',
    title : '4 отделение',
    key   : `${CSS_SubRouteName.DEPARTMENT_4}`,
    icon  : <PrecisionManufacturingIcon fontSize='small' />,
    route : `/dashboard/${CSS_SubRouteName.DEPARTMENT_4}`,
  },
  {
    type  : 'collapse',
    title : '5 отделение',
    key   : `${CSS_SubRouteName.DEPARTMENT_5}`,
    icon  : <FolderSpecialIcon fontSize='small' />,
    route : `/dashboard/${CSS_SubRouteName.DEPARTMENT_5}`,
  },
  {
    type  : 'collapse',
    title : '6 отделение',
    key   : `${CSS_SubRouteName.DEPARTMENT_6}`,
    icon  : <AutoFixHighIcon fontSize='small' />,
    route : `/dashboard/${CSS_SubRouteName.DEPARTMENT_6}`,
  },
];
