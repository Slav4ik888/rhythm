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

import { useMemo, FC } from "react";

// react-chartjs-2 components
import "chart.js/auto";
import { Chart } from "react-chartjs-2";

// @mui material components
import Card from "@mui/material/Card";
import Divider from "@mui/material/Divider";
import Icon from "@mui/material/Icon";

// Material Dashboard 2 React components
import MDBox from "shared/ui/mui-design-components/md-box";
import MDTypography from "shared/ui/mui-design-components/md-typography";

// ReportsLineChart configurations
import { configs } from "./configs";
import { GradientColorName, GreyColor } from 'app/providers/theme';
import { ChartConfigDataSets } from 'entities/charts/model/types';



interface Props {
  bgColor?: GradientColorName | GreyColor
  title: string
  description: string | React.ReactNode
  date: string
  chart: {
    labels: any[],
    datasets: ChartConfigDataSets
  }
}


export const ReportsLineChart: FC<Props> = ({ bgColor = "dark", title, description = "", date, chart }) => {
  const { data, options } = configs(chart.labels || [], chart.datasets || {});

  return (
    <Card sx={{ height: "100%" }}>
      <MDBox padding="1rem">
        {useMemo(
          () => (
            <MDBox
              variant="gradient"
              bgColor={bgColor}
              borderRadius="lg"
              coloredShadow={bgColor}
              py={2}
              pr={0.5}
              mt={-5}
              height="12.5rem"
            >
              {/* @ts-ignore */}
              <Chart type="line" data={data} options={options} />
            </MDBox>
          ),
          [chart, bgColor]
        )}
        <MDBox pt={3} pb={1} px={1}>
          <MDTypography variant="h6" textTransform="capitalize">
            {title}
          </MDTypography>
          <MDTypography component="div" variant="button" color="text" fontWeight="light">
            {description}
          </MDTypography>
          <Divider />
          <MDBox display="flex" alignItems="center">
            <MDTypography variant="button" color="text" lineHeight={1} sx={{ mt: 0.15, mr: 0.5 }}>
              <Icon>schedule</Icon>
            </MDTypography>
            <MDTypography variant="button" color="text" fontWeight="light">
              {date}
            </MDTypography>
          </MDBox>
        </MDBox>
      </MDBox>
    </Card>
  );
}
