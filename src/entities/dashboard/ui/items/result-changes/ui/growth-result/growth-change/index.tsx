import { FC, memo } from 'react';
import { MDTypography } from 'shared/ui/mui-design-components';
import { ColorName } from 'app/providers/theme';
import { Increased, SxSmallContainer } from 'entities/dashboard';



const useStyles = (sx?: SxSmallContainer) => ({
  fontSize   : `${sx?.growthResult?.growthChange?.size || 1}rem`,
  lineHeight : 1.2,
  mr         : 0.1,
  ...sx?.growthResult?.growthChange
});


interface Props {
  increased : Increased
  color     : ColorName
  value     : string // '' если нет предыдущего значение, то результат не выводим
  sx?       : SxSmallContainer
}


/** Цифровое значение итогового изменения */
export const GrowthChange: FC<Props> = memo(({ color, value, increased, sx: style }) => {
  const sx = useStyles(style);
  
  if (! value) return null


  // если значения отрицательные то падение статистики будет без '-' и надо его добавить
  const char = increased === 1 ? '+' : increased === -1 ? '-' : '';
  const resultValue = char + value.replace(/\-/g, ''); // Удалим изначальный знак '-'

  return (
    <MDTypography
      color = {color}
      sx    = {sx}
    >
      {resultValue}
    </MDTypography>
  );
});
