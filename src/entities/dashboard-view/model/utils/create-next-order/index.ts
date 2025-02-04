import { ORDER_STEP } from '../../consts';
import { ViewItem } from '../../types';


export const createNextOrder = (childrenViewItems: ViewItem[]): number => {
  let maxOrder = ORDER_STEP;

  if (! childrenViewItems || ! childrenViewItems.length) return maxOrder

  childrenViewItems.forEach((item) => {
    maxOrder = Math.max(maxOrder, item?.order || 0);
  });

  return maxOrder + ORDER_STEP;
}
