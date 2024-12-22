import { memo } from 'react';
import { Box } from '@mui/material';
import { DashboardAddNewCardBtn } from 'features/dashboard';



const useStyles = () => ({
  root: {
    my: 2,
  }
});


export const DashboardBodyPanel = memo(() => {
  const sx = useStyles();
 

  return (
    <Box sx={sx.root}>
      <DashboardAddNewCardBtn parentId='no_parentId' />
    </Box>
  )
});
