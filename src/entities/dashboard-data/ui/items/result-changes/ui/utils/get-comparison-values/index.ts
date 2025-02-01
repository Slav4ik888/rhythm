import { ReportsResultChangesConfig } from 'entities/dashboard-data/ui/reports';
import { getValueAndReduction, ValueStringAndReduction } from 'widgets/dashboard-view/body-content/content-item/digit-indicator/model/utils';



/** Показатели для сравнения */
export const getComparisonValues = (
  values: number[],
  config: ReportsResultChangesConfig = {}
): ValueStringAndReduction[] => {
  const { valuesCount } = config.resultChanges?.comparisonIndicators || {};

  return values
    .slice(0, valuesCount) // Оставляем нужное кол-во значений
    .map(startValue => getValueAndReduction(startValue, config?.resultChanges?.comparisonIndicators));
};
