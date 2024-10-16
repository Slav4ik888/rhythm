import { ThemeColorItem, NavbarColorName } from '../types';



export const navbarColors: Record<NavbarColorName, ThemeColorItem> = {
  'navbar_white': {
    main  : 'rgba(255, 255, 255, 0.8)',
    focus : 'rgba(255, 255, 255, 0.8)',
  },
  'navbar_green': {
    main  : 'rgb(76 175 80)',
    focus : 'rgb(76 175 80)',
  },
  'navbar_grey': {
    main  : 'rgb(184 184 184)',
    focus : 'rgb(184 184 184)',
  },
}
