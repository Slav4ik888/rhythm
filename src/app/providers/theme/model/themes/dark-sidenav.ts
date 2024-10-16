import { ThemeColorItem, SidenavColorName } from '../types';



export const sidenavColors: Record<SidenavColorName, ThemeColorItem> = {
  'sidenav_black': {
    main  : 'rgba(0, 0, 0, 0.8)',
    focus : 'rgba(0, 0, 0, 0.8)',
  },
  'sidenav_blue': {
    main  : 'rgb(0 59 117)',
    focus : 'rgb(0 59 117)',
  },
  'sidenav_grey': {
    main  : 'rgb(184 184 184)',
    focus : 'rgb(184 184 184)',
  },
}
