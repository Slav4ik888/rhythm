import { setValue } from 'shared/lib/charts';
import { ChartConfig, ChartConfigDataSets, ChartConfigOptions } from '../../../../../charts/model/types';


/** Doughnut config */
export function config(chartConfig: ChartConfig) {
  const {
    labels   = [] as string[],
    datasets = {} as ChartConfigDataSets,
    config   = {} as ChartConfigOptions
  } = chartConfig
  // const { scales } = config;
  
  return {
    data: {
      labels,
      datasets: [
        {
          label           : datasets.label,
          data            : datasets.data,
          backgroundColor : setValue(datasets.backgroundColor, [
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
            'rgb(255, 205, 86)',
          ]),
        },
      ],
    },
    options: {
    //   responsive          : true,
    //   maintainAspectRatio : false,
    //   plugins: {
    //     legend: { // Легенда на графике
    //       display: false,
    //     },
    //   },
    //   interaction: {
    //     intersect : false,
    //     mode      : "index",
    //   },
    //   scales: {
    //     y: {
    //       // Горизонтальные линии от оси Y
    //       grid: {
    //         display         : isConfig(scales?.y?.grid?.display, true),
    //         drawBorder      : false,
    //         drawOnChartArea : true,
    //         drawTicks       : false, // Насечки на оси
    //         borderDash      : [5, 5],
    //         color           : isConfig(scales?.y?.grid?.color, "#dadada"), // "rgba(255, 255, 255, .2)"),
    //       },
    //       // Подпись оси
    //       ticks: {
    //         display : true,
    //         color   : isConfig(scales?.y?.ticks?.color, "rgba(0, 0, 0, .8)"), // "#f8f9fa"),
    //         padding : 10,
    //         font    : {
    //           size       : isConfig(scales?.y?.ticks?.font?.size, 10),
    //           weight     : 300,
    //           family     : "Arial", // "Roboto",
    //           style      : "normal",
    //           lineHeight : 2,
    //         },
    //       },
    //       // Добавление  мин / макс значения оси Y
    //       suggestedMin: isConfig(scales?.y?.suggestedMin, null),
    //       suggestedMax: isConfig(scales?.y?.suggestedMax, null),
    //     },
    //     x: {
    //       // Вертикальные линии от оси X
    //       grid: {
    //         display         : isConfig(scales?.x?.grid?.display, true),
    //         drawBorder      : true,
    //         drawOnChartArea : false,
    //         drawTicks       : false, // Насечки на оси
    //         borderDash      : [5, 5],
    //         color           : isConfig(scales?.x?.grid?.color, "#dadada"), // "rgba(255, 255, 255, .2)"),
    //       },
    //       // Подпись оси
    //       ticks: {
    //         display : true,
    //         color   : isConfig(scales?.x?.ticks?.color, "rgba(0, 0, 0, .8)"), // "#f8f9fa"),
    //         padding : 10,
    //         font    : {
    //           size       : isConfig(scales?.x?.ticks?.font?.size, 10),
    //           weight     : 300,
    //           family     : "Arial", // "Roboto",
    //           style      : "normal",
    //           lineHeight : 2,
    //         },
    //       },
    //     },
    //   },
    },
  };
}
