import { PaletteMode } from '@mui/material';
import { SidebarColorName } from '../themes/light-sidebar';
import { UIConfiguratorProviderState } from '../types';



interface Action {
  type: 'SET_MODE' | 'IS_OPEN_CONFIGURATOR' | 'SET_SIDEBAR_MINI' | 'IS_SIDEBAR' | 'SET_SIDEBAR_COLOR'
  value: any
}


function reducer(state: UIConfiguratorProviderState, action: Action): UIConfiguratorProviderState {
  switch (action.type) {
    case 'SET_MODE'             : return { ...state, mode               : action.value };
    case 'IS_OPEN_CONFIGURATOR' : return { ...state, isOpenConfigurator : action.value };
    case 'IS_SIDEBAR'           : return { ...state, isSidebar          : action.value };
    case 'SET_SIDEBAR_MINI'     : return { ...state, sidebarMini        : action.value };
    case 'SET_SIDEBAR_COLOR'    : return { ...state, sidebarColor       : action.value };

    default: throw new Error(`Unhandled action type: ${action.type}`);
  }
}

const setMode               = (dispatch: any, value: PaletteMode)      => dispatch({ type: 'SET_MODE',             value });
const setIsOpenConfigurator = (dispatch: any, value: boolean)          => dispatch({ type: 'IS_OPEN_CONFIGURATOR', value });
const setIsSidebar          = (dispatch: any, value: boolean)          => dispatch({ type: 'IS_SIDEBAR',           value });
const setSidebarMini        = (dispatch: any, value: boolean)          => dispatch({ type: 'SET_SIDEBAR_MINI',     value });
const setSidebarColor       = (dispatch: any, value: SidebarColorName) => dispatch({ type: 'SET_SIDEBAR_COLOR',    value });

export {
  reducer,
  setMode,
  setIsOpenConfigurator,
  setIsSidebar,
  setSidebarMini,
  setSidebarColor,
}
