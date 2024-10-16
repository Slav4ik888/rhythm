import { FC, memo } from "react";
import { MDTypography } from 'shared/ui/mui-design-components';
import { ColorName } from 'app/providers/theme';



interface Props {
  color : ColorName
  value : string // '' если нет предыдущего значение, то результат не выводим
}


/** Единица измерения для итогового изменения: в процентах | шт | ... */
export const MeasurementIcon: FC<Props> = memo(({ color, value }) => {
  // TODO: когда будут выводится значения в штуках, нужно выводить полученную разницу, а если % то оставить это условие
  if (! value) return null;

  return (
    <MDTypography variant="h6" color={color} mr={1}>%</MDTypography>
  );
});
