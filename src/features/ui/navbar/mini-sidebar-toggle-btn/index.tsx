import { FC, memo, useCallback } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import { useTheme, useUIConfiguratorController, CustomTheme, setSidebarMini, setIsSidebar } from 'app/providers/theme';
import { NavbarIcon } from 'shared/ui/navbar';



const useStyles = (theme: CustomTheme) => ({
  button: {
    display    : 'inline-block',
    lineHeight : 0,

    [theme.breakpoints.down('xl')]: {
      display: 'none',
    },
  }
});



export const MiniSidebarToggleBtn: FC = memo(() => {
  const [configuratorState, dispatch] = useUIConfiguratorController();
  const sx = useStyles(useTheme());
  const { sidebarMini, isSidebar } = configuratorState;

  const handleMiniSidebar = useCallback(() => {
    setSidebarMini(dispatch, ! sidebarMini);
    if (! isSidebar) setIsSidebar(dispatch, true);
  }, [sidebarMini, isSidebar, dispatch]);


  return (
    <NavbarIcon
      disableRipple
      toolTitle = 'Скрыть/показать боковую панель'
      icon      = {sidebarMini ? MenuIcon : MenuOpenIcon}
      sx        = {sx}
      onClick   = {handleMiniSidebar}
    />
  )
});
