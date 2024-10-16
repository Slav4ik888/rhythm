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

import { CustomTheme, SidenavColorName, getBoxShadows, getTypography, linearGradient, pxToRem, rgba } from 'app/providers/theme';


interface OwnerStateItem {
  active       : boolean
  darkMode     : boolean
  sidenavColor : SidenavColorName
}


const collapseItem = (theme: CustomTheme, ownerState: OwnerStateItem) => {
  const { palette, transitions, breakpoints, borders } = theme;
  const { active, darkMode, sidenavColor } = ownerState;

  const { white, transparent, dark, grey, gradients } = palette;
  const { md } = getBoxShadows(theme);
  const { borderRadius } = borders;

  return {
    background: active
      ? linearGradient(gradients[sidenavColor].main, gradients[sidenavColor].state)
      : transparent.main,
    color: (! darkMode && ! active) || ! active
      ? dark.main
      : white.main,
    display: "flex",
    alignItems: "center",
    width: "100%",
    padding: `${pxToRem(8)} ${pxToRem(10)}`,
    margin: `${pxToRem(1.5)} ${pxToRem(16)}`,
    borderRadius: borderRadius.md,
    cursor: "pointer",
    userSelect: "none",
    whiteSpace: "nowrap",
    boxShadow: active && ! darkMode ? md : "none",
    [breakpoints.up("xl")]: {
      transition: transitions.create(["box-shadow", "background-color"], {
        easing: transitions.easing.easeInOut,
        duration: transitions.duration.shorter,
      }),
    },

    "&:hover, &:focus": {
      backgroundColor: () => {
        let backgroundValue;

        if (! active) {
          backgroundValue = ! darkMode
            ? grey[300]
            : rgba(white.main, 0.2);
        }

        return backgroundValue;
      },
    },
  };
}


interface OwnerStateIconBox {
  active: boolean
  darkMode: boolean
}

function collapseIconBox(theme: CustomTheme, ownerState: OwnerStateIconBox) {
  const { palette, transitions, borders } = theme;
  const { darkMode, active } = ownerState;

  const { white, dark } = palette;
  const { borderRadius } = borders;

  return {
    minWidth: pxToRem(32),
    minHeight: pxToRem(32),
    color:
      (! darkMode && ! active) || ! active
        ? dark.main
        : white.main,
    borderRadius: borderRadius.md,
    display: "grid",
    placeItems: "center",
    transition: transitions.create("margin", {
      easing: transitions.easing.easeInOut,
      duration: transitions.duration.standard,
    }),

    "& svg, svg g": {
      color: white.main,
    },
  };
}

interface IconProp1 {
  palette: {
    white: {
      main: string
    },
    gradients: {
      dark: {
        state: string
      }
    }
  }
}

interface IconProp2 {
  active: boolean
}

const collapseIcon = ({ palette: { white, gradients } }: IconProp1, { active }: IconProp2) => ({
  color: active ? white.main : gradients.dark.state,
});


interface OwnerStateText {
  sidenavMini: boolean
  active: boolean
}

function collapseText(theme: CustomTheme, ownerState: OwnerStateText) {
  const { transitions, breakpoints } = theme;
  const { sidenavMini, active } = ownerState;
  const { size, fontWeightRegular, fontWeightLight } = getTypography(theme);


  return {
    marginLeft: pxToRem(10),

    [breakpoints.up("xl")]: {
      opacity    : sidenavMini ? 0 : 1,
      maxWidth   : sidenavMini ? 0 : "100%",
      marginLeft : sidenavMini ? 0 : pxToRem(10),
      transition: transitions.create(["opacity", "margin"], {
        easing   : transitions.easing.easeInOut,
        duration : transitions.duration.standard,
      }),
    },

    "& span": {
      fontWeight: active ? fontWeightRegular : fontWeightLight,
      fontSize: size.sm,
      lineHeight: 0,
    },
  };
}

export { collapseItem, collapseIconBox, collapseIcon, collapseText };
