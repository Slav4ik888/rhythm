import { FC, memo } from 'react';
import { CardItem, CardItemId } from 'entities/dashboard-view';
import { ItemWrapper } from '../wrapper-item';
import "chart.js/auto";
import { Chart } from "react-chartjs-2";
import { ChartConfigOptions } from 'entities/charts';



interface Props {
  item     : CardItem
  onSelect : (id: CardItemId) => void
}

/** Item chart */
export const ItemChart: FC<Props> = memo(({ item, onSelect }) => {
  const type = item.settings?.chartType || 'line';
  const data = {
    labels: [], // any[] // Dates (метки на оси X)
    datasets: [ // ChartConfigDatasets[]
      // ...datasets.map(item => ({
      //   label                : item.label,
      //   data                 : item.data,
      //   tension              : 0,
      //   pointRadius          : setValue(item.pointRadius, 5), // Толщика точки (круглешков)
      //   pointBorderColor     : 'transparent',
      //   pointBackgroundColor : setValue(item.pointBackgroundColor, 'rgba(255, 255, 255, .8)'),
      //   borderColor          : setValue(item.borderColor, 'rgba(255, 255, 255, .8)'),
      //   borderWidth          : setValue(item.borderWidth, 3), // Толщика линии
      //   backgroundColor      : setValue(item.backgroundColor, 'transparent'),
      //   fill                 : setValue(item.fill, true),
      //   maxBarThickness      : 6,
      // }))
    ],
  };

  const options: ChartConfigOptions = {};


  return (
    <ItemWrapper item={item} onSelect={onSelect}>
      <Chart
        type    = {type}
        data    = {data}
        options = {options} />
    </ItemWrapper>
  )
});
