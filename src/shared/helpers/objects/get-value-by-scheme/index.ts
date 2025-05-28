
type Obj = {
  [key: string]: any
}


/**
 * v.2025-05-28
 * Object value by scheme
 * Поддерживает схемы с вложенными arrays 'field1.child1.[1].child4.[2].child8'
 */
export function getValueByScheme(obj: Obj | undefined, scheme: string): any  {
  if (!obj || !scheme) return undefined;
  
  const fields = scheme.split('.');

  if (fields.length === 0) return obj;
  if (fields.length === 1) {
    const field = fields[0];
    // Обработка случая с массивом [index]
    if (field.startsWith('[') && field.endsWith(']')) {
      const index = parseInt(field.slice(1, -1));
      return Array.isArray(obj) ? obj[index] : undefined;
    }
    return obj?.[field];
  }

  const currentField = fields[0];
  let nextObj;
  
  // Обработка текущего поля - может быть массивом или объектом
  if (currentField.startsWith('[') && currentField.endsWith(']')) {
    const index = parseInt(currentField.slice(1, -1));
    nextObj = Array.isArray(obj) ? obj[index] : undefined;
  } else {
    nextObj = obj?.[currentField];
  }

  const newSchema = fields.slice(1).join('.');
  return getValueByScheme(nextObj, newSchema);
}


/**
 * DEPRACATEDD v.2025-05-28
 * v.2025-01-10
 * Object value by scheme
 * Поддерживает только вложенные объекты, not arrays
 */
export function getValueBySchemeOld2(obj: Obj | undefined, scheme: string): any {
  if (! obj || ! scheme) return undefined;
  
  const fields = scheme.split('.');

  if (fields.length === 0) return obj
  if (fields.length === 1) return obj?.[fields[0]]

  const newSchema = fields.slice(1).join('.');
  return getValueByScheme(obj?.[fields[0]], newSchema);
}


/**
 * DEPRACATEDD v.2025-01-10
 * v.2023-05-28
 * Object value by scheme, else false
 * Поддерживает только вложенные объекты, not arrays
 * max вложенность = 8
 */
export function getValueBySchemeOld<O extends object>(obj: O, scheme: string): any {
  if (! obj || ! scheme) return undefined;
  
  const fields = scheme.split('.');

  if (fields.length === 0 || fields.length > 8) return undefined
  // @ts-ignore
  if (fields.length === 1) return obj[fields[0]]
  // @ts-ignore
  if (fields.length === 2) return obj[fields[0]]?.[fields[1]]
  // @ts-ignore
  if (fields.length === 3) return obj[fields[0]]?.[fields[1]]?.[fields[2]]
  // @ts-ignore
  if (fields.length === 4) return obj[fields[0]]?.[fields[1]]?.[fields[2]]?.[fields[3]]
  // @ts-ignore
  if (fields.length === 5) return obj[fields[0]]?.[fields[1]]?.[fields[2]]?.[fields[3]]?.[fields[4]]
  // @ts-ignore
  if (fields.length === 6) return obj[fields[0]]?.[fields[1]]?.[fields[2]]?.[fields[3]]?.[fields[4]]?.[fields[5]]
  // @ts-ignore
  if (fields.length === 7) return obj[fields[0]]?.[fields[1]]?.[fields[2]]?.[fields[3]]?.[fields[4]]?.[fields[5]]?.[fields[6]]
  // @ts-ignore
  if (fields.length === 8) return obj[fields[0]]?.[fields[1]]?.[fields[2]]?.[fields[3]]?.[fields[4]]?.[fields[5]]?.[fields[6]]?.[fields[7]]
}
