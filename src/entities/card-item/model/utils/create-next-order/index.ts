import { CardItem } from '../../types';


export const createNextOrder = (childrenCardItems: CardItem[]): number => {
  let maxOrder = 1000;

  if (! childrenCardItems || ! childrenCardItems.length) return maxOrder

  childrenCardItems.forEach((cardItem) => {
    maxOrder = Math.max(maxOrder, cardItem?.order || 0);
  });

  return maxOrder + 1000;
}
