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

import { FC, memo } from "react";
import { MDBox, MDTypography } from "shared/ui/mui-design-components";
import { GradientsBgColorName, GreyColor } from 'app/providers/theme';
import { ChartConfig } from '../../../../charts/model/types';
import { DashboardStatisticItem, ResultChanges } from 'entities/dashboard';
// import { TimeUpdated } from './time-updated';
import { LineChartContainer } from './line-chart';
import { ReportsLineChartConfig } from './config-type';
import { ChipsContainer } from '../../items/chips-container';
import { DashboardConditionType } from 'entities/condition-type';



interface Props {
  bgColor?   : GradientsBgColorName | GreyColor
  item       : DashboardStatisticItem
  // description : string | ReactNode
  // date        : string
  chart      : ChartConfig
  condition? : DashboardConditionType
  // light?      : boolean // Не понял для чего это, но в Navbar также  | light = false
  config     : ReportsLineChartConfig
}


export const ReportsLineChart: FC<Props> = memo(({ bgColor = "grey-200", item, config, condition, chart }) => {

  return (
    <MDBox pb={1} px={1}>
      <MDTypography variant="h6" textTransform="none" mb={2}>
        {item?.title}
      </MDTypography>
    
      <MDBox sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}>
        <ChipsContainer item={item} config={config} condition={condition} />
        <ResultChanges item={item} config={config} />
      </MDBox>
      
      {/* <MDTypography component="div" variant="button" color="text" fontWeight="light">
        {description}
      </MDTypography> */}

      <LineChartContainer bgColor={bgColor} chart={chart} />

      {/* <Divider />
      <TimeUpdated date={date} light={light} /> */}
    </MDBox>
  );
});
