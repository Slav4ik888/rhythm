import { FC, memo } from 'react';
import { ViewItem, ViewItemId, ParentsViewItems } from 'entities/dashboard-view';
import { ContentRender } from '../../render-items';
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
          : <ContentRender
              parentsViewItems = {parentsViewItems}
              parentId         = {item.id}
              onSelect         = {onSelect}
            />
      }
    </ItemWrapper>
  ));
