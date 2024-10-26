/**
=========================================================
* Material Dashboard 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

/** 
  All of the routes for the Material Dashboard 2 React are added here,
  You can add a new route, customize the routes and delete the routes here.

  Once you add a new route on this file it will be visible automatically on
  the Sidebar.

  For adding a new route you can follow the existing routes in the routes array.
  1. The `type` key with the `collapse` value is used for a route.
  2. The `type` key with the `title` value is used for a title inside the Sidebar. 
  3. The `type` key with the `divider` value is used for a divider between Sidebar items.
  4. The `name` key is used for the name of the route on the Sidebar.
  5. The `key` key is used for the key of the route (It will help you with the key prop inside a loop).
  6. The `icon` key is used for the icon of the route on the Sidebar, you have to add a node.
  7. The `collapse` key is used for making a collapsible item on the Sidebar that has other routes
  inside (nested routes), you need to pass the nested routes inside an array as a value for the `collapse` key.
  8. The `route` key is used to store the route location which is used for the react router.
  9. The `href` key is used to store the external links location.
  10. The `title` key is only for the item with the type of `title` and its used for the title text on the Sidebar.
  10. The `component` key is used to store the component of its route.
*/

import EqualizerIcon from '@mui/icons-material/Equalizer';
import BackupTableIcon from '@mui/icons-material/BackupTable';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import MarkEmailUnreadIcon from '@mui/icons-material/MarkEmailUnread';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import LoginIcon from '@mui/icons-material/Login';
import { SidebarRouteListItem } from '../../../types';



export const routesList_demo_pecar: SidebarRouteListItem[] = [
  {
    type: "collapse",
    title: "Dashboard",
    key: "dashboard",
    icon: <EqualizerIcon fontSize="small" />,
    route: "/dashboard",
  },
  {
    type: "collapse",
    title: "Tables",
    key: "tables",
    icon: <BackupTableIcon fontSize="small" />,
    route: "/tables",
  },
  {
    type: "collapse",
    title: "Billing",
    key: "billing",
    icon: <AccountBalanceIcon fontSize="small" />,
    route: "/billing",
  },
  {
    type: "collapse",
    title: "Notifications",
    key: "notifications",
    icon: <MarkEmailUnreadIcon fontSize="small" />,
    route: "/notifications",
  },
  {
    type: "collapse",
    title: "Profile",
    key: "profile",
    icon: <AccountCircleIcon fontSize="small" />,
    route: "/profile",
  },
  {
    type: "collapse",
    title: "Sign In",
    key: "sign-in",
    icon: <LoginIcon fontSize="small" />,
    route: "/authentication/sign-in",
  },
  {
    type: "collapse",
    title: "Sign Up",
    key: "sign-up",
    icon: <ExitToAppIcon fontSize="small" />,
    route: "/authentication/sign-up",
  },
];
