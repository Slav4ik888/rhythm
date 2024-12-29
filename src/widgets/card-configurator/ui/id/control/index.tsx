import { FC, memo } from 'react';
import { RowWrapper } from 'shared/ui/configurators-components';
import { useDashboardView } from 'entities/dashboard-view';
import { DashboardAddNewCardBtn, MoveToAnotherCard, MoveItemUpdownward } from 'features/dashboard-view';



export const ControlRow: FC = memo(() => {
  const { selectedItem } = useDashboardView();


  return (
    <RowWrapper>
      <MoveToAnotherCard />
      <MoveItemUpdownward cardItem={selectedItem} />
      <DashboardAddNewCardBtn />
    </RowWrapper>
  )
});
