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
import { CustomTheme } from 'app/providers/theme';
import { getBoxShadows, rgbaFromHex, pxToRem } from 'app/providers/theme';
import { f } from 'app/styles';



interface OwnerState {
  navbarTransparent : boolean
  absolute          : boolean
  light             : boolean
  darkMode          : boolean
}


export function sxNavbar(theme: CustomTheme, ownerState: OwnerState) {
  const { palette, transitions, breakpoints, borders } = theme;
  const { navbarTransparent, absolute, light, darkMode } = ownerState;

  const { dark, white, text, transparent, background } = palette;
  const { navbarBoxShadow } = getBoxShadows(theme);
  const { borderRadius } = borders;

  return {
    boxShadow       : navbarTransparent || absolute ? 'none' : navbarBoxShadow,
    backdropFilter  : navbarTransparent || absolute ? 'none' : `saturate(200%) blur(${pxToRem(30)})`,
    backgroundColor :
      navbarTransparent || absolute
        ? `${transparent.main} !important`
        : rgbaFromHex(darkMode ? background.default : white.main, 0.8),

    color: () => {
      let color;

      if (light) {
        color = white.main;
      }
      else if (navbarTransparent) {
        color = text.main;
      }
      else {
        color = dark.main;
      }

      return color;
    },
    top           : absolute ? 0 : pxToRem(12),
    minHeight     : pxToRem(75),
    display       : 'grid',
    alignItems    : 'center',
    borderRadius  : borderRadius.xl,
    paddingTop    : pxToRem(8),
    paddingBottom : pxToRem(8),
    paddingRight  : absolute ? pxToRem(8)  : 0,
    paddingLeft   : absolute ? pxToRem(16) : 0,

    '& > *': {
      transition: transitions.create('all', {
        easing   : transitions.easing.easeInOut,
        duration : transitions.duration.standard,
      }),
    },

    '& .MuiToolbar-root': {
      ...f('-c-sb'),

      [breakpoints.up('sm')]: {
        minHeight : 'auto',
        padding   : `${pxToRem(4)} ${pxToRem(16)}`,
      },
    },
  };
}


export const sxNavbarContainer = ({ breakpoints }: CustomTheme) => ({
  ...f('c-fs-sb'),
  pt: 0.5,
  pb: 0.5,

  [breakpoints.up('md')]: {
    ...f('r-c'),
    paddingTop    : '0',
    paddingBottom : '0',
  },
});


export const sxNavbarRow = ({ breakpoints }: CustomTheme, isMini: boolean) => ({
  ...f('-c-sb'),
  width: '100%',

  [breakpoints.up('md')]: {
    justifyContent : isMini ? 'space-between' : 'stretch',
    width          : isMini ? '100%'          : 'max-content',
  },

  [breakpoints.up('xl')]: {
    justifyContent : 'stretch !important',
    width          : 'max-content !important',
  },
});
