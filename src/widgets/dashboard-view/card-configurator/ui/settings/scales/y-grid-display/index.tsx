import { FC, memo } from 'react';
import { ChartFlagByScheme } from '../../flag-by-scheme';



/** Показать/скрыть ось Y */
export const ChartYGridDisplay: FC = memo(() => {
  // scales: {
  //     y: {
  //       // Горизонтальные линии от оси Y
  //       grid: {
  //         display: setValue(scales?.y?.grid?.display, true),

  return (
    <ChartFlagByScheme
      scheme    = 'settings.chartOptions.scales.y.grid.display'
      title     = 'Y.grid.display'
      toolTitle = 'Показать/скрыть ось Y'     
    />
  )
});
