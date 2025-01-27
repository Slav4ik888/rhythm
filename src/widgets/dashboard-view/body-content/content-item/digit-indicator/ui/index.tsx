import { FC, memo, useMemo } from 'react';
import { CardItem, CardItemId } from 'entities/dashboard-view';
import { ItemWrapper } from '../../wrapper-item';
import { DashboardStatisticItem, useDashboardData } from 'entities/dashboard-data';
import { getComparisonValues, getReversedIndicators } from '../model/utils';
import { Typography } from '@mui/material';
import { pxToRem } from 'shared/styles';
import { CustomTheme, useTheme } from 'app/providers/theme';
import { ItemDigitIndicatorValue } from './value';



const useStyles = (theme: CustomTheme) => ({
  prefix: {

  },
});




interface Props {
  item     : CardItem
  onSelect : (id: CardItemId) => void
}

/** Item digitIndicator */
export const ItemDigitIndicator: FC<Props> = memo(({ item, onSelect }) => {
  const sx = useStyles(useTheme());
  const { activeEntities } = useDashboardData();

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

  // +- или не нужно
  // Цвет - рост/падение | просто цвет
  //  - рост/падение - нужно 2 значения для вычисления цвета маркера
  //  - просто цвет
  // Да/Нет - Разделитель разрядов (пробелом)
  // Ед. изменения
  //  - размер (такой же как цифры или другой)
  //  - % | шт | (трил млрд млн тыс)


  return (
    <ItemWrapper item={item} onSelect={onSelect}>
      {/* +- или не нужно */}

      {/* Число */}
      <ItemDigitIndicatorValue item={item} value={values[0]?.value} />

      {/* Ед изменения */}
      <Typography sx={sx.prefix}>
        {
          values[0] && values[0].prefix
        }
      </Typography>
    </ItemWrapper>
  )
});
