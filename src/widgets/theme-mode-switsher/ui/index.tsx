import { useColorMode, ColorMode, useTheme } from 'app/providers/theme-old';
import { memo } from 'react';
import { IconButton, Typography } from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';



export const ThemeModeSwitcher = memo(() => {
  const
    theme = useTheme(),
    { toggleColorMode } = useColorMode();

  return (
    <Typography component='span' sx={{ ml: 1 }}>
      {theme.palette.mode} mode
      <IconButton
        sx      = {{ ml: 1 }}
        color   = "inherit"
        onClick = {toggleColorMode}
      >
        {theme.palette.mode === ColorMode.DARK ? <Brightness7Icon /> : <Brightness4Icon />}
      </IconButton>
    </Typography>
  )
});
