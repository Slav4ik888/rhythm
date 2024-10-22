import { PaletteMode } from '@mui/material';
import { UIConfiguratorProviderState } from '../types';



interface Action {
  type: 'SET_MODE' | 'IS_OPEN_CONFIGURATOR' | 'SET_SIDENAV_MINI' | 'IS_SIDENAV'
  value: any
}


function reducer(state: UIConfiguratorProviderState, action: Action): UIConfiguratorProviderState {
  switch (action.type) {
    case 'SET_MODE'             : return { ...state, mode               : action.value };
    case 'IS_OPEN_CONFIGURATOR' : return { ...state, isOpenConfigurator : action.value };
    case 'IS_SIDENAV'           : return { ...state, isSidenav          : action.value };
    case 'SET_SIDENAV_MINI'     : return { ...state, sidenavMini        : action.value };

    default: throw new Error(`Unhandled action type: ${action.type}`);
  }
}

const setMode               = (dispatch: any, value: PaletteMode) => dispatch({ type: 'SET_MODE', value });
const setIsOpenConfigurator = (dispatch: any, value: boolean)     => dispatch({ type: 'IS_OPEN_CONFIGURATOR', value });
const setIsSidenav          = (dispatch: any, value: boolean)     => dispatch({ type: 'IS_SIDENAV', value });
const setSidenavMini        = (dispatch: any, value: boolean)     => dispatch({ type: 'SET_SIDENAV_MINI', value });

export {
  reducer,
  setMode,
  setIsOpenConfigurator,
  setIsSidenav,
  setSidenavMini,
}
