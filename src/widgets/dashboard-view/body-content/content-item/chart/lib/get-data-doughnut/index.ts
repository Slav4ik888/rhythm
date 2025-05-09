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
  labels    : string[],
  itemsData : DashboardStatisticItem<number>[],
  item      : ViewItem
): ChartConfig => {
  console.log("🚀 ~ itemsData:", itemsData);
  console.log("🚀 ~ item:", item);
  
  const config = {
    labels, // ['Red', 'Blue', 'Yellow']
    datasets: [
      {
        label: '',
        data: [...itemsData.map((itemData, idx) => {
          // последние значения соответствующие концу выбранного промежутка
          return itemData?.data[itemData?.data.length - 1] || 0
        })],
        backgroundColor: getBackgroundColors(item),
        hoverOffset: 4
      },
    ],
  };

  return config
}
