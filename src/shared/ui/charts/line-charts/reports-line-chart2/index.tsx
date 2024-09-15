/**
=========================================================
* Material Dashboard 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

import { FC, ReactNode } from "react";
import Divider from "@mui/material/Divider";
import { MDBox, MDTypography } from "shared/ui/mui-design-components";
import { GradientsBgColorName, GreyColor } from 'app/providers/theme';
import { ChartConfig } from '../../../../../entities/charts/model/types';
import { DashboardStatisticItem, StatisticTypeChip } from 'entities/dashboard';
import { TimeUpdated } from './time-updated';
import { LineChartContainer } from './line-chart';



interface Props {
  bgColor?    : GradientsBgColorName | GreyColor
  item        : DashboardStatisticItem
  description : string | ReactNode
  date        : string
  chart       : ChartConfig
  light?      : boolean // Не понял для чего это, но в Navbar также
}


export const ReportsLineChart2: FC<Props> = ({ bgColor, item, description = "", light = false, date, chart }) => {
  const { title, statisticType } = item;


  return (
    <>
      <LineChartContainer bgColor={bgColor} chart={chart} />
      
      <MDBox pt={3} pb={1} px={1}>
        <StatisticTypeChip type={statisticType} />
        <MDTypography variant="h6" textTransform="none">
          {title}
        </MDTypography>
        <MDTypography component="div" variant="button" color="text" fontWeight="light">
          {description}
        </MDTypography>
        <Divider />
        <TimeUpdated date={date} light={light} />
      </MDBox>
    </>
  );
}
