import { ViewItem, ViewItemId } from 'entities/dashboard-view';
import { getChildren } from 'entities/dashboard-view/model/utils';
import { cloneObj } from 'shared/helpers/objects';
import { getNestedViewItems } from '../get-nested-view-items';
import { v4 as uuidv4 } from 'uuid';


export const getCopyViewItem = (
  activatedCopiedId : ViewItemId,
  selectedId        : ViewItemId, // Будет parentId для первого элемента
  viewItems         : ViewItem[],
): ViewItem[] => {
  const copyViewItem: ViewItem[] = [];

  // Copy all nested items
  const copyNestedItems = cloneObj(getNestedViewItems(viewItems, activatedCopiedId));
  
  // Create new ids & set its as parentId for all nested items
  const setNewIds = (id: ViewItemId, parentId: ViewItemId) => {
    const parentItem = copyNestedItems.find(item => item.id === id);

    if (parentItem) {
      parentItem.id = uuidv4();
      parentItem.parentId = parentId;
      copyViewItem.push(parentItem);

      getChildren(viewItems, id).forEach(item => setNewIds(item.id, id));
    } 
  };

  setNewIds(activatedCopiedId, selectedId);

  return copyViewItem
}
