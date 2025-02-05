import { memo, useCallback } from 'react';
import { ContentRender } from './render-items';
import { Box } from '@mui/material';
import { f } from 'shared/styles';
import { ViewItemId, PartialViewItem, useDashboardView, ViewItem } from 'entities/dashboard-view';
import { useCompany } from 'entities/company';
import { getCopyViewItem } from 'features/dashboard-view';



export const DashboardBodyContent = memo(() => {
  const { companyId } = useCompany();
  const { editMode, selectedId, selectedItem, activatedMovementId, parentsViewItems, viewItems, entities,
    activatedCopiedId, 
    setSelectedId, updateViewItem, serviceUpdateViewItem } = useDashboardView();


  const handleSelectViewItem = useCallback((id: ViewItemId) => {
    if (! editMode || id === selectedId) return

    // Если активирован выбранный элемент для ПЕРЕМЕЩЕНИЯ то его перемещаем в родительский элемент
    // НЕ активируя selectedId
    if (activatedMovementId) {
      if (selectedId === id) return // Нажали на этот же элемент
      if (activatedMovementId === selectedItem.parentId) return // Нажали на родительский элемент
      if (entities[id].type !== 'box') return // Перемещать можно только в Box

      // У activatedMovementId изменяем parentId на выбранный id
      const viewItem: PartialViewItem = {
        id       : activatedMovementId,
        parentId : id // Новый родительский элемент
      };
      updateViewItem(viewItem); // Чтобы на экране изменение отобразилось максимально быстро, не дожидаясь обновления на сервере
      serviceUpdateViewItem({ companyId, viewItem });
    }

    // Если активирован выбранный элемент для КОПИРОВАНИЯ то его вставляем в выбранный элемент
    // НЕ активируя selectedId
    else if (activatedCopiedId) {
      if (selectedId === id) return // Нажали на этот же элемент
      if (entities[id].type !== 'box') return // Перемещать можно только в Box

      const copiedViewItems = getCopyViewItem(activatedCopiedId, selectedId, viewItems)

      // У activatedCopiedId изменяем parentId на выбранный id
      // const viewItem: PartialViewItem = {
      //   id       : activatedCopiedId,
      //   parentId : id // Новый родительский элемент
      // };
      createGroupViewItems(viewItem); // Чтобы на экране изменение отобразилось максимально быстро, не дожидаясь обновления на сервере
      serviceCreateGroupViewItems({ companyId, viewItem });
    } 
    else {
      setSelectedId(id);
    }
  }, [editMode, selectedId, activatedMovementId, activatedCopiedId, viewItems, entities, setSelectedId]);


  return (
    <Box sx={{ ...f('c') }}>
      <ContentRender
        parentsViewItems = {parentsViewItems}
        parentId         = 'no_parentId'
        onSelect         = {handleSelectViewItem}
      />
    </Box>
  )
});
