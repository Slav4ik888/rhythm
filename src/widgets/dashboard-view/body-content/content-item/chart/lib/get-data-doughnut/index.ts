import { ChartConfig, ChartConfigDatasets, fixPointRadius } from 'entities/charts';
import { checkInvertData, DashboardStatisticItem } from 'entities/dashboard-data';
import { ViewItem } from 'entities/dashboard-view';
import { setValue } from 'shared/lib/charts';
import { isArr, isStr } from 'shared/lib/validators';
import { calcTrend2 } from '../calc-trend-2';
import { getBackgroundColors } from './utils';




/**
 * Наполняет datasets всеми необходимыми даннными для Doughnut
 */
export const getDataDoughnut = (
  itemsData : DashboardStatisticItem<number>[],
  viewItem  : ViewItem
): ChartConfig => {
  
  const config: ChartConfig = {
    labels: viewItem?.settings?.charts?.map((item) => { // ['Red', 'Blue', 'Yellow']
      return item?.datasets?.label || ''
    }) || [''],

    datasets: [
      {
        label: '', // Chart name is added to each value by hover
        data: [...itemsData.map((itemData, idx) => {
          // последние значения соответствующие концу выбранного промежутка
          return itemData?.data[itemData?.data.length - 1] || 0
        })],
        backgroundColor: getBackgroundColors(viewItem),
        hoverOffset: 4
      },
    ],
  };

  if (viewItem?.settings?.charts?.[0]?.datasets?.cutout) {
    
    config.datasets[0].cutout = viewItem.settings.charts[0].datasets.cutout
  }

  return config
}
