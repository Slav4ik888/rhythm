import { FC, memo } from 'react';
import IconButton from '@mui/material/IconButton';
import { Tooltip } from '../../tooltip';
import { OverridableComponent } from '@mui/material/OverridableComponent';
import { SvgIconTypeMap } from '@mui/material/SvgIcon';
import { sxNavbarIconButton, sxNavbarIconsStyle } from 'shared/lib/styles/navbar';
import { CustomTheme } from 'app/providers/theme';



export interface SxNavbarIcon {
  button? : any
  icon?   : any
}


interface Props {
  toolTitle?     : string
  disableRipple? : boolean
  disabled?      : boolean
  sx?            : SxNavbarIcon
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  icon           : OverridableComponent<SvgIconTypeMap<{}, 'svg'>> & { muiName: string }
  onClick?       : (event: any) => void
}

export const NavbarIcon: FC<Props> = memo(({ sx, icon: Icon, disabled, toolTitle = '', disableRipple, onClick }) => (
  <Tooltip title={toolTitle}>
    <IconButton
      disableRipple = {disableRipple}
      disabled      = {disabled}
      sx            = {(theme) => ({ ...sxNavbarIconButton(theme as CustomTheme), ...sx?.button })}
      onClick       = {onClick}
    >
      <Icon sx={(theme) => ({ ...sxNavbarIconsStyle(theme as CustomTheme), ...sx?.icon })} />
    </IconButton>
  </Tooltip>
));
