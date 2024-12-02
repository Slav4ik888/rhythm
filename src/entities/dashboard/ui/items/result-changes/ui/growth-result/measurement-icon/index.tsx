import { FC, memo } from "react";
import { MDTypography } from 'shared/ui/mui-design-components';
import { ColorName } from 'app/providers/theme';
import { SxSmallContainer } from 'entities/dashboard';



const useStyles = (sx?: SxSmallContainer) => ({
  fontSize : `${sx?.growthResult?.measurementIcon?.size || 1}rem`,
  mr       : 1,
  ...sx?.growthResult?.measurementIcon
});


interface Props {
  color : ColorName
  value : string // '' если нет предыдущего значение, то результат не выводим
  sx?   : SxSmallContainer
}


/** Единица измерения для итогового изменения: в процентах | шт | ... */
export const MeasurementIcon: FC<Props> = memo(({ color, value, sx: style }) => {
  const sx = useStyles(style);

  // TODO: когда будут выводится значения в штуках, нужно выводить полученную разницу, а если % то оставить это условие
  if (! value) return null;

  return (
    <MDTypography
      color = {color}
      sx    = {sx}
    >
      %
    </MDTypography>
  );
});
