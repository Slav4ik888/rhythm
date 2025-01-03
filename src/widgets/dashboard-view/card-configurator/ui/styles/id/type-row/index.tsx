import { FC, memo } from 'react';
import { ConfiguratorTextTitle, RowWrapper } from 'shared/ui/configurators-components';
import { useDashboardView } from 'entities/dashboard-view';



export const TypeRow: FC = memo(() => {
  const { selectedItem } = useDashboardView();


  return (
    <RowWrapper>
      <ConfiguratorTextTitle
        bold
        title     = 'type'
        toolTitle = 'Item type'
      />
      {selectedItem.type}
    </RowWrapper>
  )
});
