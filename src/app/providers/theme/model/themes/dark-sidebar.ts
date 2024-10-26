import { SidebarColorName, SidebarTheme } from './light-sidebar';



export const sidebarThemes: Record<SidebarColorName, SidebarTheme> = {
  'sidebar_black': {
    sidebar: {
      light        : '#000000',
      main         : 'rgba(0, 0, 0, 0.8)',
      dark         : '#000000',
      focus        : 'rgba(0, 0, 0, 0.8)',
      contrastText : '#000000',
    }
  },
  'sidebar_blue': {
    sidebar: {
      light        : '#000000',
      main         : 'rgb(0 59 117)',
      dark         : '#000000',
      focus        : 'rgb(0 59 117)',
      contrastText : '#000000',
    }
  },
  'sidebar_grey': {
    sidebar: {
      light        : '#000000',
      main         : 'rgb(184 184 184)',
      dark         : '#000000',
      focus        : 'rgb(184 184 184)',
      contrastText : '#000000',
    }
  },
}
