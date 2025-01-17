import { FC, memo } from 'react';
import { useDashboardView } from 'entities/dashboard-view';
import { ConfiguratorTextTitle, RowWrapper } from 'shared/ui/configurators-components';
import { useDashboardData } from 'entities/dashboard-data';
import { Box } from '@mui/material';



/** order in parents */
export const ItemOrder: FC = memo(() => {
  const { selectedItem } = useDashboardView();


  return (
    <RowWrapper>
      <ConfiguratorTextTitle bold title='Order' toolTitle='' />
      <Box sx={{ fontSize: '1rem' }}>
        {selectedItem.order}
      </Box>
    </RowWrapper>
  )
});
