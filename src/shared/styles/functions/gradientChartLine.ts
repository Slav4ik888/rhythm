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

import { rgbaFromHex } from './rgba-from-hex';

/**
  The gradientChartLine() function helps you to create a gradient color for the chart line
 */

// Material Dashboard 2 React helper functions


// TODO: types
export function gradientChartLine(chart: { getContext: (arg0: string) => any; }, color: any, opacity = 0.2) {
  const ctx = chart.getContext('2d');
  const gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);
  const primaryColor = rgbaFromHex(color, opacity).toString();

  gradientStroke.addColorStop(1, primaryColor);
  gradientStroke.addColorStop(0.2, 'rgba(72, 72, 176, 0.0)');
  gradientStroke.addColorStop(0, 'rgba(203, 12, 159, 0)');

  return gradientStroke;
}
