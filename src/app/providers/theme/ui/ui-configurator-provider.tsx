import { FC, ReactNode, useMemo, useReducer } from 'react';
import { ThemeProvider as MuiThemeProvider, createTheme } from '@mui/material/styles';
import { UIConfiguratorContextType, UIConfiguratorProviderState } from '../model/types';
import { reducer } from '../model/lib/reducer';
import { getThemeByName } from '../model/utils';
import { UIConfiguratorContext } from '../model/lib/ui-configurator-context';
import { PaletteMode } from '@mui/material';



const initialState: UIConfiguratorProviderState = {
  mode                  : 'light',
  openConfigurator      : false,
  navbarBackgroundTheme : 'grey',
  navbarFixed           : true,
  navbarTransparent     : false,
  sidenavMini           : false,
};


interface Props {
  initial? : PaletteMode // For Story
  children : ReactNode
}

export const UIConfiguratorProvider: FC<Props> = ({ initial, children }) => {
  const [controller, dispatch] = useReducer(reducer, initialState) as UIConfiguratorContextType;
  
  const value = useMemo(() => [controller, dispatch] as UIConfiguratorContextType, [controller, dispatch]);
  const theme = useMemo(() => createTheme(getThemeByName(controller)), [controller]);


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
