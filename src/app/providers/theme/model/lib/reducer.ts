import { PaletteMode } from '@mui/material';
import { UIConfiguratorProviderState } from '../types';



interface Action {
  type: 'SET_MODE' | 'OPEN_CONFIGURATOR' | 'SET_SIDENAV_MINI'
  value: any
}


function reducer(state: UIConfiguratorProviderState, action: Action): UIConfiguratorProviderState {
  switch (action.type) {
    case 'SET_MODE'          : return { ...state, mode             : action.value };
    case 'OPEN_CONFIGURATOR' : return { ...state, openConfigurator : action.value };
    case 'SET_SIDENAV_MINI'  : return { ...state, sidenavMini      : action.value };

    default: throw new Error(`Unhandled action type: ${action.type}`);
  }
}

const setMode             = (dispatch: any, value: PaletteMode) => dispatch({ type: 'SET_MODE', value });
const setOpenConfigurator = (dispatch: any, value: boolean)     => dispatch({ type: 'OPEN_CONFIGURATOR', value });
const setSidenavMini      = (dispatch: any, value: boolean)     => dispatch({ type: 'SET_SIDENAV_MINI', value });

export {
  reducer,
  setMode,
  setOpenConfigurator,
  setSidenavMini,
}
