import { FC, ReactNode, useEffect, useMemo, useReducer } from 'react';
import {
  ThemeProvider as MuiThemeProvider, createTheme, useTheme as useMUITheme, PaletteMode
 } from '@mui/material/styles';
import { UIConfiguratorProviderState } from '../model/types';
import { reducer, setMode, setSidebarColor } from '../model/lib/reducer';
import { getThemeByName } from '../model/utils';
import { UIConfiguratorContext, UIConfiguratorContextType } from '../model/lib/ui-configurator-context';
import { LS } from 'shared/lib/local-storage';
import { isNotUndefined } from 'shared/lib/validators';



const fromLS = LS.getUIConfiguratorState();


const initialState: UIConfiguratorProviderState = {
  mode               : fromLS?.mode               || 'system',
  isOpenConfigurator : fromLS?.isOpenConfigurator || false,
  navbarFixed        : fromLS?.navbarFixed        || true,
  navbarTransparent  : fromLS?.navbarTransparent  || false,
  navbarColor        : fromLS?.navbarColor        || 'navbar_white',
  isSidebar          : isNotUndefined(fromLS?.isSidebar) ? Boolean(fromLS?.isSidebar) : true,
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

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

    const handler = (e: any) => {
      setMode(dispatch, e.matches ? 'dark' : 'light');
      setSidebarColor(dispatch, e.matches ? 'sidebar_black' : 'sidebar_grey');
    };
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  const muiTheme = useMUITheme();

  const value = useMemo(() => [controller, dispatch] as UIConfiguratorContextType, [controller, dispatch]);
  // @ts-ignore
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
