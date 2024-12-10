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

import { forwardRef, FC, ElementType, ReactNode } from 'react';

// Custom styles for MDButton
import MDButtonRoot from './md-button-root';

// Material Dashboard 2 React contexts
import { ColorName, SxCard, useUIConfiguratorController } from 'app/providers/theme';
import { CircularProgress } from 'shared/ui/circular-progress';


interface Props {
  color?     : ColorName
  variant?   : 'text' | 'contained' | 'outlined' | 'gradient'
  size?      : 'small' | 'medium' | 'large'
  type?      : 'button' | 'reset' | 'submit' | 'link' | 'default'
  circular?  : boolean
  iconOnly?  : boolean
  fullWidth? : boolean
  target?    : string
  rel?       : string
  href?      : string
  loading?   : boolean
  disabled?  : boolean
  startIcon? : ReactNode
  endIcon?   : ReactNode
  component? : ElementType
  children   : ReactNode
  sx?        : SxCard
  onClick?   : () => void
}


const MDButton: FC<Props> = forwardRef(
  ({
    color    = 'white',
    variant  = 'contained',
    size     = 'medium',
    circular = false,
    iconOnly = false,
    loading  = false,
    sx,
    children,
    ...rest }, ref) => {
    const [configuratorState] = useUIConfiguratorController();
    const { mode } = configuratorState;
    const darkMode = mode === 'dark';

    return (
      <MDButtonRoot
        {...rest}
        // @ts-ignore
        ref        = {ref}
        color      = 'primary'
        variant    = {variant === 'gradient' ? 'contained' : variant}
        size       = {size}
        ownerState = {{ color, variant, size, circular, iconOnly, darkMode, sx }}
      >
        {children}
        <CircularProgress size={30} loading={loading} />
      </MDButtonRoot>
    );
  }
);


export default MDButton;
