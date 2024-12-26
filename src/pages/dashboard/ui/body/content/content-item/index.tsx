import { FC, memo } from 'react';
import { CardItem, CardItemId, ParentsCardItems } from 'entities/dashboard-view';
import { DashboardBodyContentItemBox } from './box';
import {  } from 'entities/dashboard-data';



interface Props {
  parentsCardItems : ParentsCardItems
  item             : CardItem
  onSelect         : (id: CardItemId) => void
}


/** One card item */
export const DashboardBodyContentItem: FC<Props> = memo(({ item, parentsCardItems, onSelect }) => {

  switch (item.type) {
    case 'box': return <DashboardBodyContentItemBox parentsCardItems={parentsCardItems} item={item} onSelect={onSelect} />;

    default: return <DashboardBodyContentItemBox parentsCardItems={parentsCardItems} item={item} onSelect={onSelect} />;
  }
});
