
/** 
 * @returns Array when indexes: 0 - lastValue, 1 - prevValue, 2 - nextValue
 */
export function getReversedIndicators<T>(
  arr         : T[],
  countValues : number = 2, // Сколько значений записать
): T[] { 
  const result: T[] = [];

  if (! arr || ! arr.length) return result;

  const length = arr.length;

  for (let i = 1; i <= countValues; i++) {
    const value = arr[length - i];
    i <= length && result.push(value);
  }

  return result;
}
