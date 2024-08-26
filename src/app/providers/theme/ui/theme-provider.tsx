import { FC, ReactNode, useMemo, useState } from 'react';
import { ThemeProvider as MuiThemeProvider, createTheme } from '@mui/material/styles';
import { LS } from 'shared/lib/local-storage';
import { ColorModeContext } from '../model/context';
import { theme as themeStandartLight } from '../model/themes/standart-light';
import { theme as themeStandartDark } from '../model/themes/standart-dark';
import { ColorMode } from '../model';



const defaultColorMode = LS.getColorMode() || ColorMode.LIGHT;

interface Props {
  initial? : ColorMode // For Story
  children : ReactNode
}

export const ThemeProvider: FC<Props> = ({ initial, children }) => {
  const [mode, setMode] = useState<ColorMode>(defaultColorMode);

  const colorMode = useMemo(() => ({
    toggleColorMode: () => {
      setMode((prevMode) => (prevMode === ColorMode.LIGHT ? ColorMode.DARK : ColorMode.LIGHT));
    },
  }), []);

  const theme = useMemo(() => createTheme(
    initial
      ? initial === ColorMode.LIGHT ? themeStandartLight : themeStandartDark
      : mode    === ColorMode.LIGHT ? themeStandartLight : themeStandartDark
  ), [mode]);


  return (
    <ColorModeContext.Provider value={colorMode}>
      <MuiThemeProvider theme={theme}>
        {
          children
        }
      </MuiThemeProvider>
    </ColorModeContext.Provider>
  )
};
