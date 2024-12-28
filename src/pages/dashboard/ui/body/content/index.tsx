import { memo, useCallback } from 'react';
import { DashboardBodyContentRender } from './render-items';
import { Box } from '@mui/material';
import { f } from 'app/styles';
import { CardItemId, useDashboardView } from 'entities/dashboard-view';



export const DashboardBodyContent = memo(() => {
  const { editMode, selectedId, parentsCardItems, entities, setSelectedId } = useDashboardView();


  const handleSelectCardItem = useCallback((id: CardItemId) => {
    if (! editMode || id === selectedId) return
    setSelectedId(id);
  }, [editMode, selectedId, entities, setSelectedId]);


  return (
    <Box sx={{ ...f() }}>
      <DashboardBodyContentRender
        parentsCardItems = {parentsCardItems}
        parentId         = 'no_parentId'
        onSelect         = {handleSelectCardItem}
      />
    </Box>
  )
});
