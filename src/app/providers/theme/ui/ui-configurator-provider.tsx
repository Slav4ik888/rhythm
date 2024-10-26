import { FC, ReactNode, useMemo, useReducer } from 'react';
import { ThemeProvider as MuiThemeProvider, createTheme, useTheme as useMUITheme } from '@mui/material/styles';
import { UIConfiguratorProviderState } from '../model/types';
import { reducer } from '../model/lib/reducer';
import { getThemeByName } from '../model/utils';
import { UIConfiguratorContext, UIConfiguratorContextType } from '../model/lib/ui-configurator-context';
import { PaletteMode } from '@mui/material';



const initialState: UIConfiguratorProviderState = {
  mode               : 'light',
  isOpenConfigurator : false,
  navbarFixed        : true,
  navbarTransparent  : false,
  navbarColor        : 'navbar_grey',
  isSidebar          : false,
  sidebarWidth       : 250,
  sidebarMini        : false,
  sidebarColor       : 'sidebar_black',
};


interface Props {
  initial? : PaletteMode // For Story
  children : ReactNode
}

export const UIConfiguratorProvider: FC<Props> = ({ initial, children }) => {
  const [controller, dispatch] = useReducer(reducer, initialState) as UIConfiguratorContextType;
  const muiTheme = useMUITheme();

  const value = useMemo(() => [controller, dispatch] as UIConfiguratorContextType, [controller, dispatch]);
  const theme = useMemo(() => createTheme(getThemeByName(muiTheme, controller)), [controller]);


  return (
    <UIConfiguratorContext.Provider value={value}>
      <MuiThemeProvider theme={theme}>
        {
          children
        }
      </MuiThemeProvider>
    </UIConfiguratorContext.Provider>
  )
};
