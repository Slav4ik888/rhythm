import { ViewItem, ViewItemId } from 'entities/dashboard-view';



/**
 * Находит элемент по ID в массиве items.
 */
function findItemById(items: ViewItem[], id: ViewItemId): ViewItem | null {
  return items.find(item => item.id === id) || null;
}

/**
 * Находит всех соседей элемента (элементы с тем же parentId).
 */
function getSiblings(items: ViewItem[], itemId: ViewItemId): ViewItem[] {
  const item = findItemById(items, itemId);
  if (!item) return [];

  return items.filter(i =>
    i.parentId === item.parentId
    && i.id !== itemId
  );
}

/**
 * Находит всех потомков элемента (рекурсивно).
 */
function getDescendants(items: ViewItem[], parentId: ViewItemId | null): ViewItem[] {
  if (!parentId) return [];

  const children = items.filter(item => item.parentId === parentId);
  let descendants = [...children];

  // eslint-disable-next-line no-restricted-syntax
  for (const child of children) {
    descendants = descendants.concat(getDescendants(items, child.id));
  }

  return descendants;
}

/**
 * Ищет элемент с маркером в settings.kodMarker.
 */
export function findElementByMarker(
  items     : ViewItem[],
  currentId : ViewItemId,
  kodMarker : string
): ViewItem | null {
  while (currentId !== null) {
    const currentItem = findItemById(items, currentId);

    if (! currentItem) break;

    // 1. Проверяем соседей
    const siblings = getSiblings(items, currentId);
    const siblingWithMarker = siblings.find(item =>
      item.settings?.kodMarker === kodMarker
    );
    if (siblingWithMarker) return siblingWithMarker;

    // 2. Проверяем потомков
    const descendants = getDescendants(items, currentId);
    const descendantWithMarker = descendants.find(item =>
      item.settings?.kodMarker === kodMarker
    );
    if (descendantWithMarker) return descendantWithMarker;

    // 3. Переходим к родителю
    currentId = currentItem.parentId;
  }

  return null;
}
