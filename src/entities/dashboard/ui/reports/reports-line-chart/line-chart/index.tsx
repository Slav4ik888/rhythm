import { FC } from "react";
import "chart.js/auto";
import { Chart } from "react-chartjs-2";
import { MDBox } from "shared/ui/mui-design-components";
import { configs } from "./configs";
import { GradientColorName, GreyColor } from 'app/providers/theme';
import { ChartConfig } from '../../../../../charts/model/types';



interface Props {
  chart    : ChartConfig
  bgColor? : GradientColorName | GreyColor
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
      mt            = {1}
    >
      {/* @ts-ignore */}
      <Chart type="line" data={data} options={options} />
    </MDBox>
  );
}
