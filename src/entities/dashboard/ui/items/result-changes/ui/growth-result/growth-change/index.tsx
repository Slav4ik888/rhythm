import { FC, memo } from "react";
import { MDTypography } from 'shared/ui/mui-design-components';
import { ColorName } from 'app/providers/theme';
import { Increased } from 'entities/dashboard';



interface Props {
  increased : Increased
  color     : ColorName
  value     : string // '' если нет предыдущего значение, то результат не выводим
}


/** Цифровое значение итогового изменения */
export const GrowthChange: FC<Props> = memo(({ color, value, increased }) => {
  
  if (! value) return null

  const char = increased === 1 ? "+" : increased === -1 ? "-" : "";
  const resultValue = char + value;

  return (
    <MDTypography variant="h6" color={color} mr={0.1}>{resultValue}</MDTypography>
  );
});
