import { FC, memo } from 'react';
import { CardItem, useDashboardView } from 'entities/dashboard-view';
import { Toward, TowardType } from './toward';
import { calcNewOrder } from './utils/calc-new-order';
import { sortingArr } from 'shared/helpers/sorting';



interface Props {
  cardItem : CardItem
}


export const MoveItemUpdownward: FC<Props> = memo(({ cardItem }) => {
  const { childrenCardItems, updateCardItem } = useDashboardView({ parentId: cardItem.parentId });

  const handleClick = (type: TowardType) => {
    updateCardItem({
      id    : cardItem.id,
      order : calcNewOrder(type, sortingArr(childrenCardItems, 'order'), cardItem)
    });
  };

  return (
    <>
      <Toward type='up'   onClick={handleClick} />
      <Toward type='down' onClick={handleClick} />
    </>
  )
});
