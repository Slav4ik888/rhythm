import { FC, memo } from 'react';
import { FlagByScheme, SelectByField } from '../../../base-features-components';
import { ConfiguratorTextTitle, RowWrapper } from 'shared/ui/configurators-components';
import { arrLegendPosition } from 'entities/charts';


/** Отображать легенду на графиках или нет */
export const ChartLegends: FC = memo(() => {
  return (
    <RowWrapper>
      <ConfiguratorTextTitle bold title='Chart label' toolTitle='Показать метки для графика' />
      <FlagByScheme
        scheme    = 'settings.chartOptions.plugins.legend.display'
        title     = 'Chart label'
        toolTitle = 'Показать метки для графика'     
      />

      <ConfiguratorTextTitle bold title='Position' toolTitle='Расположение меток для графика' />
      <SelectByField
        scheme    = 'settings.chartOptions.plugins.legend.position'
        array     = {arrLegendPosition}
      />
    </RowWrapper>
  )
});
