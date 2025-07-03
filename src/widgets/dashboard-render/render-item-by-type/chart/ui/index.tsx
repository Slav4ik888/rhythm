import { FC, memo, useMemo } from 'react';
import { getKod, useDashboardViewState, ViewItem } from 'entities/dashboard-view';
import 'chart.js/auto';
import { Chart } from 'react-chartjs-2';
import { DashboardStatisticItem, useDashboardData } from 'entities/dashboard-data';
import { getData, getDataDoughnut, getOptions, getTemplateData, getTemplateDataDoughnut } from '../lib';
import { isNotPie } from 'entities/charts';



interface Props {
  isTemplate? : boolean // если рендерится шаблон
  item        : ViewItem
}

/** Item chart */
export const ItemChart: FC<Props> = memo(({ item, isTemplate }) => {
  const { activeDates, activeEntities } = useDashboardData();
  const { entities } = useDashboardViewState();

  const data = useMemo(() => {
    if (isTemplate) {
      return isNotPie(item)
        ? getTemplateData(item)
        : getTemplateDataDoughnut(item)
    }
    else {
      const itemsData = item.settings?.charts?.map(chart => {
        const kod = getKod(entities, item, chart);

        return activeEntities[kod] as DashboardStatisticItem<number>
      }) || [];

      return isNotPie(item)
        ? getData(activeDates, itemsData, item, entities)
        : getDataDoughnut(itemsData, item)
    }
  },
    [activeDates, activeEntities, item, entities, isTemplate]
  );

  const type = item.settings?.charts?.[0]?.chartType || 'line';

  return (
    <Chart
      type    = {type}
      data    = {data}
      // data    = {! isTemplate ? data : templateData}
      options = {getOptions(type, item.settings?.chartOptions || {})}
    />
  )
});
