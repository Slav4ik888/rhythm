import { SidenavColorName, SidenavTheme } from './light-sidenav';



export const sidenavThemes: Record<SidenavColorName, SidenavTheme> = {
  'sidenav_black': {
    sidenav: {
      light : '#000000',
      main  : 'rgba(0, 0, 0, 0.8)',
      dark  : '#000000',
      focus : 'rgba(0, 0, 0, 0.8)',
      contrastText: '#000000',
    }
  },
  'sidenav_blue': {
    sidenav: {
      light : '#000000',
      main  : 'rgb(0 59 117)',
      dark  : '#000000',
      focus : 'rgb(0 59 117)',
      contrastText: '#000000',
    }
  },
  'sidenav_grey': {
    sidenav: {
      light : '#000000',
      main  : 'rgb(184 184 184)',
      dark  : '#000000',
      focus : 'rgb(184 184 184)',
      contrastText: '#000000',
    }
  },
}
