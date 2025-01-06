import { FC, memo } from 'react';
import { CardItem, CardItemId, ParentsCardItems } from 'entities/dashboard-view';
import { ItemBox } from './box';
import { ItemDivider } from './divider';
import { ItemChart } from './chart';



interface Props {
  parentsCardItems : ParentsCardItems
  item             : CardItem
  onSelect         : (id: CardItemId) => void
}


/** One card item */
export const DashboardBodyContentItem: FC<Props> = memo(({ item, parentsCardItems, onSelect }) => {

  switch (item.type) {
    case 'box':
    case 'text':    return <ItemBox parentsCardItems={parentsCardItems} item={item} onSelect={onSelect} />;
    case 'divider': return <ItemDivider item={item} onSelect={onSelect} />;
    case 'chart':   return <ItemChart items={[item]} onSelect={onSelect} />;

    default: return <ItemBox parentsCardItems={parentsCardItems} item={item} onSelect={onSelect} />;
  }
});
