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
import "chart.js/auto";
import { Chart } from "react-chartjs-2";
import Divider from "@mui/material/Divider";
import Icon from "@mui/material/Icon";
import MDBox from "shared/ui/mui-design-components/md-box";
import MDTypography from "shared/ui/mui-design-components/md-typography";
import { configs } from "./configs";
import { GradientsBgColorName, GreyColor, pxToRem, useMaterialUIController } from 'app/providers/theme';
import { ChartConfigDataSets, ChartConfigOptions } from '../../types';
import AccessTimeIcon from '@mui/icons-material/AccessTime';


interface Props {
  bgColor?: GradientsBgColorName | GreyColor
  title: string
  description: string | ReactNode
  date: string
  chart: {
    labels   : any[],
    datasets : ChartConfigDataSets
    config?  : ChartConfigOptions
  }
  light?: boolean // Не понял для чего это, но в Navbar также
}


export const ReportsLineChart2: FC<Props> = ({ bgColor, title, description = "", light = false, date, chart }) => {
  const { data, options } = configs(chart.labels, chart.datasets, chart.config);
  const [controller] = useMaterialUIController();
  const { transparentNavbar, darkMode } = controller;
  
  // For Icon style
  // @ts-ignore
  const iconsStyle = ({ palette: { dark, white, text }, functions: { rgba } }) => ({
    width  : pxToRem(12),
    height : pxToRem(12),
    mt     : 0.15,
    mr     : 0.5,
    color  : () => {
      let colorValue = light || darkMode ? white.main : dark.main;

      if (transparentNavbar && !light) {
        colorValue = darkMode ? rgba(text.main, 0.6) : text.main;
      }

      return colorValue;
    },
  });


  return (
    <>
      <MDBox
        // variant="gradient"
        bgColor={bgColor}
        borderRadius="lg"
        coloredShadow={"secondary"}
        py={2}
        pr={0.5}
        mt={-5}
        height="13rem"
      >
        {/* @ts-ignore */}
        <Chart type="line" data={data} options={options} />
      </MDBox>

      <MDBox pt={3} pb={1} px={1}>
        <MDTypography variant="h6" textTransform="capitalize">
          {title}
        </MDTypography>
        <MDTypography component="div" variant="button" color="text" fontWeight="light">
          {description}
        </MDTypography>
        <Divider />
        <MDBox display="flex" alignItems="center">
          {/* @ts-ignore */}
          <AccessTimeIcon sx={iconsStyle} fontSize="small" />
          <MDTypography variant="button" color="text" fontWeight="light">
            {date}
          </MDTypography>
        </MDBox>
      </MDBox>
    </>
  );
}
