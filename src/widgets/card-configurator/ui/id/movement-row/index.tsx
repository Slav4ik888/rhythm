import { FC, memo } from 'react';
import { RowWrapper } from 'shared/ui/configurators-components';
import { useDashboardView } from 'entities/dashboard-view';
import { MoveToAnotherCard, MoveItemUpdownward } from 'features/dashboard-view';
import { f } from 'app/styles';



export const MovementRow: FC = memo(() => {
  const { selectedItem } = useDashboardView();


  return (
    <RowWrapper sx={f('-c-fe')}>
      <MoveToAnotherCard />
      <MoveItemUpdownward cardItem={selectedItem} />
    </RowWrapper>
  )
});
