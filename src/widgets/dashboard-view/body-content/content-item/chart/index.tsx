import { FC, memo, useMemo } from 'react';
import { CardItem, CardItemId } from 'entities/dashboard-view';
import { ItemWrapper } from '../wrapper-item';
import "chart.js/auto";
import { Chart } from "react-chartjs-2";
import { DashboardStatisticItem, useDashboardData } from 'entities/dashboard-data';
import { formatDate, SUB } from 'shared/helpers/dates';
import { getData, getOptions } from './lib';



interface Props {
  items    : CardItem[]
  onSelect : (id: CardItemId) => void
}

/** Item chart */
export const ItemChart: FC<Props> = memo(({ items, onSelect }) => {
  const { activeDates, activeEntities } = useDashboardData();

  const itemsData = useMemo(() => items.map(item => activeEntities[item?.settings?.kod || ''] as DashboardStatisticItem<number>), [activeEntities, items]);
  const dates     = useMemo(() => activeDates[itemsData[0]?.statisticType]?.map((item) => formatDate(item, 'DD mon YY', SUB.RU_ABBR_DEC)), [activeDates, items]);
  
  if (! itemsData) return null;

  const type = items[0].settings?.chartType || 'line';
  const data = getData(dates, itemsData, items);
  const options = getOptions(type, {});


  return (
    <ItemWrapper item={items[0]} onSelect={onSelect}>
      <Chart
        type    = {type}
        data    = {data}
        options = {options}
      />
    </ItemWrapper>
  )
});
