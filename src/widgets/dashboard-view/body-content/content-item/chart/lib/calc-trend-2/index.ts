import { isNum } from 'shared/lib/validators';
import { removeBorderlineEmptyValues } from './remove-borderline-empty-values';


/** Сумма значений массива */
const sum = (arr: number[]): number => arr.reduce((prev, val) => prev + val, 0);


/**
 * Расчитывает значения для линейного тренда
 *  - если значение отсутствует (пропуск) то это учитывается
 * @param dates 
 * @param items 
 * @returns items for trend-line
 */
export const calcTrend2 = (
  dates : string[],
  items : number[],
): number[] => {
  if (! dates || ! dates.length || ! items || ! items.length) return []

  // Удаляем вначале и конце не цифровые значения
  // Приводим все значения к цифрам, if NaN => ''
  // const y = removeBorderlineEmptyValues(items).map(v => isNum(v)
  //   ? isNaN(v)
  //     ? v : ''
  //   : '').filter(v => v) as number[];
  const y = removeBorderlineEmptyValues(items).map(v => isNum(v) ? v : NaN);
  console.log('y: ', y);
  
  // Количество точек данных
  // const n = dates.length; // 7
  const n = y.length; // 5
  console.log('n: ', n);

  // ∑x суммы значений => 1 + 2 + 3 + 4...
  const x = dates.map((v, i) => i + 1).slice(0, n); // [1, 2, 3, 4, 5]
  const sumX = sum(x); // 15

  // ∑y суммы значений
  const sumY = sum(y); // 105

  // ∑xy сумма произведений
  const xy = x.map((v, i) => v * y[i]); // 10 0 45 140 0 120 175
  const sumXY = sum(xy); // 490

  // ∑x2 сумма квадратов значений
  const x2 = x.map(v => v * v); // 1 4 9 16 25 36 49
  const sumX2 = sum(x2); // 140

  // Формула линейного тренда:  y = mx + b
  // ---------------------------------------
  // m — наклон линии (скорость изменения)
  const mChisl = n * sumXY - sumX * sumY; // 490
  const mZnam  = n * sumX2 - sumX * sumX; // 196
  const m = mChisl / mZnam; // 2,50

  // b — точка пересечения с осью
  const bChisl = sumY - m * sumX; // 35
  const bZnam  = n; // 7
  const b = bChisl / bZnam; // 5,00
  
  // y — прогнозируемое значение
  // x — момент времени
  const result = x.map(valueX => m * valueX + b);

  return result
}
