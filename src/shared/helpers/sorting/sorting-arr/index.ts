import { cloneObj } from '../../objects';

type A = {
  [k: string]: unknown
}

/**
 * v.2023-06-30
 * Сортируем по arr по полю fieldName
 * @param {array} arr
 * @param {string} fieldName
 * @param {boolean} decrease // если нужно на убывание
 * @return {array} - result
 */
export function sortingArr<T>(
  arr: Array<T>,
  fieldName: string,
  decrease?: boolean
): Array<T> {
  if (! arr?.length || arr.length === 1) return arr;

  const result = arr.map(item => cloneObj(item));

  const L = decrease ? 1 : -1;
  const G = decrease ? -1 : 1;

  return result.sort((a, b) => {
    // @ts-ignore
    if (a[fieldName] < b[fieldName]) {
      return L;
    }
    // @ts-ignore
    if (a[fieldName] > b[fieldName]) {
      return G;
    }
    return 0;
  });
}
