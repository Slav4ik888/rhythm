import { ChartConfig, ChartConfigDatasets, fixPointRadius } from 'entities/charts';
import { checkInvertData, DashboardStatisticItem } from 'entities/dashboard-data';
import { ViewItem } from 'entities/dashboard-view';
import { setIfNotUndefined } from 'shared/helpers/objects';
import { setValue } from 'shared/lib/charts';



export const getData = (
  dates     : string[],
  itemsData : DashboardStatisticItem<number>[],
  item      : ViewItem
): ChartConfig => {
  
  return {
    labels   : dates, // any[] // Dates (метки на оси X)
    datasets : [      // ChartConfigDatasets[]
      ...itemsData.map((itemData, idx) => {
        const datasets = item?.settings?.charts?.[idx].datasets || {} as ChartConfigDatasets;

        const result: ChartConfigDatasets = {
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
        };

        setIfNotUndefined(result, 'label', datasets.label);
        
        return result
        // {
        //   label                : datasets.label,
        //   tension              : 0,
        //   pointRadius          : setValue(datasets.pointRadius, fixPointRadius(dates)), // Толщика точки (круглешков)
        //   pointBorderColor     : 'transparent',
        //   pointBackgroundColor : setValue(datasets.pointBackgroundColor, 'rgb(1, 1, 1)'),
        //   borderColor          : setValue(datasets.borderColor, 'rgb(1, 1, 1)'),
        //   borderWidth          : setValue(datasets.borderWidth, 3), // Толщика линии
        //   backgroundColor      : setValue(datasets.backgroundColor, 'transparent'),
        //   fill                 : setValue(datasets.fill, true),
        //   maxBarThickness      : 6,
        // }
    })],
  }
}
