import { FC, memo } from 'react';
import { CardItem, CardItemId } from 'entities/card-item';
import { DashboardBodyContentItemBox } from './box';
import { ParentsCardItems } from 'entities/dashboard';



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
