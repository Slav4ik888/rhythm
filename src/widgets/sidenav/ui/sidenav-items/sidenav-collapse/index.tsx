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

import { FC, ReactNode } from 'react';
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Icon from "@mui/material/Icon";
import MDBox from "shared/ui/mui-design-components/md-box";
import {
  collapseItem,
  collapseIconBox,
  collapseIcon,
  collapseText,
} from "./styles";
import { CustomMUITheme, useMaterialUIController } from "app/providers/theme";



interface Props {
  icon        : ReactNode | string
  title       : string
  active      : boolean
  noCollapse? : boolean
}


export const SidenavCollapse: FC<Props> = ({ icon, title, active, ...rest }) => {
  const [controller] = useMaterialUIController();
  const { miniSidenav, transparentSidenav, whiteSidenav, darkMode, sidenavColor } = controller;

  return (
    <ListItem component="li">
      <MDBox
        {...rest}
        sx={(theme: CustomMUITheme) =>
          collapseItem(theme, {
            active,
            transparentSidenav,
            whiteSidenav,
            darkMode,
            sidenavColor,
          })
        }
      >
        <ListItemIcon sx={(theme) => collapseIconBox(theme as CustomMUITheme, { transparentSidenav, whiteSidenav, darkMode, active })}>
          {typeof icon === "string" ? (
            <Icon sx={(theme) => collapseIcon(theme as CustomMUITheme, { active })}>{icon}</Icon>
          ) : (
            icon
          )}
        </ListItemIcon>

        <ListItemText
          primary={title}
          sx={(theme) =>
            collapseText(theme as CustomMUITheme, {
              miniSidenav,
              transparentSidenav,
              // whiteSidenav, здесь почему-то есть, а в collapseText не используется
              active,
            })
          }
        />
      </MDBox>
    </ListItem>
  );
}


export default SidenavCollapse;
