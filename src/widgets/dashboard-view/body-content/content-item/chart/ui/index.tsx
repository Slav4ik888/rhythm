import { FC, memo, useMemo } from 'react';
import { CardItem, CardItemId } from 'entities/dashboard-view';
import { ItemWrapper } from '../../wrapper-item';
import "chart.js/auto";
import { Chart } from "react-chartjs-2";
import { DashboardStatisticItem, useDashboardData } from 'entities/dashboard-data';
import { formatDate, SUB } from 'shared/helpers/dates';
import { getData, getOptions } from '../lib';



interface Props {
  item     : CardItem
  onSelect : (id: CardItemId) => void
}

/** Item chart */
export const ItemChart: FC<Props> = memo(({ item, onSelect }) => {
  const { activeDates, activeEntities } = useDashboardData();

  const itemsData = useMemo(() => item.settings?.charts?.map(chart => activeEntities[chart?.kod || ''] as DashboardStatisticItem<number>), [activeEntities, item]);
  
  const dates = useMemo(() => itemsData
    ? activeDates[itemsData?.[0]?.periodType]?.map((item) => formatDate(item, 'DD mon YY', SUB.RU_ABBR_DEC))
    : [], [activeDates, itemsData]);
 
  const type    = item?.settings?.charts?.[0]?.chartType || 'line';
  const data    = getData(dates, itemsData || [], item);
  const options = getOptions(type, item.settings?.chartOptions || {});
  console.log('data: ', data);
  console.log('options: ', options);


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
