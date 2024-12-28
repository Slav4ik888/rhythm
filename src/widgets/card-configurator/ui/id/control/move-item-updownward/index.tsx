import { FC, memo } from 'react';
import { CardItemId, useDashboardView } from 'entities/dashboard-view';
import { Toward, TowardType } from './toward';



interface Props {
  cardItemId : CardItemId
}


export const MoveItemUpdownward: FC<Props> = memo(({ cardItemId }) => {
  const {  } = useDashboardView();

  const handleClick = (type: TowardType) => {
    console.log('type: ', type);
  };

  return (
    <>
      <Toward type='up'   onClick={handleClick} />
      <Toward type='down' onClick={handleClick} />
    </>
  )
});
