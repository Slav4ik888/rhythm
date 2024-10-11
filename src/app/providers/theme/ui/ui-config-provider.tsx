import { FC, ReactNode, useMemo, useReducer } from 'react';
import { ThemeProvider as MuiThemeProvider, createTheme } from '@mui/material/styles';
import { ColorMode, UIConfigContextType, UIConfigProviderState } from '../model/types';
import { reducer } from '../model/lib/reducer';
import { getThemeByName } from '../model/utils';
import { UIConfigContext } from '../model/lib/ui-config-context';



const initialState: UIConfigProviderState = {
  mode                  : ColorMode.LIGHT,
  navbarBackgroundTheme : 'black',
  navbarFixed           : true,
  sidenavMini           : false,
};


interface Props {
  initial? : ColorMode // For Story
  children : ReactNode
}

export const UIConfigProvider: FC<Props> = ({ initial, children }) => {
  const [controller, dispatch] = useReducer(reducer, initialState) as UIConfigContextType;
  const value = useMemo(() => [controller, dispatch] as UIConfigContextType, [controller, dispatch]);
  // const { mode } = controller;
  // const [mode, setMode] = useState<ColorMode>(defaultColorMode);

  // const colorMode = useMemo(() => ({
  //   toggleColorMode: () => {
  //     setMode((prevMode) => (prevMode === ColorMode.LIGHT ? ColorMode.DARK : ColorMode.LIGHT));
  //   },
  // }), []);

  const theme = useMemo(() => createTheme(getThemeByName(controller)), [controller]);


  return (
    <UIConfigContext.Provider value={value}>
      <MuiThemeProvider theme={theme}>
        {
          children
        }
      </MuiThemeProvider>
    </UIConfigContext.Provider>
  )
};
