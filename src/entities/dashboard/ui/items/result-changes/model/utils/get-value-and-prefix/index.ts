import { addSpaceBetweenNumbers, getFixedFraction, getReducedWithPrefix } from 'shared/helpers/numbers';
import { isNum } from 'shared/lib/validators';



export interface ValueAndPrefix {
  value  : string
  prefix : string
}

interface Config {
  reduce?         : boolean,
  fractionDigits? : number,
  addZero?        : boolean,
}

/** Убираем разряды и определяем префикс */
export const getValueAndPrefix = (startValue: number, config: Config = {} as Config): ValueAndPrefix => {
  const { reduce, fractionDigits, addZero } = config || {};
  let resultValue: any = startValue;
  let prefix = '';

  if (reduce) {
    const { value: v, prefix: p = '' } = getReducedWithPrefix(startValue);
    resultValue = v;
    prefix = p;
  }

  // Обрабатываем десятичные
  if (isNum(resultValue)) {
    resultValue = getFixedFraction(resultValue, { fractionDigits, addZero });
  }
    
  return {
    prefix,
    value: addSpaceBetweenNumbers(resultValue as number)
  }
}
