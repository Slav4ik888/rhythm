import { ViewItem, ViewItemId } from 'entities/dashboard-view';
import { createNextOrder, getChildren } from 'entities/dashboard-view/model/utils';
import { cloneObj } from 'shared/helpers/objects';
import { getNestedViewItems } from '../get-nested-view-items';
import { v4 as uuidv4 } from 'uuid';
import { creatorFixDate } from 'entities/base';


export const getCopyViewItem = (
  activatedCopiedId : ViewItemId, // Копируемый элемент
  newParentId       : ViewItemId, // Куда вставляется, будет parentId для первого элемента
  viewItems         : ViewItem[], 
  userId            : string,
): ViewItem[] => {
  const copyViewItem: ViewItem[] = [];

  // Copy all nested items
  const copyNestedItems = cloneObj(getNestedViewItems(viewItems, activatedCopiedId));
  
  // Create new ids & set its as parentId for all nested items
  const setNewIds = (
    currentItemId : ViewItemId,
    parentId      : ViewItemId,
    isFirst       : boolean = false
  ) => {
    const currentItem = copyNestedItems.find(item => item.id === currentItemId);

    if (currentItem) {
      currentItem.id         = uuidv4();
      currentItem.parentId   = parentId;
      currentItem.createdAt  = creatorFixDate(userId);
      currentItem.lastChange = creatorFixDate(userId);

      if (isFirst) { // Первый элемент помещаем в конец newParentId
        currentItem.order = createNextOrder(getChildren(viewItems, parentId));
      }
      copyViewItem.push(currentItem);

      getChildren(viewItems, currentItemId).forEach(item => setNewIds(item.id, currentItem.id));
    } 
  };

  setNewIds(activatedCopiedId, newParentId, true);

  return copyViewItem
}
