import { ViewItem, ViewItemId } from 'entities/dashboard-view';


/**
 * Пушит список всех вложенных children`s Id, которые нужно будет удаленить,
 * в предоставленный []
 */
export const getAllChildrenIds = (
  items       : ViewItem[],
  currentId   : ViewItemId,
  resultArray : ViewItemId[]
) => {
  const childrenIds = items.filter(item => item.parentId === currentId).map(item => item.id);
  resultArray.push(currentId);

  if (childrenIds?.length) {
    childrenIds.forEach(childId => {
      getAllChildrenIds(items, childId, resultArray);
    });
  }
};
