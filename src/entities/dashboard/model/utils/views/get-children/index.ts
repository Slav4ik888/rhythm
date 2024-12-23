import { CardItem, CardItemId } from 'entities/card-item';


/** Returns children by parentId */
export const getChildren = (items: CardItem[], parentId: CardItemId): CardItem[] => {
  if (! items || ! items.length) return [];

  return items.filter(item => item.parentId === parentId);
};
