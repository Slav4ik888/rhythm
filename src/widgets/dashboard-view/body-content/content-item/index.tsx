import { FC, memo } from 'react';
import { CardItem, CardItemId, ParentsCardItems } from 'entities/dashboard-view';
import { ItemBox } from './box';
import { ItemDivider } from './divider';
import { ItemChart } from './chart';
import { ItemChip } from './chip';
import { ItemGrowthIcon } from './growth-icon';
import { ItemDigitIndicator } from './digit-indicator';



interface Props {
  parentsCardItems : ParentsCardItems
  item             : CardItem
  onSelect         : (id: CardItemId) => void
}


/** One card item */
export const DashboardBodyContentItem: FC<Props> = memo(({ item, parentsCardItems, onSelect }) => {

  switch (item.type) {
    case 'box':
    case 'text':           return <ItemBox            item={item} onSelect={onSelect} parentsCardItems={parentsCardItems} />;
    case 'divider':        return <ItemDivider        item={item} onSelect={onSelect} />;
    case 'chart':          return <ItemChart          item={item} onSelect={onSelect} />;
    case 'chip':           return <ItemChip           item={item} onSelect={onSelect} />;
    case 'growthIcon':     return <ItemGrowthIcon     item={item} onSelect={onSelect} />;
    case 'digitIndicator': return <ItemDigitIndicator item={item} onSelect={onSelect} />;

    default: return <ItemBox item={item} onSelect={onSelect} parentsCardItems={parentsCardItems} />;
  }
});
