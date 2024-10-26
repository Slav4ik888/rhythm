import { FC, memo } from 'react';
import { IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import RightIcon from '@mui/icons-material/FormatAlignRight';
import { useTheme, useUIConfiguratorController, CustomTheme, setSidebarMini, setIsSidebar } from 'app/providers/theme';
import { sxNavbarIconsStyle } from '../../../../shared/lib/styles/navbar';



const useStyles = (
  theme             : CustomTheme,
  navbarTransparent : boolean,
  light             : boolean | undefined
) => ({
  button: {
    display    : "inline-block",
    lineHeight : 0,

    [theme.breakpoints.up("xl")]: {
      display: "none",
    },
  },
  icon   : sxNavbarIconsStyle(theme, navbarTransparent, light)
});


interface Props {
  light: boolean | undefined
}


export const MiniSidebarToggleBtn: FC<Props> = memo(({ light }) => {
  const [configuratorState, dispatch] = useUIConfiguratorController();
  const sx = useStyles(useTheme(), configuratorState.navbarTransparent, light);
  const { sidebarMini, isSidebar } = configuratorState;

  const handleMiniSidebar = () => {
    setSidebarMini(dispatch, ! sidebarMini);
    if (! isSidebar) setIsSidebar(dispatch, true);
  };


  return (
    <IconButton
      disableRipple
      color   = "inherit"
      sx      = {sx.button}
      onClick = {handleMiniSidebar}
    >
      {
        sidebarMini
          ? <RightIcon sx={sx.icon} fontSize="small" />
          : <MenuIcon sx={sx.icon} fontSize="small" />
      }
    </IconButton>
  )
});
