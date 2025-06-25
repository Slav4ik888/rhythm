import { ViewItem, ViewItemId } from 'entities/dashboard-view';
import { PartialViewItemUpdate } from '../../../../update-view-item';


/**
 * Собирает все вложенные children (включая текущий элемент) в виде { id, bunchId }
 */
export const getAllChildrenIdWithBunch = (
  items       : ViewItem[],
  currentId   : ViewItemId,
  resultArray : PartialViewItemUpdate[]
): void => {
  // Находим текущий элемент (чтобы получить его bunchId)
  const currentItem = items.find(item => item.id === currentId);

  if (! currentItem) return; // если элемент не найден, прекращаем рекурсию

  // Добавляем текущий элемент в результат
  resultArray.push({
    id: currentItem.id,
    bunchId: currentItem.bunchId
  });

  // Находим всех детей текущего элемента
  const children = items.filter(item => item.parentId === currentId);

  // Рекурсивно обрабатываем каждого ребёнка
  children.forEach(child => {
    getAllChildrenIdWithBunch(items, child.id, resultArray);
  });
};
