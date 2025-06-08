import { FC, memo } from 'react';
import { ViewItem, ViewItemId } from 'entities/dashboard-view';
import { ItemWrapper } from '../wrapper-item';
import { MDDivider } from 'shared/ui/mui-design-components';



interface Props {
  item     : ViewItem
  onSelect : (id: ViewItemId) => void
}

/** Item divider */
export const ItemDivider: FC<Props> = memo(({ item, onSelect }) => (
    <ItemWrapper item={item} onSelect={onSelect}>
      <MDDivider />
    </ItemWrapper>
  ));
