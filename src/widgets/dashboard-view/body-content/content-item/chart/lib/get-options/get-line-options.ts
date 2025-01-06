import { ChartConfigOptions } from 'entities/charts';
// @ts-ignore
import { InteractionMode } from 'node_modules/chart.js/dist/types/index.d.ts';
import { setValue } from 'shared/lib/charts';



export const getLineOptions = (options = {} as ChartConfigOptions): ChartConfigOptions => {
  const { scales } = options;

  return {
    responsive          : true,
    maintainAspectRatio : false,
    plugins: {
      legend: { // Легенда на графике
        display: false,
      },
    },
    interaction: {
      intersect : false,
      mode      : 'index' as InteractionMode,
    },
    scales: {
      y: {
        // Горизонтальные линии от оси Y
        grid: {
          display         : setValue(scales?.y?.grid?.display, true),
          drawBorder      : false,
          drawOnChartArea : true,
          drawTicks       : false, // Насечки на оси
          borderDash      : [5, 5],
          color           : setValue(scales?.y?.grid?.color, '#dadada'), // 'rgba(255, 255, 255, .2)'),
        },
        // Подпись оси
        ticks: {
          display : true,
          color   : setValue(scales?.y?.ticks?.color, 'rgba(0, 0, 0, .8)'), // '#f8f9fa'),
          padding : 10,
          font    : {
            size       : setValue(scales?.y?.ticks?.font?.size, 10),
            weight     : 300,
            family     : 'Roboto', // Arial
            style      : 'normal',
            lineHeight : 2,
          },
        },
        // Добавление  мин / макс значения оси Y
        suggestedMin: setValue(scales?.y?.suggestedMin, undefined),
        suggestedMax: setValue(scales?.y?.suggestedMax, undefined),
      },
      x: {
        // Вертикальные линии от оси X
        grid: {
          display         : setValue(scales?.x?.grid?.display, true),
          drawBorder      : true,
          drawOnChartArea : false,
          drawTicks       : false, // Насечки на оси
          borderDash      : [5, 5],
          color           : setValue(scales?.x?.grid?.color, '#dadada'), // 'rgba(255, 255, 255, .2)'),
        },
        // Подпись оси
        ticks: {
          display : true,
          color   : setValue(scales?.x?.ticks?.color, 'rgba(0, 0, 0, .8)'), // '#f8f9fa'),
          padding : 10,
          font    : {
            size       : setValue(scales?.x?.ticks?.font?.size, 10),
            weight     : 300,
            family     : 'Roboto',
            style      : 'normal',
            lineHeight : 2,
          },
        },
      },
    },
  }
}
