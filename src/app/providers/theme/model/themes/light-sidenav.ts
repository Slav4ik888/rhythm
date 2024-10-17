import { ThemeColorItem, SidenavColorName } from '../types';


type Sidenav = { sidenav: ThemeColorItem }

export const sidenavColors: Record<SidenavColorName, Sidenav> = {
  'sidenav_black': {
    sidenav: {
      light : '',
      main  : 'rgba(0, 0, 0, 0.8)',
      dark  : '',
      focus : 'rgba(0, 0, 0, 0.8)',
      contrastText: '',
    }
  },
  'sidenav_blue': {
    sidenav: {
      light : '',
      main  : 'rgb(0 59 117)',
      dark  : '',
      focus : 'rgb(0 59 117)',
      contrastText: '',
    }
  },
  'sidenav_grey': {
    sidenav: {
      light : '',
      main  : 'rgb(184 184 184)',
      dark  : '',
      focus : 'rgb(184 184 184)',
      contrastText: '',
    }
  },
}
