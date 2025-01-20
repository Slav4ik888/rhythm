import { getValueAndPrefix, ValueAndPrefix } from 'widgets/dashboard-view/body-content/content-item/growth-icon/model/utils';
import { ReportsResultChangesConfig } from '../../../../../../reports';




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
