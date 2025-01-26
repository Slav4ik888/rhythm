import { IndicatorsConfig } from 'entities/dashboard-view';
import { getValueAndPrefix, ValueAndPrefix } from '../get-value-and-prefix';



/** Показатели для сравнения */
export const getComparisonValues = (
  values: number[],
  count : number,
  config: IndicatorsConfig = {}
): ValueAndPrefix[] => {

  return values
    .slice(0, count) // Оставляем нужное кол-во значений
    .map(startValue => getValueAndPrefix(startValue, config));
};
