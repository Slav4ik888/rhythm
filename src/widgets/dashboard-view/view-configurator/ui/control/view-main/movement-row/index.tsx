import { FC, memo } from 'react';
import { RowWrapper } from 'shared/ui/configurators-components';
import { useDashboardView } from 'entities/dashboard-view';
import { MoveToAnotherItem, MoveItemUpdownward, CopyViewItem } from 'features/dashboard-view';
import { ConfiguratorSubHeader as SubHeader } from 'shared/ui/configurators-components';
import { f } from 'shared/styles';




export const MovementRow: FC = memo(() => {
  const { selectedItem } = useDashboardView();


  return (
    <SubHeader title='Перемещение'>
      <RowWrapper sx={{ ...f('-c-fe') }}>
        <MoveToAnotherItem />
        <MoveItemUpdownward viewItem={selectedItem} />
        <CopyViewItem />
      </RowWrapper>
    </SubHeader>
  )
});
