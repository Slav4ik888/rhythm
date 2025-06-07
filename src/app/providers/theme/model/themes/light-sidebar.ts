import { GradientsItem } from '../types';



export type SidebarColorName = 'sidebar_black' | 'sidebar_blue' | 'sidebar_grey'


export type SidebarTheme = {
  sidebar: any & {
    gradients: GradientsItem
  }
}


export const sidebarThemes: Record<SidebarColorName, SidebarTheme> = {
  'sidebar_black': {
    sidebar: {
      light        : 'rgba(66, 66, 74, 1)',
      main         : 'rgba(66, 66, 74, 1)',
      dark         : 'rgba(66, 66, 74, 1)',
      focus        : 'rgba(66, 66, 74, 1)',
      contrastText : '#000000',

      gradients: {
        main  : 'rgba(34, 34, 34, 1)',
        state : 'rgba(25, 25, 25, 1)',
      },
    }
  },
  'sidebar_blue': {
    sidebar: {
      light        : 'rgba(31, 63, 94, 1)',
      main         : 'rgba(31, 63, 94, 1)',
      dark         : 'rgba(31, 63, 94, 1)',
      focus        : 'rgba(31, 63, 94, 1)',
      contrastText : '#000000',

      gradients: {
        main  : 'rgba(31, 63, 94, 1)',
        state : 'rgba(4, 20, 34, 1)',
      },
    }
  },
  'sidebar_grey': {
    sidebar: {
      light        : 'rgb(72 72 72)',
      main         : 'rgb(72 72 72)',
      dark         : 'rgb(72 72 72)',
      focus        : 'rgb(72 72 72)',
      contrastText : '#000000',

      gradients: {
        main  : 'rgb(72 72 72)',
        state : 'rgb(41 41 41)',
      },
    }
  },
}
