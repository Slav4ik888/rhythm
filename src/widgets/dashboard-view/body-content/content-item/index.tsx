import { FC, memo } from 'react';
import { ViewItem, ViewItemId, ParentsViewItems } from 'entities/dashboard-view';
import { ItemBox } from './box';
import { ItemDivider } from './divider';
import { ItemChart } from './chart';
import { ItemChip } from './chip';
import { ItemGrowthIcon } from './growth-icon';
import { ItemDigitIndicator } from './digit-indicator';



interface Props {
  parentsViewItems : ParentsViewItems
  item             : ViewItem
  onSelect         : (id: ViewItemId) => void
}


/** One View item */
export const DashboardBodyContentItem: FC<Props> = memo(({ item, parentsViewItems, onSelect }) => {

  switch (item.type) {
    case 'box':
    case 'text':           return <ItemBox            item={item} onSelect={onSelect} parentsViewItems={parentsViewItems} />;
    case 'divider':        return <ItemDivider        item={item} onSelect={onSelect} />;
    case 'chart':          return <ItemChart          item={item} onSelect={onSelect} />;
    case 'chip':           return <ItemChip           item={item} onSelect={onSelect} />;
    case 'growthIcon':     return <ItemGrowthIcon     item={item} onSelect={onSelect} />;
    case 'digitIndicator': return <ItemDigitIndicator item={item} onSelect={onSelect} />;

    default: return <ItemBox item={item} onSelect={onSelect} parentsViewItems={parentsViewItems} />;
  }
});
