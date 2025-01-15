import { FC, memo } from 'react';
import { ChartFlagByScheme } from '../flag-by-scheme';



/** Отображать легенду на графиках или нет */
export const ChartLegends: FC = memo(() => {
  return (
    <ChartFlagByScheme
      scheme    = 'settings.chartOptions.plugins.legend.display'
      title     = 'Chart label'
      toolTitle = 'Выберите метку для графика'     
    />
  )
});
