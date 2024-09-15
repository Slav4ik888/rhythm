import { FC } from "react";
import "chart.js/auto";
import { Chart } from "react-chartjs-2";
import { MDBox } from "shared/ui/mui-design-components";
import { configs } from "./configs";
import { GradientsBgColorName, GreyColor } from 'app/providers/theme';
import { ChartConfig } from '../../../../../../entities/charts/model/types';



interface Props {
  chart    : ChartConfig
  bgColor? : GradientsBgColorName | GreyColor
}


export const LineChartContainer: FC<Props> = ({ bgColor, chart }) => {
  const { data, options } = configs(chart.labels, chart.datasets, chart.config);


  return (
    <MDBox
      // variant="gradient"
      bgColor       = {bgColor}
      borderRadius  = "lg"
      coloredShadow = {"secondary"}
      height        = "20rem"
      py            = {2}
      pr            = {0.5}
      mt            = {-5}
    >
      {/* @ts-ignore */}
      <Chart type="line" data={data} options={options} />
    </MDBox>
  );
}
