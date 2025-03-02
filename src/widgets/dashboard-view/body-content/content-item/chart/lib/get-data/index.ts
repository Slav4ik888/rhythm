import { ChartConfig, ChartConfigDatasets, fixPointRadius } from 'entities/charts';
import { checkInvertData, DashboardStatisticItem } from 'entities/dashboard-data';
import { ViewItem } from 'entities/dashboard-view';
import { setIfNotUndefined } from 'shared/helpers/objects';
import { setValue } from 'shared/lib/charts';
import { calcTrend } from '../calc-trend';



/**
 * Наполняет данные для оси Y (даты)
 * и наполняет datasets всеми вложенными в item графиками
 */
export const getData = (
  dates     : string[],
  itemsData : DashboardStatisticItem<number>[],
  item      : ViewItem
): ChartConfig => {
  
  const config = {
    labels   : dates, // any[] // Dates (метки на оси X)
    datasets : [      // ChartConfigDatasets[]
      ...itemsData.map((itemData, idx) => {
        const datasets = item?.settings?.charts?.[idx].datasets || {} as ChartConfigDatasets;

        const result: ChartConfigDatasets = {
          label                : setValue(datasets.label, `График ${idx + 1}`),
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
          order                : setValue(datasets.order, idx + 1)
        };

        // setIfNotUndefined(result, 'label', datasets.label);
        
        return result
    })],
  };


  item?.settings?.charts?.forEach((chart, idx) => {
    // Если активирована линия тренда, рассчитываем данные тренда и добавляем как график
    if (chart.isTrend) {
      const trendData = calcTrend(dates, config.datasets?.[0]?.data);

      config.datasets.push({
        label           : 'Тренд',
        data            : trendData,
        borderColor     : 'rgba(255, 99, 132, 0.2)',
        backgroundColor : 'rgba(255, 99, 132, 0.2)',
        borderWidth     : 3,
        // fill            : false,
        order           : idx, // поверх (на 1<) графика parentChartsIdx
        type            : 'line',
        parentChartsIdx : idx // чтобы знать к чей это трент
      });
    }
  });
  
  return config
}
