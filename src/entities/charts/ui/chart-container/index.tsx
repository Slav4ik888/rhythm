import { FC, ReactNode } from "react";
import { MDBox } from "shared/ui/mui-design-components";
import { GradientColorName, GreyColor, RadiusName, Shadows, SxCard } from 'app/providers/theme';



interface Props {
  variant?       : 'contained' | 'gradient'
  bgColor?       : GradientColorName | GreyColor
  borderRadius?  : RadiusName
  shadow?        : Shadows
  coloredShadow? : string
  width?         : string
  height?        : string
  sx?            : SxCard
  children       : ReactNode
}


/** Контейнер для задания размеров и фона для графика */
export const ChartContainer: FC<Props> = ({ sx, children, ...rest }) => (
  <MDBox
    {...rest}
    sx={sx?.root}
  >
    {
      children
    }
  </MDBox>
);
