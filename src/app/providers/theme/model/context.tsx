

export const ColorModeContext = createContext({
  toggleColorMode : () => { }
});


/**
=========================================================
* Material Dashboard 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

/**
  This file is used for controlling the global states of the components,
  you can customize the states for the different components here.
*/

import { createContext, useContext, useReducer, useMemo, useState, FC } from "react";
import { ColorName } from '.';


// Material Dashboard 2 React main context
const MaterialUI = createContext([] as any []);

// Setting custom name for the context which is visible on react dev tools
MaterialUI.displayName = "MaterialUIContext";


interface Action {
  type: "MINI_SIDENAV" | "TRANSPARENT_SIDENAV" | "WHITE_SIDENAV" | "SIDENAV_COLOR" | "TRANSPARENT_NAVBAR" | "FIXED_NAVBAR" | "OPEN_CONFIGURATOR" | "DIRECTION" | "LAYOUT" | "DARKMODE";
  value: any;
}


// Material Dashboard 2 React reducer
function reducer(state: any, action: Action) {
  switch (action.type) {
    case "MINI_SIDENAV": {
      return { ...state, miniSidenav: action.value };
    }
    case "TRANSPARENT_SIDENAV": {
      return { ...state, transparentSidenav: action.value };
    }
    case "WHITE_SIDENAV": {
      return { ...state, whiteSidenav: action.value };
    }
    case "SIDENAV_COLOR": {
      return { ...state, sidenavColor: action.value };
    }
    case "TRANSPARENT_NAVBAR": {
      return { ...state, transparentNavbar: action.value };
    }
    case "FIXED_NAVBAR": {
      return { ...state, fixedNavbar: action.value };
    }
    case "OPEN_CONFIGURATOR": {
      return { ...state, openConfigurator: action.value };
    }
    case "DIRECTION": {
      return { ...state, direction: action.value };
    }
    case "LAYOUT": {
      return { ...state, layout: action.value };
    }
    case "DARKMODE": {
      return { ...state, darkMode: action.value };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}


export interface MaterialUIControllerProviderState {
  miniSidenav        : boolean
  transparentSidenav : boolean
  whiteSidenav       : boolean
  sidenavColor       : ColorName
  transparentNavbar  : boolean
  fixedNavbar        : boolean
  openConfigurator   : boolean
  layout             : "dashboard"
  darkMode           : boolean
}

// Material Dashboard 2 React context provider
interface Props {
  children: React.ReactNode;
}

const MaterialUIControllerProvider: FC<Props> = ({ children }) => {
  const initialState: MaterialUIControllerProviderState = {
    miniSidenav        : true,
    transparentSidenav : false,
    whiteSidenav       : false,
    sidenavColor       : "secondary",
    transparentNavbar  : true,
    fixedNavbar        : false, // Закрепляем при прокручивании или нет 
    openConfigurator   : false,
    layout             : "dashboard",
    darkMode           : false,
  };

  const [controller, dispatch] = useReducer(reducer, initialState);

  const value = useMemo(() => [controller, dispatch], [controller, dispatch]);

  return <MaterialUI.Provider value={value}>
    {children}
  </MaterialUI.Provider>;
}

// Material Dashboard 2 React custom hook for using context
function useMaterialUIController() {
  const context = useContext(MaterialUI);

  if (!context) {
    throw new Error(
      "useMaterialUIController should be used inside the MaterialUIControllerProvider."
    );
  }

  return context;
}


// Context module functions
const setMiniSidenav        = (dispatch: any, value: any) => dispatch({ type: "MINI_SIDENAV", value });
const setTransparentSidenav = (dispatch: any, value: any) => dispatch({ type: "TRANSPARENT_SIDENAV", value });
const setWhiteSidenav       = (dispatch: any, value: any) => dispatch({ type: "WHITE_SIDENAV", value });
const setSidenavColor       = (dispatch: any, value: any) => dispatch({ type: "SIDENAV_COLOR", value });
const setTransparentNavbar  = (dispatch: any, value: any) => dispatch({ type: "TRANSPARENT_NAVBAR", value });
const setFixedNavbar        = (dispatch: any, value: any) => dispatch({ type: "FIXED_NAVBAR", value });
const setOpenConfigurator   = (dispatch: any, value: any) => dispatch({ type: "OPEN_CONFIGURATOR", value });
const setLayout             = (dispatch: any, value: any) => dispatch({ type: "LAYOUT", value });
const setDarkMode           = (dispatch: any, value: any) => dispatch({ type: "DARKMODE", value });


export {
  MaterialUIControllerProvider,
  useMaterialUIController,
  setMiniSidenav,
  setTransparentSidenav,
  setWhiteSidenav,
  setSidenavColor,
  setTransparentNavbar,
  setFixedNavbar,
  setOpenConfigurator,
  setLayout,
  setDarkMode
};
