import { memo, useEffect, useState } from 'react';
// import Brightness4Icon from '@mui/icons-material/Brightness4';
// import Brightness7Icon from '@mui/icons-material/Brightness7';
import { setMode, useUIConfiguratorController } from 'app/providers/theme';
import { SwitcherItem } from '../../components/switcher-item';



export const PaletteModeSwitcher = memo(() => {
  const [checked, setChecked] = useState<boolean>(false);
  const [configuratorState, dispatch] = useUIConfiguratorController();
  const { mode } = configuratorState;

  useEffect(() => {
    setChecked(mode === 'light');
  }, [mode]);
  
  const togglePaletteMode = () => setMode(dispatch, mode === 'dark' ? 'light' : 'dark');


  return (
    <SwitcherItem
      title     = 'Светлая тема'
      checked   = {checked}
      ariaLabel = 'PaletteModeSwitcher'
      onToggle  = {togglePaletteMode}
    />
    // <IconButton
    //   sx      = {{ ml: 1 }}
    //   color   = 'inherit'
    //   onClick = {togglePaletteMode}
    // >
    //   {mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
    // </IconButton>
  )
});
