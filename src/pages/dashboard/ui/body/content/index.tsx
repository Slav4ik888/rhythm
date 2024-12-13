import { memo, useCallback, useState } from 'react';
import { useDashboard } from 'entities/dashboard';
import { DashboardBodyContentRender } from './render-items';
import { CardItemConfigurator } from 'widgets/card-configurator';
import { CardItemId } from 'entities/card-item';



export const DashboardBodyContent = memo(() => {
  console.log('DashboardBodyContent');
  const { editMode, parentsCardItems } = useDashboard();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedId, setSelectedId] = useState<CardItemId>('');

  const handleSelect = useCallback((id: CardItemId) => {
    if (! editMode) return
    
    console.log('Selected: ', id);
    setIsOpen(true);
    setSelectedId(id);
  }, [editMode, setSelectedId]);

  const handleClose = useCallback(() => setIsOpen(false), [setIsOpen]);

      
  return (
    <>
      <DashboardBodyContentRender
        parentsCardItems = {parentsCardItems}
        parentId         = 'no_parentId'
        onSelect         = {handleSelect}
      />
      <CardItemConfigurator
        isOpen     = {isOpen}
        selectedId = {selectedId}
        onClose    = {handleClose}
      />
    </>
  )
});
