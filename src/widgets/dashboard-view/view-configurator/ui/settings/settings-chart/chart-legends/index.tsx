import { FC, memo } from 'react';
import { RowFlagByScheme } from '../../../base-features-components/row-flag-by-scheme';



/** Отображать легенду на графиках или нет */
export const ChartLegends: FC = memo(() => {
  return (
    <RowFlagByScheme
      scheme    = 'settings.chartOptions.plugins.legend.display'
      title     = 'Chart label'
      toolTitle = 'Выберите метку для графика'     
    />
  )
});
