import { ViewItem } from 'entities/dashboard-view';
import { isNum } from 'shared/lib/validators';


export const getWidth = (item: ViewItem, defaultValue: number) => isNum(item.styles.width) && item.styles.width
  ? item.styles.width as number
  : defaultValue;

export const getHeight = (item: ViewItem, defaultValue: number) => isNum(item.styles.height) && item.styles.height
  ? item.styles.height as number
  : defaultValue;
