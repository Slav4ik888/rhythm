import { ReportsResultChangesConfig } from '../../../../../../reports';
import { getValueAndPrefix, ValueAndPrefix } from '../../../../model/utils';



/** Показатели для сравнения */
export const getComparisonValues = (
  values: number[],
  config: ReportsResultChangesConfig = {}
): ValueAndPrefix[] => {
  const { valuesCount } = config.resultChanges?.comparisonIndicators || {};

  return values
    .slice(0, valuesCount) // Оставляем нужное кол-во значений
    .map(startValue => getValueAndPrefix(startValue, config?.resultChanges?.comparisonIndicators));
};
