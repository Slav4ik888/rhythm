import { isNotUndefined } from 'shared/lib/validators';


/**
 * Если отсутствует входящее значение, то подставляет defaultValue
 */
export function setValue<T>(input: T, defaultValue: T) {
  return isNotUndefined(input) ? input : defaultValue;
}
