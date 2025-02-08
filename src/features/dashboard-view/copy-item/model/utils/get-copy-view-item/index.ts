import { ViewItem, ViewItemId } from 'entities/dashboard-view';
import { getChildren } from 'entities/dashboard-view/model/utils';
import { cloneObj } from 'shared/helpers/objects';
import { getNestedViewItems } from '../get-nested-view-items';
import { v4 as uuidv4 } from 'uuid';


export const getCopyViewItem = (
  activatedCopiedId : ViewItemId,
  newParentId       : ViewItemId, // Будет parentId для первого элемента
  viewItems         : ViewItem[],
): ViewItem[] => {
  const copyViewItem: ViewItem[] = [];

  // Copy all nested items
  const copyNestedItems = cloneObj(getNestedViewItems(viewItems, activatedCopiedId));
  
  // Create new ids & set its as parentId for all nested items
  const setNewIds = (currentItemId: ViewItemId, parentId: ViewItemId) => {
    const currentItem = copyNestedItems.find(item => item.id === currentItemId);

    if (currentItem) {
      currentItem.id = uuidv4();
      currentItem.parentId = parentId;
      copyViewItem.push(currentItem);

      getChildren(viewItems, currentItemId).forEach(item => setNewIds(item.id, currentItem.id));
    } 
  };

  setNewIds(activatedCopiedId, newParentId);

  return copyViewItem
}
