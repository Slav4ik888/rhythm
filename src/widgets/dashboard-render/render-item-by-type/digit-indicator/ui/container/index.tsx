import { FC, memo, useMemo } from 'react';
import { getKod, useDashboardViewState, ViewItem } from 'entities/dashboard-view';
import { DashboardStatisticItem, useDashboardData } from 'entities/dashboard-data';
import {
  getComparisonValues, getIncreased, getInverted, getReversedIndicators, ValueStringAndReduction
} from '../../utils';
import { getFixedFraction, getReducedWithReduction } from 'shared/helpers/numbers';
import { calcGrowthChange } from '../../../growth-icon/utils';
import { isNotUndefined } from 'shared/lib/validators';
import { getStyles } from './styles';
import { ItemDigitIndicatorComponent } from './component';



interface Props {
  item        : ViewItem
  isTemplate? : boolean // если рендерится шаблон
}

/** Item digitIndicator */
export const ItemDigitIndicator: FC<Props> = memo(({ item, isTemplate }) => {
  const { entities } = useDashboardViewState();
  const { activeEntities } = useDashboardData();
  const kod = useMemo(() => getKod(entities, item), [item, entities]);

  const increased = useMemo(() => {
    if (isTemplate) return 1
    else return getIncreased(getInverted(item, entities), activeEntities, kod)
  },
    [item, isTemplate, entities, activeEntities, kod]
  );

  const color = useMemo(() => getStyles(item, increased), [item, increased]);

  const statisticItem = useMemo(() => activeEntities[kod] as DashboardStatisticItem<number>, [activeEntities, kod]);
  const indicators = getReversedIndicators(statisticItem?.data, item?.settings?.valueNumber);
  const [lastValue, prevValue] = isTemplate ? [152350, 121500] : indicators;

  const fractionDigits = item?.settings?.fractionDigits;   // Количество знаков после запятой
  const addZero        = item?.settings?.addZero;          // Добавлять ли нули после запятой, чтобы выровнить до нужного кол-ва знаков
  const count          = item?.settings?.valueNumber || 1; // Номер значения статистики, в обратном порядке (1 - последнее, 2 - предпоследнее). По умолчанию показываем последнее значение

  const values = useMemo(() => {
    if (isTemplate) return [{ value: 35, reduction: '' }, { value: 27, reduction: '' }]
    else return getComparisonValues(
      getReversedIndicators(statisticItem?.data, count), // 0 - lastValue, 1 - prevValue, 2 - nextValue
      count,
      {
        reduce: item?.settings?.reduce,  // Убрать разряды: 12 500 700 => 12.5 млн
        noSpace: item?.settings?.noSpace, // Не добавлять пробел между разрядами
        fractionDigits,
        addZero,
      }
    )
  },
    [item, isTemplate, count, fractionDigits, statisticItem?.data, addZero]
  );


  // Значение для вывода на экран
  const calcedValue: ValueStringAndReduction = useMemo(() => {
    let value: any = '-';
    let reduction: string = '';

    if (item?.settings?.endingDiffType === '% соотношение') {
      value = getFixedFraction(
        calcGrowthChange(lastValue, prevValue),
        { fractionDigits, addZero }
      );
    }
    else if (item?.settings?.endingDiffType === 'Разница') {
      const { value: v, reduction: p = '' } = getReducedWithReduction(lastValue - prevValue);
      value = getFixedFraction(v, { fractionDigits, addZero });
      reduction = p;
    }
    else if (isNotUndefined(values[count - 1]?.value)) {
        value = values[count - 1]?.value || '-'; // Если значение отсутствует`
        reduction = values[count - 1]?.reduction;
      }

    return {
      reduction,
      value: item?.settings?.plusMinus
        ? String(value).replace('-', '').replace('.', ',') // Удаляем знак минус, если выбрано plusMinus, чтобы не дублировался тк будет выведен в ItemDigitIndicatorPlusMinus
        : String(value).replace('.', ','),
    }
  }, [lastValue, prevValue, values, count, item, fractionDigits, addZero]);



  return (
    <ItemDigitIndicatorComponent
      item      = {item}
      increased = {increased}
      color     = {color}
      value     = {calcedValue.value}
      reduction = {calcedValue.reduction}
    />
  )
});
