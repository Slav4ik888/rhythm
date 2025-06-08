import { PaletteMode, Color } from '@mui/material';
import { amber, blue, deepPurple, green, grey, orange, pink, yellow } from '@mui/material/colors';



export const customPalette = {
  mode: 'light' as PaletteMode,

  background: {
    default : '#f0f2f5',
    card    : '#dbe0e8',
    paper   : '#f0f2f5',
  },

  text: {
    main: '#2e2e2e',
    focus: '#2e2e2e',
    primary: '#2e2e2e',
    secondary: '#000000',
    disabled: '#000000',
  },

  inherit: {
    main: '#000000',
    focus: '#000000',
  },

  transparent: {
    main: 'rgba(255, 255, 255, 0)',
    focus: 'rgba(255, 255, 255, 0)',
  },

  white: {
    main: '#ffffff',
    focus: '#ffffff',
  },

  black: {
    light: '#000000',
    main: '#000000',
    focus: '#000000',
  },

  primary: {
    light: '#000000',
    main: '#2b2b2b',
    dark: '#000000',
    focus: '#2b2b2b',
    contrastText: '#000000',
  },

  secondary: {
    light: '#000000',
    main: '#2e2e2e',
    dark: '#000000',
    focus: '#8f93a9',
    contrastText: '#000000',
  },

  info: {
    light: '#000000',
    main: '#1A73E8',
    dark: '#000000',
    focus: '#1662C4',
    contrastText: '#000000',
  },

  success: {
    light: '#000000',
    main: '#4CAF50',
    dark: '#000000',
    focus: '#67bb6a',
    contrastText: '#000000',
  },

  warning: {
    light: '#000000',
    main: '#fb8c00',
    dark: '#000000',
    focus: '#fc9d26',
    contrastText: '#000000',
  },

  error: {
    light: '#000000',
    main: '#F44335',
    dark: '#821414',
    focus: '#f65f53',
    contrastText: '#000000',
  },

  light: {
    light: '#000000',
    main: '#f0f2f5',
    dark: '#d8d8d8',
    focus: '#f0f2f5',
    contrastText: '#000000',
  },

  dark: {
    light: '#b9babc',
    main: '#7f7f7f',
    dark: '#000000',
    focus: '#232323',
    contrastText: '#ffffff',
  },

  orange: {
    light: '#000000',
    main: orange[500],
    dark: '#000000',
    focus: '#000000',
    contrastText: '#000000',
  },

  grey: {
    100: '#f8f9fa',
    200: '#f0f2f5',
    300: '#dee2e6',
    400: '#ced4da',
    500: '#adb5bd',
    600: '#6c757d',
    700: '#495057',
    800: '#343a40',
    900: '#212529',
  } as Color,

  // Configurator
  configurator: {
    main: '#e1e1e1',
    color: '#2e2e2e',
    gradients: {
      main  : 'rgb(236, 236, 236)',
      state : 'rgb(211, 211, 211)',
    },
    title: {
      headerColor: '#2f2f2f',
      headerSubtitle: '#7b7b7b',
      headerIcon: '#c2c2c2',
      itemColor: '#2e2e2e',
      // ViewItemConfigurator
      title1: '#5d5d5d', // title1
      title2: '#576593', // title2
      subtitle1: '#378f9e', // subtitle1
      subtitle2: '#7a7a7a', // subtitle2
      subtitle3: '#7a7a7a', // subtitle3
    }
  },

  // Заголовок в ReportsLineChart
  reportsChartTitle: {
    main: '#7a7a7a',
    focus: '#7a7a7a',
  },

  // Цифры сравнения - последнее значение
  comparisonIndicators_1: {
    main: '#3a3a3a',
    focus: '#3a3a3a',
  },

  comparisonIndicators_2: {
    main: '#8a8a8a',
    focus: '#8a8a8a',
  },

  // Рост | Падение | Без изменений - результатов
  growth: {
    main: '#02bf02',
    focus: '#02bf02',
  },
  fall: {
    main: '#cc0000',
    focus: '#cc0000',
  },
  unchanged: {
    main: '#434343',
    focus: '#434343',
  },

  // Цвета с фоном для: Рост | Падение | Без изменений - результатов
  increasedBG: {
    growth: {
      color      : '#274e13',
      background : '#02bf02',
    },
    fall: {
      color      : '#660000',
      background : '#cc0000',
    },
    unchanged: {
      color      : '#b7b7b7',
      background : '#434343',
    },
  },

  // Цвета с фоном для прогресса: Красный | Жёлтый | Зелёный
  progressBG: {
    danger: {
      color      : '#660000',
      background : '#cc0000',
    },
    average: {
      color      : '#783f04',
      background : '#ffd966',
    },
    exellent: {
      color      : '#274e13',
      background : '#02bf02',
    },
  },


  // My colors for departments
  department_7_title: {
    main: blue[300] as string, // 'rgb(80 141 222 / 80%)', // Заголовок первого главного блока отделения
    focus: 'rgb(80 141 222 / 80%)',
  },
  department_1_title: {
    main: orange[300] as string, // 'rgb(209 148 58 / 80%)',
    focus: 'rgb(209 148 58 / 80%)',
  },
  department_2_title: {
    main: deepPurple[300] as string, // 'rgb(141 97 183 / 80%)',
    focus: 'rgb(141 97 183 / 80%)',
  },
  department_3_title: {
    main: pink[300] as string, // 'rgb(235 129 129 / 80%)',
    focus: 'rgb(235 129 129 / 80%)',
  },
  department_4_title: {
    main: green[300] as string, // 'rgb(63 122 53 / 80%)',
    focus: 'rgb(63 122 53 / 80%)',
  },
  department_5_title: {
    main: grey[500] as string, // 'rgb(132 132 132 / 80%)',
    focus: 'rgb(132 132 132 / 80%)',
  },
  department_6_title: {
    main: amber[500] as string, // 'rgb(194 201 35 / 80%)',
    focus: 'rgb(194 201 35 / 80%)',
  },


  socialMediaColors: {
    facebook: {
      main: '#3b5998',
      dark: '#344e86',
    },

    twitter: {
      main: '#55acee',
      dark: '#3ea1ec',
    },

    instagram: {
      main: '#125688',
      dark: '#0e456d',
    },

    linkedin: {
      main: '#0077b5',
      dark: '#00669c',
    },

    pinterest: {
      main: '#cc2127',
      dark: '#b21d22',
    },

    youtube: {
      main: '#e52d27',
      dark: '#d41f1a',
    },

    vimeo: {
      main: '#1ab7ea',
      dark: '#13a3d2',
    },

    slack: {
      main: '#3aaf85',
      dark: '#329874',
    },

    dribbble: {
      main: '#ea4c89',
      dark: '#e73177',
    },

    github: {
      main: '#24292e',
      dark: '#171a1d',
    },

    reddit: {
      main: '#ff4500',
      dark: '#e03d00',
    },

    tumblr: {
      main: '#35465c',
      dark: '#2a3749',
    },
  },

  // StatisticPeriodType
  statisticPeriodTypeChip: {
    day: {
      color      : '#dadada',
      background : 'braun',
    },
    week: {
      color      : '#263426',
      background : '#afc8af',
    },
    month: {
      color      : '#afc8af',
      background : '#33635e',
    },
    month_cal: {
      color      : '#dadada',
      background : 'blue',
    },
  },

  // DashboardConditionType
  conditionTypeChip: {
    power: {
      color      : '#d4edbb',
      background : '#1B5E20',
    },
    abundance: {
      color      : '#b8dcf5',
      background : '#0a53a8',
    },
    normal: {
      color      : '#1159ab',
      background : '#bfe1f6',
    },
    emergency: {
      color      : '#b00302',
      background : '#fecfc8',
    },
    danger: {
      color      : '#fecfc8',
      background : '#b00302',
    },
    non_existence: {
      color      : '#3d3d3d',
      background : '#e6e6e6',
    },
    null: {
      color      : '#3d3d3d',
      background : '#e6e6e6',
    },
    any: {
      color      : '#fff',
      background : '#000',
    },
  },

  badgeColors: {
    primary: {
      background: '#f8b3ca',
      text: '#cc084b',
    },

    secondary: {
      background: '#d7d9e1',
      text: '#6c757d',
    },

    info: {
      background: '#aecef7',
      text: '#095bc6',
    },

    success: {
      background: '#bce2be',
      text: '#339537',
    },

    warning: {
      background: '#ffd59f',
      text: '#c87000',
    },

    error: {
      background: '#fcd3d0',
      text: '#f61200',
    },

    light: {
      background: '#ffffff',
      text: '#c7d3de',
    },

    dark: {
      background: '#8097bf',
      text: '#1e2e4a',
    },
  },

  coloredShadows: {
    primary: '#e91e62',
    secondary: '#110e0e',
    info: '#00bbd4',
    success: '#4caf4f',
    warning: '#ff9900',
    error: '#f44336',
    light: '#adb5bd',
    dark: '#404040',
  },

  tabs: {
    indicator: { boxShadow: '#ddd' },
  },
};
