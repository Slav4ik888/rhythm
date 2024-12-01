import { addSpaceBetweenNumbers, getFixedFraction, getReducedWithPrefix } from 'shared/helpers/numbers';
import { isNum } from 'shared/lib/validators';
import { ReportsResultChangesConfig } from '../../../../../../reports';



interface Value {
  value  : string
  prefix : string
}


/** Показатели для сравнения */
export const getComparisonValues = (values: number[], config: ReportsResultChangesConfig = {}): Value[] => {
  const { reduce, fractionDigits, addZero } = config.resultChanges?.comparisonIndicators || {};

  return values.map(startValue => {
    // Убираем разряды и определяем префикс
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
  });
}
