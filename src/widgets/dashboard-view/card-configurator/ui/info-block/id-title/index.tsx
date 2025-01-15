import { FC, memo } from 'react';
import { ConfiguratorTextTitle, RowWrapper } from 'shared/ui/configurators-components';
import { useDashboardView } from 'entities/dashboard-view';



export const IdTitle: FC = memo(() => {
  const { selectedId } = useDashboardView();

  return (
    <RowWrapper sx={{ mt: 3 }}>
      <ConfiguratorTextTitle bold title='id' toolTitle='Item id' />
      {selectedId}
    </RowWrapper>
  )
});
