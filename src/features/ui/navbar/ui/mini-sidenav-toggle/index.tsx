import { FC, memo } from 'react';
import { IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import {
  useTheme, useUIConfiguratorController, CustomTheme, UIConfiguratorProviderState, setSidenavMini
} from 'app/providers/theme';
import { sxNavbarIconsStyle } from '../styles';



const useStyles = (
  theme             : CustomTheme,
  configuratorState : UIConfiguratorProviderState,
  light             : boolean | undefined
) => ({
  button: {
    display    : "inline-block",
    lineHeight : 0,

    [theme.breakpoints.up("xl")]: {
      display: "none",
    },
  },
  icon   : sxNavbarIconsStyle(theme, configuratorState, light)
});


interface Props {
  light: boolean | undefined
}


export const MiniSidenavToggleBtn: FC<Props> = memo(({ light }) => {
  const [configuratorState, dispatch] = useUIConfiguratorController();
  const sx = useStyles(useTheme(), configuratorState, light);
  const { sidenavMini } = configuratorState;

  const handleMiniSidenav = () => setSidenavMini(dispatch, ! sidenavMini);


  return (
    <IconButton
      disableRipple
      color   = "inherit"
      sx      = {sx.button}
      onClick = {handleMiniSidenav}
    >
      <MenuIcon sx={sx.icon} fontSize="small" />
    </IconButton>
  )
});
