import { ViewItemType } from 'entities/dashboard-view';
import { grey, deepOrange, teal, pink, lime, brown, blueGrey, green, purple } from '@mui/material/colors';
import { CustomTheme } from 'app/providers/theme';


export const getColorByType = (theme: CustomTheme, type?: ViewItemType) => {
  switch (type) {
    case 'box':            return deepOrange[800];
    case 'text':           return blueGrey[500];
    case 'divider':        return grey[800];
    case 'chart':          return teal[800];
    case 'chip':           return lime[900];
    case 'growthIcon':     return green[700];
    case 'digitIndicator': return purple[800];

    default:
      return theme.palette.dark.main;
  }
};
