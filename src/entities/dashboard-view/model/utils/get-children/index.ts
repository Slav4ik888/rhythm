import { CardItem, CardItemId } from '../../types';


/** Returns children by parentId */
export const getChildren = (items: CardItem[], parentId: CardItemId): CardItem[] => {
  if (! items || ! items.length) return [];

  return items.filter(item => item.parentId === parentId);
};
