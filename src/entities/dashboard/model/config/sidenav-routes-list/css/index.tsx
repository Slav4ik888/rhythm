import EqualizerIcon from '@mui/icons-material/Equalizer';
import BackupTableIcon from '@mui/icons-material/BackupTable';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import MarkEmailUnreadIcon from '@mui/icons-material/MarkEmailUnread';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import LoginIcon from '@mui/icons-material/Login';
import { SidenavRouteListItem } from '../../../types';


// type      : "collapse",
// name      : "Dashboard",
// key       : "dashboard",
// icon      : <Icon fontSize="small">dashboard</Icon>,
// route     : "/dashboard",
// component : <Dashboard />,

// type      : "auth",
// name      : "Reset Password",
// key       : "reset-password",
// icon      : <Icon fontSize="small">assignment</Icon>,
// route     : "/auth/reset-password",
// component : <ResetPassword />,


export const routesList_css_1d3r8: SidenavRouteListItem[] = [
  {
    type  : "collapse",
    title : "Dashboard",
    key   : "dashboard",
    icon  : <EqualizerIcon fontSize="small" />,
    route : "/dashboard",
  },
  {
    type  : "divider",
  },
  {
    type  : "collapse",
    title : "7 отделение",
    key   : "department-7",
    icon  : <AccountBalanceIcon fontSize="small" />,
    route : "/department-7",
  },
  {
    type  : "collapse",
    title : "1 отделение",
    key   : "department-1",
    icon  : <MarkEmailUnreadIcon fontSize="small" />,
    route : "/department-1",
  },
  {
    type  : "collapse",
    title : "2 отделение",
    key   : "department-2",
    icon  : <AccountCircleIcon fontSize="small" />,
    route : "/department-2",
  },
  {
    type  : "collapse",
    title : "3 отделение",
    key   : "department-3",
    icon  : <LoginIcon fontSize="small" />,
    route : "/department-3",
  },
  {
    type  : "collapse",
    title : "4 отделение",
    key   : "department-4",
    icon  : <ExitToAppIcon fontSize="small" />,
    route : "/department-4",
  },
  {
    type  : "collapse",
    title : "5 отделение",
    key   : "department-5",
    icon  : <ExitToAppIcon fontSize="small" />,
    route : "/department-5",
  },
  {
    type  : "collapse",
    title : "6 отделение",
    key   : "department-6",
    icon  : <ExitToAppIcon fontSize="small" />,
    route : "/department-6",
  },
];
