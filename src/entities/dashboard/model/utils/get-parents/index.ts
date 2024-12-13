import { CardItem } from 'entities/card-item'


export interface ParentsCardItems {
  [parentId: string]: CardItem[]
}

/** Returns ParentsCardItem */
export const getParents = (items: CardItem[]): ParentsCardItems => {

  const parents: ParentsCardItems = {};
  if (! items || ! items.length) return parents;

  items.forEach(item => {

      if (! parents[item.parentId]) {
        parents[item.parentId] = [];
      }
      parents[item.parentId].push(item);
    
  });
  
  return parents;
}
