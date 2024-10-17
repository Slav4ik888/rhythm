import { ThemeColorItem, NavbarColorName } from '../types';

type Navbar = { navbar: ThemeColorItem }

export const navbarColors: Record<NavbarColorName, Navbar> = {
  'navbar_white': {
    navbar: {
      light : '',
      main  : 'rgba(255, 255, 255, 0.8)',
      dark  : '',
      focus : 'rgba(255, 255, 255, 0.8)',
      contrastText: '',
    }
  },
  'navbar_green': {
    navbar: {
      light : '',
      main  : 'rgb(76 175 80)',
      dark  : '',
      focus : 'rgb(76 175 80)',
      contrastText: '',
    }
  },
  'navbar_grey': {
    navbar: {
      light : '',
      main  : 'rgb(184 184 184)',
      dark  : '',
      focus : 'rgb(184 184 184)',
      contrastText: '',
    }
  },
}
