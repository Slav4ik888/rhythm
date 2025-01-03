import { memo } from 'react';
import { Box } from '@mui/material';
import { PanelAddCardBtns } from 'features/dashboard-view';
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
      <PanelAddCardBtns parentId='no_parentId' />
    </Box>
  )
});
