import { FC, memo } from 'react';
import { OverridableComponent } from '@mui/material/OverridableComponent';
import { SvgIconTypeMap } from '@mui/material/SvgIcon';
import { useSxNavbarIconButton, useSxNavbarIconsStyle } from 'shared/lib/styles/navbar';
import { IconButton } from '../../../mui-components';



export interface SxMenuIcon {
  button? : any
  icon?   : any
}


interface Props {
  toolTitle?     : string
  disableRipple? : boolean
  disabled?      : boolean
  sx?            : SxMenuIcon
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  icon           : OverridableComponent<SvgIconTypeMap<{}, 'svg'>> & { muiName: string }
  onClick?       : (event: any) => void
}

export const MenuIcon: FC<Props> = memo(({ sx, icon: Icon, disabled, toolTitle = '', disableRipple, onClick }) => (
  <IconButton
    toolTitle     = {toolTitle}
    disableRipple = {disableRipple}
    disabled      = {disabled}
    icon          = {Icon}
    onClick       = {onClick}
    sx            = {{
      button: {
        ...useSxNavbarIconButton(), ...sx?.button
      },
      icon: {
        ...useSxNavbarIconsStyle(), ...sx?.icon
      }
    }}
  />
));
