import { FC, memo, useMemo } from 'react';
import { getKod, useDashboardViewState, ViewItem } from 'entities/dashboard-view';
import 'chart.js/auto';
import { Chart } from 'react-chartjs-2';
import {
  DashboardStatisticItem, useDashboardData, getEntitiesByPeriod, calculateStartDate, PeriodType,
  PayloadGetEntitiesByPeriod
} from 'entities/dashboard-data';
import { getData, getDataDoughnut, getOptions, getTemplateData, getTemplateDataDoughnut } from './lib';
import { isNotPie } from 'entities/charts';



interface Props {
  isTemplate? : boolean // если рендерится шаблон
  item        : ViewItem
}

/** Item chart */
export const ItemChartjs: FC<Props> = memo(({ item, isTemplate }) => {
  const { activeDates, activeEntities, startEntities, startDates, activeDateEnd } = useDashboardData();
  const { entities } = useDashboardViewState();

  const data = useMemo(() => {
    if (isTemplate) {
      return isNotPie(item)
        ? getTemplateData(item)
        : getTemplateDataDoughnut(item)
    }
    else {
      let individualData = {} as PayloadGetEntitiesByPeriod;
      const individualPeriod = entities[item.settings?.periodId || '']?.settings?.selectedPeriod;
      if (item.id === '') console.log('individualPeriod: ', individualPeriod);

      if (individualPeriod) {
        const calcedStartDate = calculateStartDate(activeDateEnd, individualPeriod as PeriodType) as number;
        console.log('calcedStartDate: ', calcedStartDate);
        const individualEntites = getEntitiesByPeriod(
          startEntities,
          startDates,
          { start: calcedStartDate, end: activeDateEnd }
        );
        individualData = individualEntites;
      }

      const itemsData = item.settings?.charts?.map(chart => {
        const kod = getKod(entities, item, chart);

        return individualPeriod
          ? individualData.activeEntities[kod] as DashboardStatisticItem<number>
          : activeEntities[kod] as DashboardStatisticItem<number>
      }) || [];

      return isNotPie(item)
        ? getData(
            individualPeriod ? individualData.activeDates : activeDates,
            itemsData,
            item,
            entities
          )
        : getDataDoughnut(itemsData, item)
    }
  },
    [activeDates, activeEntities, startEntities, startDates, activeDateEnd, item, entities, isTemplate]
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
