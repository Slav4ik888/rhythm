import { ViewItemType } from 'entities/dashboard-view';
import { blue, deepOrange, teal, pink, grey, red, blueGrey, green, lightBlue } from '@mui/material/colors';


export const getColorByType = (type: ViewItemType) => {
  switch (type) {
    case 'box':            return deepOrange[800];
    case 'text':           return blue[700];
    case 'divider':        return blueGrey[500];
    case 'chart':          return teal[800];
    case 'chip':           return pink[800];
    case 'growthIcon':     return green[700];
    case 'digitIndicator': return lightBlue[600];

    default:
      return 'primary';
  }
};
