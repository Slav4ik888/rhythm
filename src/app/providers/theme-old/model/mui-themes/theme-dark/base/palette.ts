/**
=========================================================
* Material Dashboard 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

import { Colors } from '../../../types';

/**
 * The base colors for the Material Dashboard 2 PRO React.
 * You can add new color using this file.
 * You can customized the colors for the entire Material Dashboard 2 PRO React using thie file.
 */

const colors: Colors = {
  background: {
    default: "#1a2035",
    sidenav: "#1f283e",
    card: "#202940",
  },

  text: {
    main: "#ffffffcc",
    focus: "#ffffffcc",
  },

  transparent: {
    main: "transparent",
  },

  white: {
    main: "#ffffff",
    focus: "#ffffff",
  },

  black: {
    light: "#000000",
    main: "#000000",
    focus: "#000000",
  },

  primary: {
    main: "#e91e63",
    focus: "#e91e63",
  },

  secondary: {
    main: "#7b809a",
    focus: "#8f93a9",
  },

  info: {
    main: "#1A73E8",
    focus: "#1662C4",
  },

  success: {
    main: "#4CAF50",
    focus: "#67bb6a",
  },

  warning: {
    main: "#fb8c00",
    focus: "#fc9d26",
  },

  error: {
    main: "#F44335",
    focus: "#f65f53",
  },

  light: {
    main: "#f0f2f566",
    focus: "#f0f2f566",
  },

  dark: {
    main: "#344767",
    focus: "#2c3c58",
  },

  grey: {
    100: "#f8f9fa",
    200: "#f0f2f5",
    300: "#dee2e6",
    400: "#ced4da",
    500: "#adb5bd",
    600: "#6c757d",
    700: "#495057",
    800: "#343a40",
    900: "#212529",
  },

  gradients: {
    primary: {
      main: "#EC407A",
      state: "#D81B60",
    },

    secondary: {
      main: "#747b8a",
      state: "#495361",
    },

    info: {
      main: "#49a3f1",
      state: "#1A73E8",
    },

    success: {
      main: "#66BB6A",
      state: "#43A047",
    },

    warning: {
      main: "#FFA726",
      state: "#FB8C00",
    },

    error: {
      main: "#EF5350",
      state: "#E53935",
    },

    light: {
      main: "#EBEFF4",
      state: "#CED4DA",
    },

    dark: {
      main: "#323a54",
      state: "#1a2035",
    },

    // My
    department_7: {
      main: "#a5d2f8",
      state: "#508dde",
    },
    department_1: {
      main: "#f9d6b0",
      state: "#f2b65e",
    },
    department_2: {
      main: "#d2bae9",
      state: "#8d61b7",
    },
    department_3: {
      main: "#f2bcbc",
      state: "#eb8181",
    },
    department_4: {
      main: "#9dee8f",
      state: "#4d9142",
    },
    department_5: {
      main: "#bebebe",
      state: "#848484",
    },
    department_6: {
      main: "#f7f498",
      state: "#adab47",
    },
  },

  // Рост | Падение | Без изменений - результатов
  growth: {
    main: '#02bf02',
  },
  fall: {
    main: '#cc0000',
  },
  unchanged: {
    main: '#434343',
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
    main: "#6f96d8", // Заголовок первого главного блока отделения
  },
  department_1_title: {
    main: "#cda070",
  },
  department_2_title: {
    main: "#d2bae9",
  },
  department_3_title: {
    main: "#f2bcbc",
  },
  department_4_title: {
    main: "#9dee8f",
  },
  department_5_title: {
    main: "#bebebe",
  },
  department_6_title: {
    main: "#f7f498",
  },
  
  socialMediaColors: {
    facebook: {
      main: "#3b5998",
      dark: "#344e86",
    },

    twitter: {
      main: "#55acee",
      dark: "#3ea1ec",
    },

    instagram: {
      main: "#125688",
      dark: "#0e456d",
    },

    linkedin: {
      main: "#0077b5",
      dark: "#00669c",
    },

    pinterest: {
      main: "#cc2127",
      dark: "#b21d22",
    },

    youtube: {
      main: "#e52d27",
      dark: "#d41f1a",
    },

    vimeo: {
      main: "#1ab7ea",
      dark: "#13a3d2",
    },

    slack: {
      main: "#3aaf85",
      dark: "#329874",
    },

    dribbble: {
      main: "#ea4c89",
      dark: "#e73177",
    },

    github: {
      main: "#24292e",
      dark: "#171a1d",
    },

    reddit: {
      main: "#ff4500",
      dark: "#e03d00",
    },

    tumblr: {
      main: "#35465c",
      dark: "#2a3749",
    },
  },

  // DashboardStatisticType
  statisticTypeChip: {
    day: {
      color      : "#dadada",
      background : "braun",
    },
    week: {
      color      : "#263426",
      background : "#afc8af",
    },
    month: {
      color      : "#afc8af",
      background : "#33635e",
    },
    month_cal: {
      color      : "#dadada",
      background : "blue",
    },
  },

  // DashboardConditionType
  conditionTypeChip: {
    power: {
      color      : "#d4edbb",
      background : "#1B5E20",
    },
    abundance: {
      color      : "#b8dcf5",
      background : "#0a53a8",
    },
    normal: {
      color      : "#1159ab",
      background : "#bfe1f6",
    },
    emergency: {
      color      : "#b00302",
      background : "#fecfc8",
    },
    danger: {
      color      : "#fecfc8",
      background : "#b00302",
    },
    non_existence: {
      color      : "#3d3d3d",
      background : "#e6e6e6",
    },
    null: {
      color      : "#3d3d3d",
      background : "#e6e6e6",
    },
    any: {
      color      : "#fff",
      background : "#000",
    },
  },
  
  badgeColors: {
    primary: {
      background: "#f8b3ca",
      text: "#cc084b",
    },

    secondary: {
      background: "#d7d9e1",
      text: "#6c757d",
    },

    info: {
      background: "#aecef7",
      text: "#095bc6",
    },

    success: {
      background: "#bce2be",
      text: "#339537",
    },

    warning: {
      background: "#ffd59f",
      text: "#c87000",
    },

    error: {
      background: "#fcd3d0",
      text: "#f61200",
    },

    light: {
      background: "#ffffff",
      text: "#c7d3de",
    },

    dark: {
      background: "#8097bf",
      text: "#1e2e4a",
    },
  },

  coloredShadows: {
    primary: "#e91e62",
    secondary: "#110e0e",
    info: "#00bbd4",
    success: "#4caf4f",
    warning: "#ff9900",
    error: "#f44336",
    light: "#adb5bd",
    dark: "#404040",
  },

  inputBorderColor: "#d2d6da",

  tabs: {
    indicator: { boxShadow: "#ddd" },
  },
};

export default colors;
