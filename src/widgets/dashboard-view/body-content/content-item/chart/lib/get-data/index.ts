import { ChartConfig, ChartConfigDatasets, fixPointRadius } from 'entities/charts';
import { checkInvertData, DashboardStatisticItem } from 'entities/dashboard-data';
import { ViewItem } from 'entities/dashboard-view';
import { setValue } from 'shared/lib/charts';
import { isArr, isStr } from 'shared/lib/validators';
import { calcTrend2 } from '../calc-trend-2';



/**
 * Наполняет подписи оси X (даты)
 * и наполняет datasets всеми вложенными в item графиками
 */
export const getData = (
  dates     : string[],
  itemsData : DashboardStatisticItem<number>[],
  item      : ViewItem
): ChartConfig => {
  
  // TODO: надо учесть приход 5 графиков и у них 3 тренда
  //  - order графиков должен быть на 1 меньше его тренда

  const config = {
    labels   : dates, // any[] // Dates (метки на оси X)
    datasets : [      // ChartConfigDatasets[]
      ...itemsData.map((itemData, idx) => {
        const datasets = item?.settings?.charts?.[idx].datasets || {} as ChartConfigDatasets;

        const result: ChartConfigDatasets = {
          label                : setValue(datasets.label, `График ${idx + 1}`),
          data                 : checkInvertData(item?.settings, itemData).map(item => isStr(item) ? NaN : item), // Empty value changes for NaN
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

        return result
    })],
  };


  item?.settings?.charts?.forEach((itemChart, idx) => {
    // Если активирована линия тренда, рассчитываем данные тренда и добавляем как график
    if (itemChart.isTrend) {
      const trendData = calcTrend2(dates, config.datasets?.[idx]?.data);

      // Цвет родителя в виде строки (если там массив) | шаблон
      const baseBColor = 'rgb(19, 40, 162)';
      const pbColor = config.datasets?.[idx]?.borderColor;
      const parentBorderColor: string = (isArr(pbColor) ? pbColor?.[0] : (pbColor as string)) || baseBColor;

      config.datasets.push({
        label           : 'Тренд',
        data            : trendData,
        pointRadius     : 0,
        borderColor     : setValue(itemChart?.trendDataSets?.borderColor, parentBorderColor),
        borderWidth     : setValue(itemChart?.trendDataSets?.borderWidth, 3),
        order           : idx, // поверх (на 1<) графика parentChartsIdx
        type            : 'line',
        parentChartsIdx : idx // чтобы знать чей это тренд
      });
    }
  });
  
  return config
}
