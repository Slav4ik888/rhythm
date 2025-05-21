import { isNotObj, isUndefined } from 'shared/lib/validators';


export type Obj = {
  [key: string]: any
}

/**
 * 
 * @param obj   - объект в который добавлять field со значением value
 * @param field - название поля
 * @param value - значение
 */
export function setIfNotUndefined<T extends Obj>(
  obj   : T,
  field : keyof T,
  value : any
) {
  if (isUndefined(value) || isNotObj(obj)) return

  // @ts-ignore
  if (isUndefined(obj[field])) obj[field] = '';

  obj[field] = value
};
