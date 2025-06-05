import { isNotObj, isObj, isUndefined } from 'shared/lib/validators';


export type Obj = {
  [key: string]: any
}

/**
 * 
 * @param obj   - объект в который добавлять field со значением value или строка
 * @param value - значение, если undefined, то ничего не добавляется
 * @param field - название поля (если obj объект)
 */
export function setIfNotUndefined<T extends Obj | string>(
  obj    : T,
  value  : any,
  field? : keyof T,
) {
  if (isUndefined(value)) return

  if (field) {
    if (isNotObj(obj)) {
      obj = value;
    }
    else {
      // @ts-ignore
      if (isUndefined(obj[field])) (obj)[field] = '';
      obj[field] = value;
    }
  }
  else {
    if (isNotObj(obj)) {
      obj = value;
    }
  }
};
