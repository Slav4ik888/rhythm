import { FC, memo, ReactNode } from 'react';
import { Button as MuiButton } from '@mui/material';
import { CircularProgress } from 'shared/ui/circular-progress';
import { ColorName, CustomTheme, useTheme } from 'app/providers/theme';
import { Tooltip } from 'shared/ui/tooltip';
import { ButtonType, Variant } from './types';
import { useStyles } from './use-styles';
import { MDButton } from 'shared/ui/mui-design-components';



interface Props {
  text       : string
  type?      : ButtonType
  toolTitle? : string
  loading?   : boolean
  disabled?  : boolean
  variant?   : Variant
  size?      : 'small' | 'medium' | 'large'
  sx?        : any
  color?     : ColorName
  startIcon? : ReactNode
  endIcon?   : ReactNode
  onClick    : () => void
}


/** 2024-10-30 */
export const Button: FC<Props> = memo(({
  text,
  toolTitle = '',
  type      = ButtonType.PRIMARY,
  loading   = false,
  variant   = 'contained',
  size      = 'medium',
  disabled,
  sx,
  startIcon,
  endIcon,
  color,
  onClick
}) => {
  const { root } = useStyles(useTheme() as unknown as CustomTheme, sx, type, variant, disabled);
  

  return (
    <Tooltip title={toolTitle}>
      <MDButton
        variant   = {variant}
        color     = {color}
        disabled  = {disabled || loading}
        size      = {size}
        startIcon = {startIcon}
        endIcon   = {endIcon}
        sx        = {root}
        onClick   = {onClick}
      >
        {/* {startIcon} */}
        {text}
        {/* {endIcon} */}
        <CircularProgress size={30} loading={loading} />
      </MDButton>
    </Tooltip>
  )
});
