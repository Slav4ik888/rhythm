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

import { FC, memo, ReactNode } from "react";
import Divider from "@mui/material/Divider";
import { MDBox, MDTypography } from "shared/ui/mui-design-components";
import { GradientsBgColorName, GreyColor } from 'app/providers/theme';
import { ChartConfig } from '../../../../../entities/charts/model/types';
import {
  DashboardStatisticItem, StatisticTypeChip, ProductTypeChip, DashboardConditionType,
  ConditionTypeChip, ResultChanges, ResultChangesConfig
 } from 'entities/dashboard';
import { TimeUpdated } from './time-updated';
import { LineChartContainer } from './line-chart';



interface ReportsLineChartConfig {
  resultChanges?: ResultChangesConfig
}


interface Props {
  bgColor?    : GradientsBgColorName | GreyColor
  item        : DashboardStatisticItem
  description : string | ReactNode
  date        : string
  chart       : ChartConfig
  condition?  : DashboardConditionType
  light?      : boolean // Не понял для чего это, но в Navbar также
  inverted?   : boolean // Если график перевёрнутый, то есть если задолженность уменьшается то это рост
  config?     : ReportsLineChartConfig
}


export const ReportsLineChart2: FC<Props> = memo(({ bgColor, item, description = "", inverted, light = false, condition, date, chart }) => {
  const { title, statisticType } = item;


  return (
    <>
      <LineChartContainer bgColor={bgColor} chart={chart} />
      
      <MDBox pt={3} pb={1} px={1}>
        <MDBox sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}>
          <MDBox display="flex" flexDirection="column">
            <StatisticTypeChip type={statisticType} />
            <ProductTypeChip   type={item.productType} />
            <ConditionTypeChip type={condition} />
          </MDBox>
          <ResultChanges item={item} config={{ inverted }} />
        </MDBox>

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
});
