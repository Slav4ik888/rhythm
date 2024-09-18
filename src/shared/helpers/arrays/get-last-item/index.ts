
/** Возвращает последний элемент массива */
export function getLastItem<T>(data: T[] | undefined): T | undefined{
  if (! data || ! data?.length) return undefined
  
  return data[data.length - 1]
}
