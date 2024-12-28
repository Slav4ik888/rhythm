import { FC, memo } from 'react';
import { RowWrapper } from 'shared/ui/configurators-components';
import { useDashboardView } from 'entities/dashboard-view';
import { DashboardAddNewCardBtn } from 'features/dashboard-view';
import { MoveItemUpdownward } from './move-item-updownward';



export const ControlRow: FC = memo(() => {
  const { selectedItem } = useDashboardView();


  return (
    <RowWrapper>
      <MoveItemUpdownward cardItem={selectedItem} />
      <DashboardAddNewCardBtn />
    </RowWrapper>
  )
});
