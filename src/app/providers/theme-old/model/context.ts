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

import { createContext, useContext } from "react";


// Material Dashboard 2 React main context
const MaterialUI = createContext([] as any []);

// Setting custom name for the context which is visible on react dev tools
MaterialUI.displayName = "MaterialUIContext";




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
  MaterialUI,
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
