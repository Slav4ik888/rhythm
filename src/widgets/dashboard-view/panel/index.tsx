import { memo } from 'react';
import { Box } from '@mui/material';
import { PanelAddViewItemBtns } from 'features/dashboard-view';
import { useDashboardView } from 'entities/dashboard-view';



const useStyles = () => ({
  root: {
    my: 2,
  }
});


export const DashboardBodyPanel = memo(() => {
  const sx = useStyles();
  const { editMode } = useDashboardView();

  if (! editMode) return null

  return (
    <Box sx={sx.root}>
      <PanelAddViewItemBtns parentId='no_parentId' />
    </Box>
  )
});
