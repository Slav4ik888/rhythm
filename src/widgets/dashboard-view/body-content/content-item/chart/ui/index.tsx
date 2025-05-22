import { FC, memo, useMemo } from 'react';
import { ViewItem, ViewItemId } from 'entities/dashboard-view';
import { ItemWrapper } from '../../wrapper-item';
import "chart.js/auto";
import { Chart } from "react-chartjs-2";
import { DashboardStatisticItem, useDashboardData } from 'entities/dashboard-data';
// import { formatDate, SUB } from 'shared/helpers/dates';
import { getData, getDataDoughnut, getOptions } from '../lib';
import { isNotPie } from 'entities/charts';



interface Props {
  item: ViewItem
  onSelect: (id: ViewItemId) => void
}

/** Item chart */
export const ItemChart: FC<Props> = memo(({ item, onSelect }) => {
  const { activeDates, activeEntities } = useDashboardData();

  // TODO: упростить, всё засунуть в 1 useMemo, после того как заработает 'doughnut'
  const notPie = isNotPie(item);

  const itemsData = useMemo(() => item.settings?.charts?.map(chart => activeEntities[chart?.kod || ''] as DashboardStatisticItem<number>)|| []
    , [activeEntities, item]);
  
  // const dates = useMemo(() => {
  //   if (notPie) {
  //     return itemsData
  //       ? activeDates[itemsData?.[0]?.periodType]?.map((item) => formatDate(item, 'DD mon YY', SUB.RU_ABBR_DEC))
  //       : []
  //   }
  //   else return [] // dates не нужен для 'doughnut'
  // }, [activeDates, itemsData]);

  const type    = item.settings?.charts?.[0]?.chartType || 'line';
  const data    = notPie ? getData(activeDates, itemsData, item) : getDataDoughnut(itemsData, item);
  const options = getOptions(type, item.settings?.chartOptions || {});


  return (
    <ItemWrapper item={item} onSelect={onSelect}>
      <Chart
        type    = {type}
        data    = {data}
        options = {options}
      />
    </ItemWrapper>
  )
});
