import { FC, ReactNode, useMemo, useReducer } from 'react';
import { ThemeProvider as MuiThemeProvider, createTheme, useTheme as useMUITheme } from '@mui/material/styles';
import { UIConfiguratorProviderState } from '../model/types';
import { reducer } from '../model/lib/reducer';
import { getThemeByName } from '../model/utils';
import { UIConfiguratorContext, UIConfiguratorContextType } from '../model/lib/ui-configurator-context';
import { PaletteMode } from '@mui/material';
import { LS } from 'shared/lib/local-storage';



const fromLS = LS.getUIConfiguratorState();


const initialState: UIConfiguratorProviderState = {
  mode               : fromLS?.mode               || 'light',
  isOpenConfigurator : fromLS?.isOpenConfigurator || false,
  navbarFixed        : fromLS?.navbarFixed        || true,
  navbarTransparent  : fromLS?.navbarTransparent  || false,
  navbarColor        : fromLS?.navbarColor        || 'navbar_white',
  isSidebar          : false,
  sidebarWidth       : fromLS?.sidebarWidth       || 250,
  sidebarMini        : fromLS?.sidebarMini        || false,
  sidebarColor       : fromLS?.sidebarColor       || 'sidebar_black',
};


interface Props {
  initial? : PaletteMode // For Story
  children : ReactNode
}

export const UIConfiguratorProvider: FC<Props> = ({ initial, children }) => {
  const [controller, dispatch] = useReducer(reducer, initialState) as UIConfiguratorContextType;
  const muiTheme = useMUITheme();

  const value = useMemo(() => [controller, dispatch] as UIConfiguratorContextType, [controller, dispatch]);
  const theme = useMemo(() => createTheme(getThemeByName(muiTheme, controller)), [muiTheme, controller]);


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
