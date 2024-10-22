import { memo, useEffect, useState } from 'react';
import { IconButton, Box, Switch } from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { setMode, useUIConfiguratorController } from 'app/providers/theme';



export const PaletteModeSwitcher = memo(() => {
  const [checked, setChecked] = useState<boolean>(false);
  const [configuratorState, dispatch] = useUIConfiguratorController();
  const { mode } = configuratorState;

  useEffect(() => {
    setChecked(mode === 'light');
  }, [mode]);
  
  const togglePaletteMode = () => {
    setMode(dispatch, mode === 'dark' ? 'light' : 'dark');
  };


  return (
    <Box
      sx={{
        display        : 'flex',
        width          : '100%',
        alignItems     : 'center',
        justifyContent : 'space-between',
        py             : 3,
      }}
    >
      {mode} mode

      <Switch
        size       = "small"
        checked    = {checked}
        inputProps = {{ 'aria-label': 'PaletteModeSwitcher' }}
        onChange   = {togglePaletteMode}
      />
      {/* <IconButton
        sx      = {{ ml: 1 }}
        color   = "inherit"
        onClick = {togglePaletteMode}
      >
        {mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
      </IconButton> */}
    </Box>
  )
});
