import { FC, memo } from 'react';
import { RowWrapper } from 'shared/ui/configurators-components';
import { useDashboardView } from 'entities/dashboard-view';
import { MoveToAnotherItem, MoveItemUpdownward, CopyViewItem } from 'features/dashboard-view';
import { ConfiguratorSubHeader as SubHeader } from 'shared/ui/configurators-components';
import { f, pxToRem } from 'shared/styles';



export const MovementRow: FC = memo(() => {
  const { selectedItem } = useDashboardView();


  return (
    <SubHeader title='Перемещение'>
      <RowWrapper sx={{ root: { ...f('-c-fe'), gap: pxToRem(8) } }}>
        <MoveToAnotherItem />
        <MoveItemUpdownward viewItem={selectedItem} />
        <CopyViewItem type='firstOnly' />
        <CopyViewItem type='all' />
      </RowWrapper>
    </SubHeader>
  )
});
