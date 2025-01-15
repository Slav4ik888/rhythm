import { FC, memo } from 'react';
import { CardItem, CardItemId, ChipContainer } from 'entities/dashboard-view';
import { ItemWrapper } from '../wrapper-item';





interface Props {
  item     : CardItem
  onSelect : (id: CardItemId) => void
}

/** Item chip */
export const ItemChip: FC<Props> = memo(({ item, onSelect }) => {
  const kod = item.settings?.kod;
  const type = item.settings?.chipType;

  return (
    <ItemWrapper item={item} onSelect={onSelect}>
      <ChipContainer
        label='Test label'
        description='Test description'
        sx={{ color: '#fff', background: 'red' }}
      />
    </ItemWrapper>
  )
});
