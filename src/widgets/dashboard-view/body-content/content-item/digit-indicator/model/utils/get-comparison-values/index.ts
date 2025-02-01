import { IndicatorsConfig } from 'entities/dashboard-view';
import { getValueAndReduction } from '../get-value-and-reduction';


export interface ValueStringAndReduction {
  value     : string
  reduction : string
}

/** Показатели для сравнения */
export const getComparisonValues = (
  values : number[],
  count  : number,
  config : IndicatorsConfig = {}
): ValueStringAndReduction[] => {

  return values
    .slice(0, count) // Оставляем нужное кол-во значений
    .map(startValue => getValueAndReduction(startValue, config));
};
