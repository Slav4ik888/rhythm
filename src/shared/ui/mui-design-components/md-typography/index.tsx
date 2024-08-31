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

import { forwardRef, FC } from "react";

// Custom styles for MDTypography
import MDTypographyRoot from "./md-typography-root";

// Material Dashboard 2 React contexts
import { ColorName, useMaterialUIController } from "app/providers/theme";
import { TypographyOwnProps } from '@mui/material';



interface Props extends TypographyOwnProps {
  color?: ColorName
  textTransform?: "none" | "capitalize" | "uppercase" | "lowercase"
  verticalAlign?: "unset" | "baseline" | "sub" | "super" | "text-top" | "text-bottom" | "middle" | "top" | "bottom"
  textGradient?: boolean
  opacity?: number
  component?: React.ElementType
  children: React.ReactNode
  sx?: any
}


const MDTypography: FC<Props> = forwardRef(
  (
    {
      color = "dark",
      fontWeight = false,
      textTransform = "none",
      verticalAlign = "unset",
      textGradient = false,
      opacity = 1,
      children, ...rest
    },
    ref
  ) => {
    const [controller] = useMaterialUIController();
    const { darkMode } = controller;

    return (
      <MDTypographyRoot
        {...rest}
        // @ts-ignore
        ref={ref}
        ownerState={{
          color,
          textTransform,
          verticalAlign,
          fontWeight,
          opacity,
          textGradient,
          darkMode,
        }}
      >
        {children}
      </MDTypographyRoot>
    );
  }
);


export default MDTypography;