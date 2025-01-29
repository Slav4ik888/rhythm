import { FC, memo, useMemo } from 'react';
import { CardItem, CardItemId } from 'entities/dashboard-view';
import { ItemWrapper } from '../../wrapper-item';
import { DashboardStatisticItem, Increased, useDashboardData } from 'entities/dashboard-data';
import { getColorByIncreased, getComparisonValues, getIncreased, getReversedIndicators } from '../model/utils';
import { Typography } from '@mui/material';
import { pxToRem } from 'shared/styles';
import { CustomTheme, useTheme } from 'app/providers/theme';
import { ItemDigitIndicatorValue } from './value';
import { ItemDigitIndicatorPrefix } from './prefix';
import { ItemDigitIndicatorPlusMinus } from './plus-minus';



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
  // Числа для сравнений последнее или предпоследнее или предпредпоследнее (по указанному индексу с конца)
  const count = 2;
  const values = useMemo(() => getComparisonValues(
    getReversedIndicators(statisticItem?.data, count), // 0 - lastValue, 1 - prevValue, 2 - nextValue
    count,
    {
      reduce         : item?.settings?.reduce,         // Убрать разряды: 12 500 700 => 12.5 млн
      fractionDigits : item?.settings?.fractionDigits, // Количество знаков после запятой
      addZero        : item?.settings?.addZero,        // Добавлять ли нули после запятой, чтобы выровнить до нужного кол-ва знаков
    }
  ), [activeEntities, item]);

  
  // Да/Нет - Разделитель разрядов (пробелом)
  // Ед. изменения
  //  - размер (такой же как цифры или другой)
  //  - % | шт | (трил млрд млн тыс)

  

  return (
    <ItemWrapper item={item} onSelect={onSelect}>
      
      <ItemDigitIndicatorPlusMinus
        item      = {item}
        increased = {increased}
        color     = {color}
      />
      
      {/* Число */}
      <ItemDigitIndicatorValue
        item  = {item}
        value = {values[0]?.value}
        color = {color}
      />

      {/* Ед изменения */}
      <ItemDigitIndicatorPrefix
        item  = {item}
        value = {values[0]?.prefix}
        color = {color}
      />
    </ItemWrapper>
  )
});
