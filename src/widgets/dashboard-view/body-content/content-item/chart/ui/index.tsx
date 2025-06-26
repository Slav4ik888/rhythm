import { FC, memo, useMemo } from 'react';
import { getKod, useDashboardView, ViewItem, ViewItemId } from 'entities/dashboard-view';
import { ItemWrapper } from '../../wrapper-item';
import 'chart.js/auto';
import { Chart } from 'react-chartjs-2';
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
  const { entities } = useDashboardView();

  // TODO: упростить, всё засунуть в 1 useMemo, после того как заработает 'doughnut'

  const itemsData = useMemo(() => item.settings?.charts?.map(chart =>
    activeEntities[getKod(entities, item, chart)] as DashboardStatisticItem<number>) || [],
    [activeEntities, entities, item]
  );

  const data = useMemo(() => isNotPie(item)
    ? getData(activeDates, itemsData, item, entities)
    : getDataDoughnut(itemsData, item),
    [activeDates, itemsData, item, entities]
  );

  const type = item.settings?.charts?.[0]?.chartType || 'line';

  return (
    <ItemWrapper item={item} onSelect={onSelect}>
      <Chart
        type    = {type}
        data    = {data}
        options = {getOptions(type, item.settings?.chartOptions || {})}
      />
    </ItemWrapper>
  )
});
