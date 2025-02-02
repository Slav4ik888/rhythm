import { FC, memo, useMemo } from 'react';
import { CardItem, CardItemId } from 'entities/dashboard-view';
import { ItemWrapper } from '../../wrapper-item';
import { DashboardStatisticItem, Increased, useDashboardData } from 'entities/dashboard-data';
import { getColorByIncreased, getComparisonValues, getIncreased, getReversedIndicators } from '../model/utils';
import { CustomTheme, useTheme } from 'app/providers/theme';
import { ItemDigitIndicatorValue } from './value';
import { ItemDigitIndicatorEnding } from './ending';
import { ItemDigitIndicatorPlusMinus } from './plus-minus';
import { getFixedFraction } from 'shared/helpers/numbers';
import { calcGrowthChange } from '../../growth-icon/model/utils';
import { isNotUndefined } from 'shared/lib/validators';



const useStyles = (theme: CustomTheme, item: CardItem, increased: Increased) => {
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
  item     : CardItem
  onSelect : (id: CardItemId) => void
}

/** Item digitIndicator */
export const ItemDigitIndicator: FC<Props> = memo(({ item, onSelect }) => {
  const { activeEntities } = useDashboardData();
  const increased = useMemo(() => getIncreased(item, activeEntities), [item, activeEntities]);
  const color = useStyles(useTheme(), item, increased);

  const statisticItem = useMemo(() => activeEntities[item.settings?.kod || ''] as DashboardStatisticItem<number>, [activeEntities, item]);
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
  const calcedValue = useMemo(() => {
    let value: any = '-';

    if (item?.settings?.endingDiffType === '% соотношение') {
      value = getFixedFraction(
        calcGrowthChange(lastValue, prevValue),
        { fractionDigits, addZero }
      );
    }
    else if (item?.settings?.endingDiffType === 'Разница') {
      value = getFixedFraction(lastValue - prevValue, { fractionDigits, addZero });
    }
    else {
      if (isNotUndefined(value) && isNotUndefined(count)) {
        if (isNotUndefined(values[count - 1]?.value)) {
          value = values[count - 1]?.value;
        }
      }
    }

    return String(value).replace('.',',');
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
        value = {calcedValue}
        color = {color}
      />

      {/* Сокращение - (тыс млн) | Ед изменения */}
      <ItemDigitIndicatorEnding
        item  = {item}
        reduction = {values[0]?.reduction}
        color = {color}
      />
    </ItemWrapper>
  )
});
