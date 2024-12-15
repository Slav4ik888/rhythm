import { memo, useCallback, useState } from 'react';
import { useDashboard } from 'entities/dashboard';
import { DashboardBodyContentRender } from './render-items';
import { CardItemConfigurator } from 'widgets/card-configurator';
import { CardItem, CardItemId } from 'entities/card-item';
import { Box } from '@mui/material';
import { f } from 'app/styles';



export const DashboardBodyContent = memo(() => {
  console.log('DashboardBodyContent');
  const { editMode, parentsCardItems, viewEntities } = useDashboard();
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState<CardItem>();

  const handleSelect = useCallback((id: CardItemId) => {
    if (! editMode) return
    
    console.log('Selected: ', id);
    setIsOpen(true);
    setSelected(viewEntities[id]);
  }, [editMode, viewEntities, setSelected, setIsOpen]);

  const handleClose = useCallback(() => {
    setIsOpen(false);
    // TODO: check changes
    // TODO: save to DB
    // TODO: save to LS
  }, [setIsOpen]);

      
  return (
    <Box sx={{ ...f()}}>
      <DashboardBodyContentRender
        parentsCardItems = {parentsCardItems}
        parentId         = 'no_parentId'
        onSelect         = {handleSelect}
      />
      <CardItemConfigurator
        isOpen   = {isOpen}
        selected = {selected}
        onClose  = {handleClose}
      />
    </Box>
  )
});
