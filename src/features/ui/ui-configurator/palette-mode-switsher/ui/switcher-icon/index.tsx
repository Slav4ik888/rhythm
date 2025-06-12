import { FC, memo, useCallback, useEffect, useState } from 'react';
import IconButton from '@mui/material/IconButton';
import Night from '@mui/icons-material/Brightness4';
import Day from '@mui/icons-material/Brightness7';
import { CustomTheme, setMode, setSidebarColor, UIDispatch, useTheme } from 'app/providers/theme';
import { Tooltip } from 'shared/ui/tooltip';
import { f } from 'shared/styles';
import { PaletteMode } from '@mui/material/styles';



const useStyles = (theme: CustomTheme) => ({
  root: {
    cursor: 'pointer'
  },
  icon: {
    color  : (theme as CustomTheme).palette.configurator.title.headerSubtitle,
    cursor : 'pointer'
  },
});


interface Props {
  mode     : PaletteMode
  dispatch : UIDispatch
}

export const PaletteModeSwitcherIconComponent: FC<Props> = memo(({ mode, dispatch }) => {
  const sx = useStyles(useTheme());
  const [checked, setChecked] = useState<boolean>(false);

  useEffect(() => {
    setChecked(mode === 'light');
  }, [mode]);

  const togglePaletteMode = useCallback(() => {
    setMode(dispatch, mode === 'dark' ? 'light' : 'dark');
    setSidebarColor(dispatch, mode === 'dark' ? 'sidebar_grey' : 'sidebar_black');
  }, [mode, dispatch]);


  return (
    <IconButton
      sx      = {sx.root}
      color   = 'inherit'
      onClick = {togglePaletteMode}
    >
      <Tooltip
        title  = {`Переключить на ${checked ? 'светлую' : 'тёмную'} тему`}
        sxSpan = {f('-c-c')}
      >
        {
          checked ? <Day sx={sx.icon} /> : <Night sx={sx.icon} />
        }
      </Tooltip>
    </IconButton>
  )
});
