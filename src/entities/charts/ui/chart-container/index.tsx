import { FC, ReactNode } from "react";
import { MDBox } from "shared/ui/mui-design-components";
import { GradientColorName, GreyColor } from 'app/providers/theme';



interface Props {
  bgColor? : GradientColorName | GreyColor
  children : ReactNode
}


/** Контейнер для задания размеров и фона для графика */
export const ChartContainer: FC<Props> = ({ bgColor, children }) => (
  <MDBox
    // variant="gradient"
    bgColor       = {bgColor}
    borderRadius  = 'lg'
    coloredShadow = 'secondary'
    height        = '20rem'
    py            = {2}
    pr            = {0.5}
    mt            = {1}
  >
    {
      children
    }
  </MDBox>
);
