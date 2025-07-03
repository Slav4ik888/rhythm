import { FC, memo } from 'react';
import { ViewItem, ViewItemId, ParentsViewItems } from 'entities/dashboard-view';
import { ItemBox } from './box';
import { ItemDivider } from './divider';
import { ItemChart } from './chart';
import { ItemChip } from './chip';
import { ItemGrowthIcon } from './growth-icon';
import { ItemDigitIndicator } from './digit-indicator';



interface Props {
  parents     : ParentsViewItems
  item        : ViewItem
  isTemplate? : boolean // если рендерится шаблон
  onSelect    : (id: ViewItemId) => void
}


/** One View item */
export const RenderViewItemByType: FC<Props> = memo(({ item, parents, isTemplate, onSelect }) => {
  switch (item.type) {
    case 'text': return <>{item.label}</>;
    case 'box': return (
      <ItemBox
        item       = {item}
        isTemplate = {isTemplate}
        parents    = {parents}
        onSelect   = {onSelect}
      />
    );
    case 'chart': return (
      <ItemChart
        item       = {item}
        isTemplate = {isTemplate}
      />
    );
    case 'chip': return (
      <ItemChip
        item       = {item}
        isTemplate = {isTemplate}
      />
    );
    case 'growthIcon': return (
      <ItemGrowthIcon
        item       = {item}
        isTemplate = {isTemplate}
      />
    );
    case 'digitIndicator': return (
      <ItemDigitIndicator
        item       = {item}
        isTemplate = {isTemplate}
      />
    );
    case 'divider': return <ItemDivider />;

    default: return <></>;
  }
});
