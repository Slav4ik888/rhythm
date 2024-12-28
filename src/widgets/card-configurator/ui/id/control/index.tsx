import { FC, memo } from 'react';
import { RowWrapper } from 'shared/ui/configurators-components';
import { CardItemId } from 'entities/dashboard-view';
import { DashboardAddNewCardBtn } from 'features/dashboard-view';
import { MoveItemUpdownward } from './move-item-updownward';



interface Props {
  cardItemId : CardItemId
}


export const ControlRow: FC<Props> = memo(({ cardItemId }) => {


  return (
    <RowWrapper>
      <MoveItemUpdownward cardItemId={cardItemId} />
      <DashboardAddNewCardBtn parentId={cardItemId} />
    </RowWrapper>
  )
});
