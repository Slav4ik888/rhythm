import { FC, memo, useMemo } from 'react';
import { getKod, useDashboardView, ViewItem, ViewItemId } from 'entities/dashboard-view';
import { ItemWrapper } from '../../wrapper-item';
import { DashboardStatisticItem, Increased, useDashboardData } from 'entities/dashboard-data';
import { getColorByIncreased, getComparisonValues, getIncreased, getReversedIndicators, ValueStringAndReduction } from '../model/utils';
import { CustomTheme, useTheme } from 'app/providers/theme';
import { ItemDigitIndicatorValue } from './value';
import { ItemDigitIndicatorEnding } from './ending';
import { ItemDigitIndicatorPlusMinus } from './plus-minus';
import { getFixedFraction, getReducedWithReduction } from 'shared/helpers/numbers';
import { calcGrowthChange } from '../../growth-icon/model/utils';
import { isNotUndefined } from 'shared/lib/validators';



const useStyles = (theme: CustomTheme, item: ViewItem, increased: Increased) => {
  let color = '';
  
  // Если указано что цвет по росту/падению
  if (item?.settings?.growthColor) {
    color = getColorByIncreased(theme, increased, item?.settings?.unchangedBlack);
  }
  else if (item?.styles?.color) {
    color = item?.styles?.color;
  }

  return color
};


interface Props {
  item     : ViewItem
  onSelect : (id: ViewItemId) => void
}

/** Item digitIndicator */
export const ItemDigitIndicator: FC<Props> = memo(({ item, onSelect }) => {
  const { entities } = useDashboardView();
  const { activeEntities } = useDashboardData();
  const kod = useMemo(() => getKod(entities, item), [item, entities]);
  
  const increased = useMemo(() => getIncreased(item, activeEntities, kod), [item, activeEntities, kod]);
  const color = useStyles(useTheme(), item, increased);

  const statisticItem = useMemo(() => activeEntities[kod] as DashboardStatisticItem<number>, [activeEntities, item, kod]);
  const indicators = getReversedIndicators(statisticItem?.data, item?.settings?.valueNumber);
  const [lastValue, prevValue] = indicators;

  const fractionDigits = item?.settings?.fractionDigits;   // Количество знаков после запятой
  const addZero        = item?.settings?.addZero;          // Добавлять ли нули после запятой, чтобы выровнить до нужного кол-ва знаков
  const count          = item?.settings?.valueNumber || 1; // Номер значения статистики, в обратном порядке (1 - последнее, 2 - предпоследнее). По умолчанию показываем последнее значение

  const values = useMemo(() => getComparisonValues(
    getReversedIndicators(statisticItem?.data, count), // 0 - lastValue, 1 - prevValue, 2 - nextValue
    count,
    {
      reduce  : item?.settings?.reduce,  // Убрать разряды: 12 500 700 => 12.5 млн
      noSpace : item?.settings?.noSpace, // Не добавлять пробел между разрядами
      fractionDigits,
      addZero,
    }
  ), [activeEntities, item]);


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
    else {
      if (isNotUndefined(value) && isNotUndefined(count)) {
        if (isNotUndefined(values[count - 1]?.value)) {
          value = values[count - 1]?.value;
        }
      }
    }

    return {
      reduction,
      value: item?.settings?.plusMinus
        ? String(value).replace('-', '').replace('.', ',') // Удаляем знак минус, если выбрано plusMinus, чтобы не дублировался тк будет выведен в ItemDigitIndicatorPlusMinus
        : String(value).replace('.', ','),
    }
  }, [activeEntities, lastValue, prevValue, values, item]);



  return (
    <ItemWrapper item={item} onSelect={onSelect}>
      
      {/* +/- */}
      <ItemDigitIndicatorPlusMinus
        item      = {item}
        increased = {increased}
        color     = {color}
      />
      
      {/* Число */}
      <ItemDigitIndicatorValue
        item  = {item}
        value = {calcedValue.value}
        color = {color}
      />

      {/* Сокращение - (тыс млн) | Ед изменения */}
      <ItemDigitIndicatorEnding
        item      = {item}
        reduction = {calcedValue.reduction || values[0]?.reduction}
        color     = {color}
      />
    </ItemWrapper>
  )
});
