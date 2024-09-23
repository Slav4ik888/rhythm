import { FC, memo } from "react";
import { MDTypography } from 'shared/ui/mui-design-components';
import { ColorName } from 'app/providers/theme';
import { isUndefined } from 'shared/lib/validators';



interface Props {
  color: ColorName
  value: number | undefined // undefined если нет предыдущего значение, то результат не выводим
}


/** Цифровое значение итогового изменения */
export const GrowthChange: FC<Props> = memo(({ color, value }) => {
  
  if (isUndefined(value) || isNaN(value as number)) return null

  return (
    <MDTypography variant="h6" color={color} mr={0.1}>{value}</MDTypography>
  );
});
