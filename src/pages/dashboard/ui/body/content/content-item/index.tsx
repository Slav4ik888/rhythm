import { FC, memo } from 'react';
import { CardItem } from 'entities/card-item';
import { DashboardBodyContentItemBox } from './box';
import { ParentsCardItems } from 'entities/dashboard';



interface Props {
  parentsCardItems : ParentsCardItems
  item             : CardItem
}


/** One card item */
export const DashboardBodyContentItem: FC<Props> = memo(({ item, parentsCardItems }) => {
  console.log('DashboardBodyContentItem');

  switch (item.type) {
    case 'box': return <DashboardBodyContentItemBox parentsCardItems={parentsCardItems} item={item} />;

    default: return <DashboardBodyContentItemBox parentsCardItems={parentsCardItems} item={item} />;
  }
});
