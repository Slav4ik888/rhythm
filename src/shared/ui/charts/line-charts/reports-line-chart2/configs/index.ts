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

import { isNotUndefined } from 'shared/lib/validators';
import { ChartConfigDataSets, ChartConfigOptions } from '../../../types';



function isConfig<T>(config: T, defaultValue: T) {
  return isNotUndefined(config) ? config : defaultValue;
}



export function configs(
  labels   : any[] = [],
  datasets : ChartConfigDataSets = {},
  config   : ChartConfigOptions = {}
) {
  const { scales } = config;
  
  return {
    data: {
      labels,
      datasets: [
        {
          label                : datasets.label,
          tension              : 0,
          pointRadius          : isConfig(datasets.pointRadius, 5), // Толщика точки (круглешков)
          pointBorderColor     : "transparent",
          pointBackgroundColor : isConfig(datasets.pointBackgroundColor, "rgba(255, 255, 255, .8)"),
          borderColor          : isConfig(datasets.borderColor, "rgba(255, 255, 255, .8)"),
          borderWidth          : isConfig(datasets.borderWidth, 4), // Толщика линии
          backgroundColor      : isConfig(datasets.backgroundColor, "transparent"),
          fill                 : isConfig(datasets.fill, true),
          data                 : datasets.data,
          maxBarThickness      : 6,
        },
      ],
    },
    options: {
      responsive          : true,
      maintainAspectRatio : false,
      plugins: {
        legend: { // Легенда на графике
          display: false,
        },
      },
      interaction: {
        intersect : false,
        mode      : "index",
      },
      scales: {
        y: {
          // Горизонтальные линии от оси Y
          grid: {
            display         : true,
            drawBorder      : false,
            drawOnChartArea : true,
            drawTicks       : false, // Насечки на оси
            borderDash      : [5, 5],
            color           : isConfig(scales?.y?.grid?.color, "rgba(255, 255, 255, .2)"),
          },
          // Подпись оси
          ticks: {
            display : true,
            color   : isConfig(scales?.y?.ticks?.color, "#f8f9fa"),
            padding : 10,
            font    : {
              size       : isConfig(scales?.y?.ticks?.font?.size, 14),
              weight     : 300,
              family     : "Roboto",
              style      : "normal",
              lineHeight : 2,
            },
          },
        },
        x: {
          // Вертикальные линии от оси X
          grid: {
            display         : isConfig(scales?.x?.grid?.display, true),
            drawBorder      : true,
            drawOnChartArea : false,
            drawTicks       : false, // Насечки на оси
            borderDash      : [5, 5],
            color           : isConfig(scales?.x?.grid?.color, "rgba(255, 255, 255, .2)"),
          },
          // Подпись оси
          ticks: {
            display : true,
            color   : isConfig(scales?.x?.ticks?.color, "#f8f9fa"),
            padding : 10,
            font    : {
              size       : isConfig(scales?.x?.ticks?.font?.size, 14),
              weight     : 300,
              family     : "Roboto",
              style      : "normal",
              lineHeight : 2,
            },
          },
        },
      },
    },
  };
}
