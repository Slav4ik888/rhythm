import { SidebarColorName } from '../themes/light-sidebar';
import { UIConfiguratorProviderState } from '../types';
import { LS } from 'shared/lib/local-storage';
import { PaletteMode } from '@mui/material/styles';



/** Helpers for set to LS & state */
const setState = (_state: UIConfiguratorProviderState, field: string, value: any): UIConfiguratorProviderState => {
  const state = { ..._state, [field]: value }
  LS.setUIConfiguratorState(state);

  return state
};


interface Action {
  type: 'SET_MODE' | 'IS_OPEN_CONFIGURATOR' | 'TOGGLE_SIDEBAR_MINI' | 'TOGGLE_SIDEBAR_HIDDEN'
  | 'TOGGLE_SIDEBAR' | 'TOGGLE_SIDEBAR_COLOR'
  value: any
}


function reducer(state: UIConfiguratorProviderState, action: Action): UIConfiguratorProviderState {
  switch (action.type) {
    case 'SET_MODE': return setState(state, 'mode',               action.value);
    case 'IS_OPEN_CONFIGURATOR': return setState(state, 'isOpenConfigurator', action.value);
    case 'TOGGLE_SIDEBAR': return setState(state, 'isSidebar',          action.value);
    case 'TOGGLE_SIDEBAR_MINI': return setState(state, 'sidebarMini',        action.value);
    case 'TOGGLE_SIDEBAR_COLOR': return setState(state, 'sidebarColor',       action.value);

    default: throw new Error(`Unhandled action type: ${action.type}`);
  }
}

export type UIDispatch = (data: Action) => void;

const setMode = (dispatch: UIDispatch, value: PaletteMode) => dispatch({ type: 'SET_MODE', value });
const setIsOpenConfigurator = (
  dispatch: UIDispatch,
  value: boolean) => dispatch({ type: 'IS_OPEN_CONFIGURATOR', value });
const setIsSidebar = (dispatch: UIDispatch, value: boolean) => dispatch({ type: 'TOGGLE_SIDEBAR', value });
const setSidebarMini = (dispatch: UIDispatch, value: boolean) => dispatch({ type: 'TOGGLE_SIDEBAR_MINI', value });
const setSidebarColor = (
  dispatch: UIDispatch,
  value: SidebarColorName) => dispatch({ type: 'TOGGLE_SIDEBAR_COLOR', value });


export {
  reducer,
  setMode,
  setIsOpenConfigurator,
  setIsSidebar,
  setSidebarMini,
  setSidebarColor,
}
