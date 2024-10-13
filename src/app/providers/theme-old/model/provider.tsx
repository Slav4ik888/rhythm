// import { FC, ReactNode, useMemo, useReducer } from 'react';
// import { reducer } from './reducer';
// import { ColorName } from './types';


// export interface MaterialUIControllerProviderState {
//   miniSidenav        : boolean
//   transparentSidenav : boolean
//   whiteSidenav       : boolean
//   sidenavColor       : ColorName
//   transparentNavbar  : boolean
//   fixedNavbar        : boolean
//   openConfigurator   : boolean
//   layout             : "dashboard"
//   darkMode           : boolean
// }


// // Material Dashboard 2 React context provider
// interface Props {
//   children: ReactNode
// }

// const MaterialUIControllerProvider: FC<Props> = ({ children }) => {
//   const initialState: MaterialUIControllerProviderState = {
//     miniSidenav        : true,
//     transparentSidenav : false,
//     whiteSidenav       : false,
//     sidenavColor       : "secondary",
//     transparentNavbar  : true,
//     fixedNavbar        : false, // Закрепляем при прокручивании или нет 
//     openConfigurator   : false,
//     layout             : "dashboard",
//     darkMode           : false,
//   };

//   const [controller, dispatch] = useReducer(reducer, initialState);

//   const value = useMemo(() => [controller, dispatch], [controller, dispatch]);

//   return <MaterialUI.Provider value={value}>
//     {children}
//   </MaterialUI.Provider>;
// }


// export {
//   MaterialUIControllerProvider
// }
