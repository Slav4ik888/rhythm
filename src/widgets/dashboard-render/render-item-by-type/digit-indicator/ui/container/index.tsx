import { FC, memo, useMemo } from 'react';
import { getKod, useDashboardViewState, ViewItem } from 'entities/dashboard-view';
import { DashboardStatisticItem, useDashboardData } from 'entities/dashboard-data';
import {
  getComparisonValues, getIncreased, getInverted, getReversedIndicators, ValueStringAndReduction
} from '../../utils';
import { getFixedFraction, getReducedWithReduction, toNumber } from 'shared/helpers/numbers';
import { calcGrowthChange } from '../../../growth-icon/utils';
import { isNotUndefined, isNum } from 'shared/lib/validators';
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

  const color = useMemo(() => getStyles(item, increased),
    [item, increased]
  );

  const statisticItem = useMemo(() => activeEntities[kod] as DashboardStatisticItem<number>, [activeEntities, kod]);

  const {
    fractionDigits, // Количество знаков после запятой
    addZero,        // Добавлять ли нули после запятой, чтобы выровнить до нужного кол-ва знаков
    valueNumber,    // Номер значения статистики, в обратном порядке (1 - последнее, 2 - предпоследнее). По умолчанию показываем последнее значение
    kfValue,
    reduce,
    noSpace,
    endingDiffType,
    plusMinus
  } = useMemo(() => item.settings || {}, [item.settings]);

  const count = valueNumber || 1;

  const [lastValue, prevValue] = isTemplate
    ? [152350, 121500]
    : getReversedIndicators(statisticItem?.data, count);


  const values = useMemo(() => {
    if (isTemplate) return [{ value: 35, reduction: '' }, { value: 27, reduction: '' }]
    else return getComparisonValues(
      getReversedIndicators(statisticItem?.data, count), // 0 - lastValue, 1 - prevValue, 2 - nextValue
      count,
      {
        reduce,  // Убрать разряды: 12 500 700 => 12.5 млн
        noSpace, // Не добавлять пробел между разрядами
        fractionDigits,
        addZero,
      }
    )
  },
    [isTemplate, count, fractionDigits, statisticItem?.data, addZero, noSpace, reduce]
  );


  // Значение для вывода на экран
  const calcedValue: ValueStringAndReduction = useMemo(() => {
    let value: any = '-';
    let reduction: string = '';

    if (endingDiffType === '% соотношение') {
      value = getFixedFraction(
        calcGrowthChange(lastValue, prevValue),
        { fractionDigits, addZero }
      );
    }
    else if (endingDiffType === 'Разница') {
      const { value: v, reduction: p = '' } = getReducedWithReduction(lastValue - prevValue);
      value = getFixedFraction(v, { fractionDigits, addZero });
      reduction = p;
    }
    else if (isNotUndefined(values[count - 1]?.value)) {
      if (isNum(toNumber(values[count - 1].value))) {
        const v = toNumber(values[count - 1].value) * (kfValue ? kfValue : 1);
        value = getFixedFraction(v, { fractionDigits, addZero });
      }
      else {
        value = values[count - 1].value || '-'; // Если значение отсутствует`
      }
      reduction = values[count - 1].reduction;
    }

    return {
      reduction,
      value: plusMinus
        ? String(value).replace('-', '').replace('.', ',') // Удаляем знак минус, если выбрано plusMinus, чтобы не дублировался тк будет выведен в ItemDigitIndicatorPlusMinus
        : String(value).replace('.', ','),
    }
  },
    [lastValue, prevValue, values, count, fractionDigits, addZero, kfValue, endingDiffType, plusMinus]
  );


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
