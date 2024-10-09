import { ColorMode } from '../types';


export const theme = {
  palette: {
    mode: ColorMode.LIGHT,
    
    primary: {
      ultralight   : '#ffffff',
      light        : 'rgb(66 66 74)',
      main         : '#191919',  // '#7fc35f green',
      dark         : '#000000',
      gradinet     : 'linear-gradient(195deg, rgb(66 66 74), rgb(25, 25, 25));',
      contrastText : '#ffffff'
    },
    secondary: {
      ultralight   : '#ade7f7',
      light        : '#a0c8dc', //'rgb(73, 163, 241)',
      main         : '#16688f', // 'rgb(26, 115, 232)',
      dark         : '#1e5395',
      gradinet     : 'linear-gradient195deg, rgb(73, 163, 241), rgb(26, 115, 232));',
      contrastText : '#ffffff'
    },
    logoGreen: '#3fa111'
  },

  body: {
    color      : '#272727', // on background
    background : '#f0f2f5'  // background
  },
  
  navbar: {
    color      : '#272727',
    background : 'rgba(255, 255, 255, 0.8)',
    borderBottom: '1px solid rgb(240, 240, 240)',
    badge: {
      background: '#ff3f3c'
    }
  },

  ws: {
    panel: {
      color      : '#505050',
      background : '#d2e1e5'
    },
    breadcrumbs: {
      btns: {
        color    : '#505050',
        fontSize : '12px'
      }
    },
    card: {
      width  : 200,
      height : 100
    },
    folder: {
      color      : '#5a4323',
      background : '#e1d791',
      hover      : {
        background: '#e9e0a3'
      }
    },
    document: {
      color      : '#004e72',
      background : '#d8e1e7',
      hover      : {
        background: '#e2eaef'
      }
    },
    documentCard: {
      color      : '#004e72',
      background : '#d8e1e7',
      hover      : {
        background: '#e2eaef'
      }
    },
    ruleCard: {
      color      : '#000',
      background : '#eee',
      hover      : {
        background: '#ccc'
      }
    },
    rule: {
      color      : '#000',
      background : '#eee',
      hover      : {
        background: '#ccc'
      }
    }
  },

  documents: {
    wrapper: {
      background : '#dde2e6',
      border     : 'none'
    },
    color      : '#004e72',
    background : '#d8e1e7',
    hover: {
      background: '#e2eaef'
    },
    label: {
      fontSize: '1.6rem'
    },
    helpers: {
      itemSelectionList: {
        header: {
          color      : '#9e9e9e',
          background : '#eee'
        }
      }
    }
  },

  // Items
  items: {
    panel: {
      icons: {
        color: '#999999',
        hover: {
          background: '#dadada'
        }
      }
    }
  },
  // Conditions
  condition: {
    draft: {
      background  : '#888888',
      borderColor : '#686868'
    },
    active: {
      background  : '#388e3c',
      borderColor : '#186f1d'
    },
    suspended: {
      background  : '#fff135',
      borderColor : '#c5b922'
    },
    disabled: {
      background  : '#e8e8e8',
      borderColor : '#b3b1b1'
    },
    deleted: {
      background  : '#dd5959',
      borderColor : '#ad3030'
    }
  },

  footer: {
    color: '#000000',
    noAuth: {
      link: {
        color: '#b3b3b3',
        xs: {
          color: '#404040'
        }
      }
    },
  },
  
  
  menu: {
    borderColor: '#eeeeee',
    background: '#F4F4F4',
    subTitle: {
      color: '#635f41'
    },
    icons: {
      color: '#7d7d7d'
    }
  },
  
  
  dialog: {
    paper: {
      color      : '#272727',
      background : '#f0f2f5'
    }
  },

  paper: {
    color      : '#272727', // On surface
    background : '#fff'     // Surface
  },

  listSelect: {
    textSecondary: {
      color: '#808080'
    },
    selected: {
      color: '#000000',
      fontWeight: 600
    }
  },
  button: {
    delete: {
      icon: {
        color: '#e0e0e0'
      }
    }
  },
  error: {
    color    : '#d32f2f',
    fontSize : '0.8rem'
  },
  
  // AUTH
  auth: {
    paper: {
      background: '#fff'
    }
  }
};
