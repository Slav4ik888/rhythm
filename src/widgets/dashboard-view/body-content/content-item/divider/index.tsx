import { FC, memo } from 'react';
import { CardItem, CardItemId } from 'entities/dashboard-view';
import { ItemWrapper } from '../wrapper-item';
import { MDDivider } from 'shared/ui/mui-design-components';



interface Props {
  item     : CardItem
  onSelect : (id: CardItemId) => void
}

/** Item divider */
export const ItemDivider: FC<Props> = memo(({ item, onSelect }) => {


  return (
    <ItemWrapper item={item} onSelect={onSelect}>
      <MDDivider />
    </ItemWrapper>
  )
});
