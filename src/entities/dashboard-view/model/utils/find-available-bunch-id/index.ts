import { ViewItem } from '../../types';

/**
 * Находит bunchId с количеством элементов < 100
 * @param items Массив ViewItem
 * @param freeCount Требуемое кол-во свободного места
 * @returns Первый найденный bunchId с <100 элементов или undefined
 */
export function findAvailableBunchId(items: ViewItem[], freeCount: number = 1): string | undefined {
  const bunchCounts = items.reduce((acc, item) => {
    acc.set(item.bunchId, (acc.get(item.bunchId) || 0) + 1);
    return acc;
  }, new Map<string, number>());

  return Array.from(bunchCounts.entries())
    .find(([_, count]) => count < (100 - freeCount + 1))?.[0];
}
