import { FC, memo, useMemo } from 'react';
import { CardItem, CardItemId } from 'entities/dashboard-view';
import { ItemWrapper } from '../../wrapper-item';
import { DashboardStatisticItem, Increased, useDashboardData } from 'entities/dashboard-data';
import { getColorByIncreased, getComparisonValues, getIncreased, getReversedIndicators } from '../model/utils';
import { Typography } from '@mui/material';
import { pxToRem } from 'shared/styles';
import { CustomTheme, useTheme } from 'app/providers/theme';
import { ItemDigitIndicatorValue } from './value';
import { ItemDigitIndicatorEnding } from './ending';
import { ItemDigitIndicatorPlusMinus } from './plus-minus';
import { getFixedFraction } from 'shared/helpers/numbers';
import { calcGrowthChange } from '../../growth-icon/model/utils';



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
  const [lastValue, prevValue] = getReversedIndicators(statisticItem?.data, 2);

  const fractionDigits = item?.settings?.fractionDigits; // Количество знаков после запятой
  const addZero        = item?.settings?.addZero;        // Добавлять ли нули после запятой, чтобы выровнить до нужного кол-ва знаков
  
  // Числа для сравнений последнее или предпоследнее или предпредпоследнее (по указанному индексу с конца)
  const count = 2;
  const values = useMemo(() => getComparisonValues(
    getReversedIndicators(statisticItem?.data, count), // 0 - lastValue, 1 - prevValue, 2 - nextValue
    count,
    {
      reduce         : item?.settings?.reduce,         // Убрать разряды: 12 500 700 => 12.5 млн
      fractionDigits,
      addZero,
      noSpace        : item?.settings?.noSpace,        // Не добавлять пробел между разрядами
    }
  ), [activeEntities, item]);

  const calcedValue = useMemo(() => {
    let value = '';

    if (item?.settings?.endingDiffType === '% соотношение') {
      console.log(1);
      value = getFixedFraction(
        calcGrowthChange(lastValue, prevValue),
        { fractionDigits, addZero }
      );
    }
    else if (item?.settings?.endingDiffType === 'Разница') {
      console.log(2);
      value = getFixedFraction(lastValue - prevValue, { fractionDigits, addZero });
    }
    else {
      console.log(3);
      value = String(lastValue);
    }

    return value;
  }, [activeEntities, lastValue, prevValue, item]);


  console.log('lastValue: ', lastValue, 'prevValue: ', prevValue);
  console.log('calcedValue: ', item?.settings?.endingDiffType, calcedValue);


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
        value = {String(calcedValue).replace('.',',')}
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
