import { FC, memo } from 'react';
import { FlagByScheme, SelectByField } from '../../../base-features-components';
import { ConfiguratorTextTitle, RowWrapper } from 'shared/ui/configurators-components';
import { arrLegendPosition } from 'entities/charts';
import { ViewItem } from 'entities/dashboard-view';



interface Props {
  selectedItem: ViewItem | undefined
}

/** Отображать легенду на графиках или нет */
export const ChartLegends: FC<Props> = memo(({ selectedItem }) => (
    <RowWrapper>
      <ConfiguratorTextTitle bold title='Chart label' toolTitle='Показать метки для графика' />
      <FlagByScheme
        scheme       = 'settings.chartOptions.plugins.legend.display'
        title        = 'Chart label'
        toolTitle    = 'Показать метки для графика'
        selectedItem = {selectedItem}
      />

      <ConfiguratorTextTitle bold title='Position' toolTitle='Расположение меток для графика' />
      <SelectByField
        scheme       = 'settings.chartOptions.plugins.legend.position'
        array        = {arrLegendPosition}
        selectedItem = {selectedItem}
      />
    </RowWrapper>
  ));
