import { memo, useCallback } from 'react';
import { ContentRender } from './render-items';
import { Box } from '@mui/material';
import { f } from 'shared/styles';
import { CardItemId, PartialCardItem, useDashboardView } from 'entities/dashboard-view';
import { useCompany } from 'entities/company';



export const DashboardBodyContent = memo(() => {
  const { companyId } = useCompany();
  const { editMode, selectedId, selectedItem, activatedMovementId, parentsCardItems, entities,
    setSelectedId, updateCardItem, serviceUpdateCardItem } = useDashboardView();


  const handleSelectCardItem = useCallback((id: CardItemId) => {
    if (! editMode || id === selectedId) return

    // Если активирован выбранный элемент для перемещения то его перемещаем в родительский элемент
    // НЕ активируя selectedId
    if (activatedMovementId) {
      if (selectedId === id) return // Нажали на этот же элемент
      if (activatedMovementId === selectedItem.parentId) return // Нажали на родительский элемент
      if (entities[id].type !== 'box') return // Перемещать можно только в Box

      // У activatedMovementId изменяем parentId на выбранный id
      const cardItem: PartialCardItem = {
        id       : activatedMovementId,
        parentId : id // Новый родительский элемент
      };
      updateCardItem(cardItem); // Чтобы на экране изменение отобразилось максимально быстро, не дожидаясь обновления на сервере
      serviceUpdateCardItem({ companyId, cardItem });
    } 
    else {
      setSelectedId(id);
    }
  }, [editMode, selectedId, entities, setSelectedId]);


  return (
    <Box sx={{ ...f('c') }}>
      <ContentRender
        parentsCardItems = {parentsCardItems}
        parentId         = 'no_parentId'
        onSelect         = {handleSelectCardItem}
      />
    </Box>
  )
});
