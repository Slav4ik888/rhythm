import { fixPointRadius } from 'entities/charts';
import { checkInvertData, DashboardStatisticItem } from 'entities/dashboard-data';
import { ViewItem } from 'entities/dashboard-view';
import { setValue } from 'shared/lib/charts';



export const getData = (
  dates     : string[],
  itemsData : DashboardStatisticItem<number>[],
  item      : ViewItem
) => {
  
  return {
    labels   : dates, // any[] // Dates (метки на оси X)
    datasets : [      // ChartConfigDatasets[]
      ...itemsData.map((itemData, idx) => {
        const datasets = item?.settings?.charts?.[idx].datasets || {};

        return {
          label                : datasets.label,
          data                 : checkInvertData(item?.settings, itemData),
          tension              : 0,
          pointRadius          : setValue(datasets.pointRadius, fixPointRadius(dates)), // Толщика точки (круглешков)
          pointBorderColor     : 'transparent',
          pointBackgroundColor : setValue(datasets.pointBackgroundColor, 'rgb(1, 1, 1)'),
          borderColor          : setValue(datasets.borderColor, 'rgb(1, 1, 1)'),
          borderWidth          : setValue(datasets.borderWidth, 3), // Толщика линии
          backgroundColor      : setValue(datasets.backgroundColor, 'transparent'),
          fill                 : setValue(datasets.fill, true),
          maxBarThickness      : 6,
        }
    })],
  }
}
