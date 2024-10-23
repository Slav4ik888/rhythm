import EqualizerIcon from '@mui/icons-material/Equalizer';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';
import { SidenavRouteListItem } from '../../../types';
import GroupsIcon from '@mui/icons-material/Groups';
import StorefrontIcon from '@mui/icons-material/Storefront';
import CalculateIcon from '@mui/icons-material/Calculate';
import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturing';
import FolderSpecialIcon from '@mui/icons-material/FolderSpecial';


// type      : 'collapse',
// name      : 'Dashboard',
// key       : 'dashboard',
// icon      : <Icon fontSize='small'>dashboard</Icon>,
// route     : '/dashboard',
// component : <Dashboard />,

// type      : 'auth',
// name      : 'Reset Password',
// key       : 'reset-password',
// icon      : <Icon fontSize='small'>assignment</Icon>,
// route     : '/auth/reset-password',
// component : <ResetPassword />,


export const routesList_css_1d3r8: SidenavRouteListItem[] = [
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
    key   : 'department-7',
    icon  : <AccountBalanceIcon fontSize='small' />,
    route : '/department-7',
  },
  {
    type  : 'collapse',
    title : '1 отделение',
    key   : 'department-1',
    icon  : <GroupsIcon fontSize='small' />,
    route : '/department-1',
  },
  {
    type  : 'collapse',
    title : '2 отделение',
    key   : 'department-2',
    icon  : <StorefrontIcon fontSize='small' />,
    route : '/department-2',
  },
  {
    type  : 'collapse',
    title : '3 отделение',
    key   : 'department-3',
    icon  : <CalculateIcon fontSize='small' />,
    route : '/department-3',
  },
  {
    type  : 'collapse',
    title : '4 отделение',
    key   : 'department-4',
    icon  : <PrecisionManufacturingIcon fontSize='small' />,
    route : '/department-4',
  },
  {
    type  : 'collapse',
    title : '5 отделение',
    key   : 'department-5',
    icon  : <FolderSpecialIcon fontSize='small' />,
    route : '/department-5',
  },
  {
    type  : 'collapse',
    title : '6 отделение',
    key   : 'department-6',
    icon  : <AutoFixHighIcon fontSize='small' />,
    route : '/department-6',
  },
];
