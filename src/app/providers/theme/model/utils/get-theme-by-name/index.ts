import { customPalette as customPaletteLight } from '../../themes/light-custom-palette';
import { customPalette as customPaletteDark } from '../../themes/dark-custom-palette';
import { UIConfiguratorProviderState, CustomTheme } from '../../types';
import { gradients as gradientsLight } from '../../themes/light-gradients';
import { gradients as gradientsDark } from '../../themes/dark-gradients';
import { navbarThemes as navbarThemesLight } from '../../themes/light-navbar';
import { navbarThemes as navbarThemesDark } from '../../themes/dark-navbar';
import { sidebarThemes as sidebarThemesLight } from '../../themes/light-sidebar';
import { sidebarThemes as sidebarThemesDark } from '../../themes/dark-sidebar';
import { borders } from '../../themes/base/borders';
import { breakpoints } from '../../themes/base/breakpoints';
import { Theme } from '@mui/material/styles';


export const getThemeByName = (muiTheme: Theme, controller: UIConfiguratorProviderState): CustomTheme => {
  const { mode, navbarColor, sidebarColor } = controller;
  const isSystemModeDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

  const theme = {
    ...muiTheme,
    borders: { ...borders },
    breakpoints: { ...breakpoints },
  } as unknown as CustomTheme;

  if (mode === 'light' || ! isSystemModeDark) {
    theme.palette = {
      ...muiTheme.palette,
      ...customPaletteLight,
      ...sidebarThemesLight[sidebarColor],
      ...navbarThemesLight[navbarColor],
      gradients: gradientsLight,
    };
    theme.components = {
      ...theme.components,
      MuiCheckbox: {
        styleOverrides: {
          root: {
            '&.Mui-checked': {
              color: '#8b8b8b',
              '& .MuiSvgIcon-root': {
                color: '#8b8b8b',
              },
            },
            '&:not(.Mui-checked)': {
              color: '#8b8b8b',
              '& .MuiSvgIcon-root': {
                color: '#8b8b8b',
              },
            }
          }
        }
      },
      MuiChip: {
        styleOverrides: {
          root: {
            backgroundColor: '#d5d5d5',
            '&:hover': {
              backgroundColor: '#c4c4c4',
            }
          },
          // outlined: {
          //   borderColor: '#e0e0e0',
          // },
          // filled: {
          //   backgroundColor: '#f5f5f5',
          //   '&:hover': {
          //     backgroundColor: '#e0e0e0',
          //   },
          // },
        },
      },
    }
  }
  else {
    theme.palette = {
      ...muiTheme.palette,
      ...customPaletteDark,
      ...sidebarThemesDark[sidebarColor],
      ...navbarThemesDark[navbarColor],
      gradients: gradientsDark,
    };
    theme.components = {
      ...theme.components,
      MuiToggleButton: {
        styleOverrides: {
          root: {
            '&.Mui-selected': {
              background: '#383838',
              '& .MuiSvgIcon-root': {
                color: '#a2a2a2',
              },
            },
            '&:not(.Mui-selected)': {
              '&:hover': {
                background: '#303030',
              },
              '& .MuiSvgIcon-root': {
                color: '#4f4f4f',
              },
            }
          }
        }
      },
      MuiRadio: {
        styleOverrides: {
          root: {
            '&.Mui-checked': {
              color: '#616161',
              '& .MuiSvgIcon-root': {
                color: '#616161',
              },
            },
            '&:not(.Mui-checked)': {
              color: '#616161',
              '& .MuiSvgIcon-root': {
                color: '#616161',
              },
            }
          }
        }
      },
      MuiCheckbox: {
        styleOverrides: {
          root: {
            '&.Mui-checked': {
              color: '#616161',
              '& .MuiSvgIcon-root': {
                color: '#616161',
              },
            },
            '&:not(.Mui-checked)': {
              color: '#616161',
              '& .MuiSvgIcon-root': {
                color: '#616161',
              },
            }
          }
        }
      },
      MuiChip: {
        styleOverrides: {
          root: {
            backgroundColor: '#383838',
            '&:hover': {
              backgroundColor: '#1e1e1e',
            }
          },
        },
      },
    }
  }

  return theme // as CustomTheme;
}
