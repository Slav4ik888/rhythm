import { isUndefined } from 'shared/lib/validators';

type Obj = {
  [key: string]: any
}

/**
 * Set into Obj value in object by scheme
 * max вложенность не ограничена
 * Особенности работы:
 *  - Создание промежуточных структур - если какого-то пути не существует, функция создаст нужные объекты/массивы
 *  - Безопасная работа с массивами - проверяет что текущий элемент действительно массив и что индекс в допустимых границах
 *  - Возвращает boolean - true если значение успешно установлено, false если произошла ошибка
 *  - Поддержка всех случаев:
 *  - Обычные поля объектов (obj.field)
 *  - Элементы массивов (obj.array.[0])
 *  - Комбинации (obj.field.array.[0].subfield)
 * v.2025-05-28
 */
export function setValueByScheme(obj: Obj | undefined, scheme: string, value: any) {
  if (!obj || !scheme) return false;

  const fields = scheme.split('.');
  let current = obj;

  for (let i = 0; i < fields.length - 1; i++) {
    const field = fields[i];

    if (field.startsWith('[') && field.endsWith(']')) {
      // Обработка массива
      const index = parseInt(field.slice(1, -1), 10);
      if (!Array.isArray(current)) return false;

      // Разрешаем добавлять новые элементы если индекс равен длине массива
      if (index < 0 || index > current.length) return false;

      // Если элемент не существует - создаем объект (для следующего уровня)
      if (index === current.length) {
        current.push({});
      }
      current = current[index];
    } else {
      // Обработка объекта
      if (current[field] === undefined) {
        // Создаем новый объект или массив в зависимости от следующего поля
        const nextField = fields[i + 1];
        current[field] = nextField.startsWith('[') ? [] : {};
      }
      current = current[field];
    }
  }

  // Устанавливаем значение в последнее поле
  const lastField = fields[fields.length - 1];

  if (lastField.startsWith('[') && lastField.endsWith(']')) {
    // Установка значения в массив
    const index = parseInt(lastField.slice(1, -1), 10);
    if (!Array.isArray(current)) return false;

    // Разрешаем добавлять новые элементы если индекс равен длине массива
    if (index < 0 || index > current.length) return false;

    // Устанавливаем значение
    if (index === current.length) {
      current.push(value);
    } else {
      current[index] = value;
    }
  } else {
    // Установка значения в объект
    current[lastField] = value;
  }

  return true;
}


/**
 * DEPRECATED 2025-05-28
 * Set into Obj value in object by scheme
 * max вложенность = 8
 * v.2023-05-15
 */
// export function setValueBySchemeOld(obj: Obj | undefined, scheme: string, value: any) {
//   if (! obj || ! scheme) return undefined;

//   const
//     fields = scheme.split('.');

//   const check2Field = (obj: object, fields: string[]) => {
//   // @ts-ignore
//     if (isUndefined(obj[fields[0]])) {
//   // @ts-ignore
//       obj[fields[0]] = {};
//     }
//   };

//   const check3Field = (obj: object, fields: string[]) => {
//     check2Field(obj, fields);
//   // @ts-ignore
//     if (isUndefined(obj[fields[0]][fields[1]])) {
//   // @ts-ignore
//       obj[fields[0]][fields[1]] = {};
//     }
//   };

//   const check4Field = (obj: object, fields: string[]) => {
//     check3Field(obj, fields);
//   // @ts-ignore
//     if (isUndefined(obj[fields[0]][fields[1]][fields[2]])) {
//   // @ts-ignore
//       obj[fields[0]][fields[1]][fields[2]] = {};
//     }
//   };

//   const check5Field = (obj: object, fields: string[]) => {
//     check4Field(obj, fields);
//   // @ts-ignore
//     if (isUndefined(obj[fields[0]][fields[1]][fields[2]][fields[3]])) {
//   // @ts-ignore
//       obj[fields[0]][fields[1]][fields[2]][fields[3]] = {};
//     }
//   };

//   const check6Field = (obj: object, fields: string[]) => {
//     check5Field(obj, fields);
//   // @ts-ignore
//     if (isUndefined(obj[fields[0]][fields[1]][fields[2]][fields[3]][fields[4]])) {
//   // @ts-ignore
//       obj[fields[0]][fields[1]][fields[2]][fields[3]][fields[4]] = {};
//     }
//   };

//   const check7Field = (obj: object, fields: string[]) => {
//     check6Field(obj, fields);
//   // @ts-ignore
//     if (isUndefined(obj[fields[0]][fields[1]][fields[2]][fields[3]][fields[4]][fields[5]])) {
//   // @ts-ignore
//       obj[fields[0]][fields[1]][fields[2]][fields[3]][fields[4]][fields[5]] = {};
//     }
//   };

//   const check8Field = (obj: object, fields: string[]) => {
//     check7Field(obj, fields);
//   // @ts-ignore
//     if (isUndefined(obj[fields[0]][fields[1]][fields[2]][fields[3]][fields[4]][fields[5]][fields[6]])) {
//   // @ts-ignore
//       obj[fields[0]][fields[1]][fields[2]][fields[3]][fields[4]][fields[5]][fields[6]] = {};
//     }
//   };



//   switch (fields.length) {
//     case 8:
//       check8Field(obj, fields);
//   // @ts-ignore
//       obj[fields[0]][fields[1]][fields[2]][fields[3]][fields[4]][fields[5]][fields[6]][fields[7]] = value
//       break;

//     case 7:
//       check7Field(obj, fields);
//   // @ts-ignore
//       obj[fields[0]][fields[1]][fields[2]][fields[3]][fields[4]][fields[5]][fields[6]] = value
//       break;

//     case 6:
//       check6Field(obj, fields);
//   // @ts-ignore
//       obj[fields[0]][fields[1]][fields[2]][fields[3]][fields[4]][fields[5]] = value
//       break;

//     case 5:
//       check5Field(obj, fields);
//   // @ts-ignore
//       obj[fields[0]][fields[1]][fields[2]][fields[3]][fields[4]] = value
//       break;

//     case 4:
//       check4Field(obj, fields);
//   // @ts-ignore
//       obj[fields[0]][fields[1]][fields[2]][fields[3]] = value
//       break;

//     case 3:
//       check3Field(obj, fields);
//   // @ts-ignore
//       obj[fields[0]][fields[1]][fields[2]] = value
//       break;

//     case 2:
//       check2Field(obj, fields);
//   // @ts-ignore
//       obj[fields[0]][fields[1]] = value;
//       break;

//     case 1:
//   // @ts-ignore
//       obj[fields[0]] = value;
//       break;
//   }
// }
