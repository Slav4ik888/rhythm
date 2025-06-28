import { FC, memo } from 'react';
import { ViewItem, ViewItemId, ParentsViewItems } from 'entities/dashboard-view';
import { ItemBox } from './box';
import { ItemDivider } from './divider';
import { ItemChart } from './chart';
import { ItemChip } from './chip';
import { ItemGrowthIcon } from './growth-icon';
import { ItemDigitIndicator } from './digit-indicator';



interface Props {
  parents  : ParentsViewItems
  item     : ViewItem
  onSelect : (id: ViewItemId) => void
}


/** One View item */
export const RenderViewItemByType: FC<Props> = memo(({ item, parents, onSelect }) => {
  switch (item.type) {
    case 'text':           return <>{item.label}</>;
    case 'box':            return <ItemBox            item={item} onSelect={onSelect} parents={parents} />;
    case 'chart':          return <ItemChart          item={item} />;
    case 'chip':           return <ItemChip           item={item} />;
    case 'growthIcon':     return <ItemGrowthIcon     item={item} />;
    case 'digitIndicator': return <ItemDigitIndicator item={item} />;
    case 'divider':        return <ItemDivider />;

    default: return <></>;
  }
});
