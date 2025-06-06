import { FC, memo, useCallback } from 'react';
import { IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import { useTheme, useUIConfiguratorController, CustomTheme, setSidebarMini, setIsSidebar } from 'app/providers/theme';
import { SxNavbarIcon } from 'widgets/navbar';



const useStyles = (
  theme : CustomTheme,
  sx    : SxNavbarIcon
) => ({
  button: {
    ...sx.button,
    display    : 'inline-block',
    lineHeight : 0,

    [theme.breakpoints.down('xl')]: {
      display: 'none',
    },
  },
  icon: {
    ...sx.icon,
  }
});


interface Props {
  sx: SxNavbarIcon
}


export const MiniSidebarToggleBtn: FC<Props> = memo(({ sx: styles }) => {
  const [configuratorState, dispatch] = useUIConfiguratorController();
  const sx = useStyles(useTheme(), styles);
  const { sidebarMini, isSidebar } = configuratorState;

  const handleMiniSidebar = useCallback(() => {
    setSidebarMini(dispatch, ! sidebarMini);
    if (! isSidebar) setIsSidebar(dispatch, true);
  }, [sidebarMini, isSidebar, setSidebarMini, setIsSidebar]);


  return (
    <IconButton
      disableRipple
      color   = 'inherit'
      sx      = {sx.button}
      onClick = {handleMiniSidebar}
    >
      {
        sidebarMini
          ? <MenuIcon sx={sx.icon} fontSize='small' />
          : <MenuOpenIcon sx={sx.icon} fontSize='small' />
      }
    </IconButton>
  )
});
