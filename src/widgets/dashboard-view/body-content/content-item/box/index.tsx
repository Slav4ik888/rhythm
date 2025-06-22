import { FC, memo } from 'react';
import { ViewItem, ViewItemId, ParentsViewItems } from 'entities/dashboard-view';
import { ContentRenderChildren } from '../../render-items/render-children';
import { ItemWrapper } from '../wrapper-item';



interface Props {
  parentsViewItems : ParentsViewItems
  item             : ViewItem
  onSelect         : (id: ViewItemId) => void
}

/** Item box */
export const ItemBox: FC<Props> = memo(({ parentsViewItems, item, onSelect }) => (
  <ItemWrapper item={item} onSelect={onSelect}>
    {
      item.label
        ? <>{item.label}</>
        : <ContentRenderChildren
            parentsViewItems = {parentsViewItems}
            parentId         = {item.id}
            onSelect         = {onSelect}
          />
    }
  </ItemWrapper>
));
