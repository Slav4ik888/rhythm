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
import { DashboardStatisticItem, StatisticTypeChip, ProductTypeChip, DashboardConditionType, ConditionTypeChip,
  ResultChanges } from 'entities/dashboard';
import { TimeUpdated } from './time-updated';
import { LineChartContainer } from './line-chart';
import { ReportsLineChartConfig } from './config-type';



interface Props {
  bgColor?    : GradientsBgColorName | GreyColor
  item        : DashboardStatisticItem
  description : string | ReactNode
  date        : string
  chart       : ChartConfig
  condition?  : DashboardConditionType
  light?      : boolean // Не понял для чего это, но в Navbar также
  config?     : ReportsLineChartConfig
}


export const ReportsLineChart3: FC<Props> = memo(({ bgColor, item, description = "", config, light = false, condition, date, chart }) => {
  const { title, statisticType } = item;


  return (
    <>
      <MDBox pb={1} px={1}>
        <MDTypography variant="h6" textTransform="none" mb={2}>
          {title}
        </MDTypography>
      
        <MDBox sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}>
          <MDBox display="flex" flexDirection="column">
            <StatisticTypeChip type={statisticType} />
            <ProductTypeChip   type={item.productType} />
            <ConditionTypeChip type={condition} />
          </MDBox>
          <ResultChanges item={item} config={config} />
        </MDBox>
        
        <MDTypography component="div" variant="button" color="text" fontWeight="light">
          {description}
        </MDTypography>

        <LineChartContainer bgColor={bgColor} chart={chart} />

        <Divider />
        <TimeUpdated date={date} light={light} />
      </MDBox>
    </>
  );
});
