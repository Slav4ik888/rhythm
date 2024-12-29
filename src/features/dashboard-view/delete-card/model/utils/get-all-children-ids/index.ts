import { CardItem, CardItemId } from 'entities/dashboard-view';


/**
 * Пушит список всех вложенных children`s Id, которые нужно будет удаленить,
 * в предоставленный []
 */
export const getAllChildrenIds = (
  items       : CardItem[],
  currentId   : CardItemId,
  resultArray : CardItemId[]
) => {
  const childrenIds = items.filter(item => item.parentId === currentId).map(item => item.id);
  resultArray.push(currentId);

  if (childrenIds?.length) {
    childrenIds.forEach(childId => {
      getAllChildrenIds(items, childId, resultArray);
    });
  }
};
