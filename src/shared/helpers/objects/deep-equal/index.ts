
type AnyObject = Record<string, any>

/**
 * Рекурсивно сравнивает два объекта или массива.
 * Она проверяет типы, длины массивов, и значения всех свойств.
 */
export function deepEqual<AnyObject>(obj1: AnyObject, obj2: AnyObject): boolean {
  // Если оба объекта являются null или undefined, они равны
  if (obj1 === null && obj2 === null) return true;
  if (obj1 === undefined && obj2 === undefined) return true;

  // Если один из объектов null или undefined, они не равны
  if (obj1 === null || obj2 === null) return false;
  if (obj1 === undefined || obj2 === undefined) return false;

  // Если типы объектов разные, они не равны
  if (typeof obj1 !== typeof obj2) return false;

  // Если это примитивы, сравниваем их значения
  if (typeof obj1 !== 'object') return obj1 === obj2;

  // Если это массивы, сравниваем их элементы
  if (Array.isArray(obj1) && Array.isArray(obj2)) {
    if (obj1.length !== obj2.length) return false;
    for (let i = 0; i < obj1.length; i++) {
      if (!deepEqual(obj1[i], obj2[i])) return false;
    }
    return true;
  }

  // Если это объекты, сравниваем их свойства
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);

  if (keys1.length !== keys2.length) return false;

  // eslint-disable-next-line
  for (const key of keys1) {
    if (!keys2.includes(key)) return false;
    // @ts-ignore
    if (!deepEqual(obj1[key], obj2[key])) return false;
  }

  return true;
}

/**
 * Эта функция проходит по всем свойствам объектов и сравнивает их с помощью deepEqual.
 * Если найдены различия, они добавляются в объект differences с указанием пути к свойству.
 */
function findDifferences(obj1: AnyObject, obj2: AnyObject): Record<string, { obj1: any; obj2: any }> {
  const differences: Record<string, { obj1: any; obj2: any }> = {};

  function compareObjects(o1: AnyObject, o2: AnyObject, path: string = '') {
    const keys = new Set([...Object.keys(o1), ...Object.keys(o2)]);

    keys.forEach(key => {
      const currentPath = path ? `${path}.${key}` : key;

      if (typeof o1[key] === 'object' && o1[key] !== null && typeof o2[key] === 'object' && o2[key] !== null) {
        if (Array.isArray(o1[key]) && Array.isArray(o2[key])) {
          if (o1[key].length !== o2[key].length) {
            differences[currentPath] = { obj1: o1[key], obj2: o2[key] };
          } else {
            for (let i = 0; i < o1[key].length; i++) {
              if (!deepEqual(o1[key][i], o2[key][i])) {
                differences[`${currentPath}[${i}]`] = { obj1: o1[key][i], obj2: o2[key][i] };
              }
            }
          }
        } else {
          compareObjects(o1[key], o2[key], currentPath);
        }
      } else if (o1[key] !== o2[key]) {
        differences[currentPath] = { obj1: o1[key], obj2: o2[key] };
      }
    });
  }

  compareObjects(obj1, obj2);
  return differences;
}

// Пример использования:
// const obj1 = {
//     a: 1,
//     b: [1, 2, 3],
//     c: { d: 4, e: [5, 6] }
// };

// const obj2 = {
//     a: 1,
//     b: [1, 2, 4],
//     c: { d: 4, e: [5, 7] }
// };

// console.log(findDifferences(obj1, obj2));
// Вывод:
// {
//   'b[2]': { obj1: 3, obj2: 4 },
//   'c.e[1]': { obj1: 6, obj2: 7 }
// }
