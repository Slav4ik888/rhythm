import { FC } from "react";
import "chart.js/auto";
import { Chart } from "react-chartjs-2";
import { MDBox } from "shared/ui/mui-design-components";
import { GradientColorName, GreyColor } from 'app/providers/theme';
import { ChartConfig } from '../../../../charts/model/types';
import { config } from './config';



interface Props {
  chart    : ChartConfig
  bgColor? : GradientColorName | GreyColor
}


export const DoughnutChartContainer: FC<Props> = ({ bgColor, chart }) => {
  const { data, options } = config(chart);


  return (
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
      {/* @ts-ignore */}
      <Chart type='doughnut' data={data} options={options} />
    </MDBox>
  );
}
