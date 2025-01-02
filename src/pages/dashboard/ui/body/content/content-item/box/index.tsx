import { FC, memo } from 'react';
import { CardItem, CardItemId, ParentsCardItems } from 'entities/dashboard-view';
import { ContentRender } from '../../render-items';
import { ItemWrapper } from '../wrapper-item';



interface Props {
  parentsCardItems : ParentsCardItems
  item             : CardItem
  onSelect         : (id: CardItemId) => void
}

/** Item box */
export const ItemBox: FC<Props> = memo(({ parentsCardItems, item, onSelect }) => {


  return (
    <ItemWrapper item={item} onSelect={onSelect}>
      {
        item.label
          ? <>{item.label}</>
          : <ContentRender
              parentsCardItems = {parentsCardItems}
              parentId         = {item.id}
              onSelect         = {onSelect}
            />
      }
    </ItemWrapper>
  )
});
