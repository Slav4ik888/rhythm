import { ORDER_STEP } from '../../consts';
import { CardItem } from '../../types';


export const createNextOrder = (childrenCardItems: CardItem[]): number => {
  let maxOrder = ORDER_STEP;

  if (! childrenCardItems || ! childrenCardItems.length) return maxOrder

  childrenCardItems.forEach((cardItem) => {
    maxOrder = Math.max(maxOrder, cardItem?.order || 0);
  });

  return maxOrder + ORDER_STEP;
}
