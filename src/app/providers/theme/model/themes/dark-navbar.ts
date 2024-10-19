import { NavbarColorName, NavbarTheme } from './light-navbar';



export const navbarThemes: Record<NavbarColorName, NavbarTheme> = {
  'navbar_white': {
    navbar: {
      light : '#000000',
      main  : 'rgba(255, 255, 255, 0.8)',
      dark  : '#000000',
      focus : 'rgba(255, 255, 255, 0.8)',
      contrastText: '#000000',
    }
  },
  'navbar_green': {
    navbar: {
      light : '#000000',
      main  : 'rgb(76 175 80)',
      dark  : '#000000',
      focus : 'rgb(76 175 80)',
      contrastText: '#000000',
    }
  },
  'navbar_grey': {
    navbar: {
      light : '#000000',
      main  : 'rgb(184 184 184)',
      dark  : '#000000',
      focus : 'rgb(184 184 184)',
      contrastText: '#000000',
    }
  },
}
