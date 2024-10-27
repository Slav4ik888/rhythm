import { GradientsItem, ThemeColorItem } from '../types';



export type SidebarColorName = 'sidebar_black' | 'sidebar_blue' | 'sidebar_grey'


export type SidebarTheme = {
  sidebar: ThemeColorItem & {
    gradients: GradientsItem
  }
}


export const sidebarThemes: Record<SidebarColorName, SidebarTheme> = {
  'sidebar_black': {
    sidebar: {
      light        : '#000000',
      main         : 'rgba(0, 0, 0, 0.8)',
      dark         : '#000000',
      focus        : 'rgba(0, 0, 0, 0.8)',
      contrastText : '#000000',

      gradients: {
        main  : 'rgba(66, 66, 74, 1)',
        state : 'rgba(25, 25, 25, 1)',
      },
    }
  },
  'sidebar_blue': {
    sidebar: {
      light        : '#000000',
      main         : 'rgb(0 59 117)',
      dark         : '#000000',
      focus        : 'rgb(0 59 117)',
      contrastText : '#000000',

      gradients: {
        main  : 'rgba(66, 66, 74, 1)',
        state : 'rgba(25, 25, 25, 1)',
      },
    }
  },
  'sidebar_grey': {
    sidebar: {
      light        : '#000000',
      main         : 'rgb(184 184 184)',
      dark         : '#000000',
      focus        : 'rgb(184 184 184)',
      contrastText : '#000000',

      gradients: {
        main  : 'rgba(66, 66, 74, 1)',
        state : 'rgba(25, 25, 25, 1)',
      },
    }
  },
}
