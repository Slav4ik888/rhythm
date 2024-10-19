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
import { CustomTheme, useUIConfiguratorController } from "app/providers/theme";



interface Props {
  icon        : ReactNode | string
  title       : string
  active      : boolean
  noCollapse? : boolean
}


export const SidenavCollapse: FC<Props> = ({ icon, title, active, ...rest }) => {
  const [configuratorState] = useUIConfiguratorController();
  const { sidenavMini, mode } = configuratorState;
  const darkMode = mode === "dark";

  return (
    <ListItem component="li">
      <MDBox
        {...rest}
        sx={(theme: CustomTheme) => collapseItem(theme, { active, darkMode })}
      >
        <ListItemIcon sx={(theme) => collapseIconBox(theme as CustomTheme, { darkMode, active })}>
          {typeof icon === "string" ? (
            <Icon sx={(theme) => collapseIcon(theme as CustomTheme, { active })}>{icon}</Icon>
          ) : (
            icon
          )}
        </ListItemIcon>

        <ListItemText
          primary={title}
          sx={(theme) => collapseText(theme as CustomTheme, { active, sidenavMini })}
        />
      </MDBox>
    </ListItem>
  );
}


export default SidenavCollapse;
