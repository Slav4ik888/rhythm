import { memo, useCallback } from 'react';
import { useDashboard } from 'entities/dashboard';
import { DashboardBodyContentRender } from './render-items';
import { CardItemConfigurator } from 'widgets/card-configurator';
import { CardItemId } from 'entities/card-item';
import { Box } from '@mui/material';
import { f } from 'app/styles';



export const DashboardBodyContent = memo(() => {
  console.log('DashboardBodyContent');
  const { editMode, parentsCardItems, viewEntities, setSelectedId } = useDashboard();

  const handleSelect = useCallback((id: CardItemId) => {
    if (! editMode) return
    
    console.log('Selected: ', id);
    setSelectedId(id);
  }, [editMode, viewEntities, setSelectedId]);

      
  return (
    <Box sx={{ ...f()}}>
      <DashboardBodyContentRender
        parentsCardItems = {parentsCardItems}
        parentId         = 'no_parentId'
        onSelect         = {handleSelect}
      />
      <CardItemConfigurator />
    </Box>
  )
});
