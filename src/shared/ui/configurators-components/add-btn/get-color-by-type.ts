import { ViewItemType } from 'entities/dashboard-view';
import { blue, deepOrange, teal, grey, blueGrey, green, lightBlue } from '@mui/material/colors';


export const getColorByType = (type: ViewItemType) => {
  switch (type) {
    case 'box':            return blue[900];
    case 'text':           return deepOrange[600];
    case 'divider':        return teal[900];
    case 'chart':          return grey[900];
    case 'chip':           return blueGrey[500];
    case 'growthIcon':     return green[700];
    case 'digitIndicator': return lightBlue[600];

    default:
      return 'primary';
  }
};
