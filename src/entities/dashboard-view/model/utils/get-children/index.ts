import { ViewItem, ViewItemId } from '../../types';


/** Returns children by parentId */
export const getChildren = (items: ViewItem[], parentId: ViewItemId | undefined): ViewItem[] => {
  if (! items || ! items.length) return [];

  return items.filter(item => item.parentId === parentId);
};
