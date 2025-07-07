
/**
 * @returns Array when indexes: 0 - lastValue, 1 - prevValue, 2 - nextValue
 */
export function getReversedIndicators<T>(
  arr         : T[],
  countValues : number = 2, // Сколько значений записать
): T[] {
  const result: T[] = [];
  const count = countValues < 2 ? 2 : countValues; // Min 2

  if (! arr || ! arr.length) return result;

  const { length } = arr;

  for (let i = 1; i <= count; i++) {
    const value = arr[length - i];
    if (i <= length) result.push(value);
  }

  return result;
}
