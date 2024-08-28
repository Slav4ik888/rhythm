/**
=========================================================
* Material Dashboard 2 PRO React - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/soft-ui-dashboard-pro-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

import { forwardRef, FC } from "react";


// Custom styles for MDButton
import MDButtonRoot from "./md-button-root";

// Material Dashboard 2 React contexts
import { useMaterialUIController } from "app/providers/theme";


interface Props {
  color?: "white" | "primary" | "secondary" | "info" | "success" | "warning" | "error" | "light" | "dark"
  variant?: "text" | "contained" | "outlined" | "gradient"
  size?: "small" | "medium" | "large"
  type?: "button" | "reset" | "submit" | "link" | "default"
  circular?: boolean
  iconOnly?: boolean
  fullWidth?: boolean
  children: React.ReactNode;
  sx?: any;
  onClick: () => void;
}


const MDButton: FC<Props> = forwardRef(
  ({
    color = "white",
    variant = "contained",
    size = "medium",
    circular = false,
    iconOnly = false,
    children,
    ...rest }, ref) => {
    const [controller] = useMaterialUIController();
    const { darkMode } = controller;

    return (
      <MDButtonRoot
        {...rest}
        // @ts-ignore
        ref={ref}
        color="primary"
        variant={variant === "gradient" ? "contained" : variant}
        size={size}
        ownerState={{ color, variant, size, circular, iconOnly, darkMode }}
      >
        {children}
      </MDButtonRoot>
    );
  }
);


export default MDButton;
