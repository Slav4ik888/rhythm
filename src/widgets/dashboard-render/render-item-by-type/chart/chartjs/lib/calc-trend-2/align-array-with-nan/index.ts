
/**
 * Пример использования
 * const array1 = [1, 2, 3];
 * const array2 = [4, 5, 6, 7, 8];

 * const [aligned1, aligned2] = alignArraysWithNaN(array1, array2);
 * console.log('aligned1:', aligned1); // [NaN, NaN, 1, 2, 3]
 * console.log('aligned2:', aligned2); // [4, 5, 6, 7, 8]
 */
export function alignArraysWithNaN(trendData: number[], dates: string[]): number[] {
  // Создаем копии массивов чтобы не мутировать оригиналы
  const result1 = [...trendData];
  const result2 = [...dates];

  // Вычисляем разницу в длине
  const lengthDiff = result1.length - result2.length;

  if (lengthDiff > 0) {
    // Первый массив длиннее - добавляем NaN в начало второго
    result2.unshift(...Array(lengthDiff).fill(NaN));
  }
  else if (lengthDiff < 0) {
    // Второй массив длиннее - добавляем NaN в начало первого
    result1.unshift(...Array(Math.abs(lengthDiff)).fill(NaN));
  }

  return result1;
}
