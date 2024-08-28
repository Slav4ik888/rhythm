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

import { RadiusName } from 'app/providers/theme';
import { forwardRef, FC } from "react";
import MDBoxRoot from "./md-box-root";



interface Props {
  variant?: "contained" | "gradient"
  bgColor?: string
  color?: string
  opacity?: number
  borderRadius?: RadiusName
  shadow?: any
  coloredShadow?: "primary" | "secondary" | "info" | "success" | "warning" | "error" | "light" | "dark" | "none"
  children: React.ReactNode;
  sx: any;
}


const MDBox: FC<Props> = forwardRef(
  ({
    variant = "contained",
    bgColor = "transparent",
    color = "dark",
    opacity = 1,
    borderRadius = "none",
    shadow = "none",
    coloredShadow = "none", ...rest }, ref) => (
    <MDBoxRoot
      {...rest}
      ref={ref}
      // @ts-ignore
      ownerState={{ variant, bgColor, color, opacity, borderRadius, shadow, coloredShadow }}
    />
  )
);

export default MDBox;
