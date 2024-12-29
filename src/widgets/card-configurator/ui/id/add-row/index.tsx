import { FC, memo } from 'react';
import { RowWrapper } from 'shared/ui/configurators-components';
import { useDashboardView } from 'entities/dashboard-view';
import { DashboardAddNewCardBtn } from 'features/dashboard-view/add-new-card/ui/row';
import { f } from 'app/styles';



export const AddRow: FC = memo(() => {
  const { selectedItem: { type} } = useDashboardView();

  if (type !== 'box') return null

  return (
    <RowWrapper sx={f('-c-fe')}>
      {/* TODO: изменить название */}
      <DashboardAddNewCardBtn />
    </RowWrapper>
  )
});
