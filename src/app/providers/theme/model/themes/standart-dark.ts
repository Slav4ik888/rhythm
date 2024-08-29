import { ColorMode } from '../types/types';


export const theme = {
  palette: {
    mode: ColorMode.DARK,

    primary: {
      ultralight   : '#eee',
      light        : '#eee',
      main         : '#000',
      dark         : '#000',
      contrastText : '#fff'
    },
    secondary: {
      ultralight   : '#3fa111',
      light        : '#3fa111',
      main         : '#3fa111',
      dark         : '#3fa111',
      contrastText : '#3fa111'
    },
    logoGreen: '#3fa111'
  },
  
  body: {
    color      : '#272727',
    background : '#1a2035' // '#dadada'
  },
  
  navbar: {
    color      : '#rgb(52, 71, 103',
    background : 'rgba(26, 32, 53, 0.8)',
    borderBottom: '1px solid rgb(240, 240, 240)',
    badge: {
      background: '#ff3f3c'
    }
  },

  ws: {
    panel: {
      color: '#505050',
      background: '#d2e1e5'
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
          color      : '#666',
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
          background: '#eee'
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
    background: '#f7f4ee',
    subTitle: {
      color: '#635f41'
    },
    icons: {
      color: '#7d7d7d'
    }
  },
  
  
  dialog: {
    title: {
      color: '#8a8753'
    }
  },
  paper: {
    background: '#ecece6'
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
      background: '#ecece6'
    }
  }
};
