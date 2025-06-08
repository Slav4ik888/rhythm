import { SidebarColorName, SidebarTheme } from './light-sidebar';



export const sidebarThemes: Record<SidebarColorName, SidebarTheme> = {
  sidebar_black: {
    sidebar: {
      main         : 'rgba(66, 66, 74, 1)',
      focus        : 'rgba(66, 66, 74, 1)',
      contrastText : '#000000',
      logo         : '#e2e2e2',

      gradients: {
        main  : 'rgba(34, 34, 34, 1)',
        state : 'rgba(25, 25, 25, 1)',
      },
    }
  },
  sidebar_blue: {
    sidebar: {
      main         : 'rgba(31, 63, 94, 1)',
      focus        : 'rgba(31, 63, 94, 1)',
      contrastText : '#000000',
      logo         : '#e2e2e2',

      gradients: {
        main  : 'rgba(31, 63, 94, 1)',
        state : 'rgba(4, 20, 34, 1)',
      },
    }
  },
  sidebar_grey: {
    sidebar: {
      main         : 'rgb(72 72 72)',
      focus        : 'rgb(72 72 72)',
      contrastText : '#000000',
      logo         : '#e2e2e2',

      gradients: {
        main  : 'rgb(72 72 72)',
        state : 'rgb(41 41 41)',
      },
    }
  },
}
