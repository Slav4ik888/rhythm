import { memo } from 'react';
import Box from '@mui/material/Box';
import { PanelAddViewItemBtns } from 'features/dashboard-view';
import { useDashboardView } from 'entities/dashboard-view';



export const DashboardBodyPanel = memo(() => {
  const { editMode } = useDashboardView();

  if (! editMode) return null

  return (
    <Box sx={{ my: 2 }}>
      <PanelAddViewItemBtns parentId='no_parentId' />
    </Box>
  )
});
