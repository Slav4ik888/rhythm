import { memo, useCallback } from 'react';
import { ContentRender } from './render-items';
import { Box } from '@mui/material';
import { f } from 'shared/styles';
import { ViewItemId, PartialViewItem, useDashboardView, NO_PARENT_ID } from 'entities/dashboard-view';
import { useCompany } from 'entities/company';
import { getCopyViewItem } from 'features/dashboard-view';
import { useUser } from 'entities/user';



export const DashboardBodyContent = memo(() => {
  const { userId } = useUser();
  const { companyId } = useCompany();
  const {
    editMode, selectedId, selectedItem, activatedMovementId, parentsViewItems, viewItems, entities, activatedCopiedId,
    setDashboardView, setSelectedId, updateViewItem, serviceUpdateViewItem, serviceCreateGroupViewItems
  } = useDashboardView();


  const handleSelectViewItem = useCallback((id: ViewItemId) => {
    if (! editMode || id === selectedId) return
    if (! activatedCopiedId && id === NO_PARENT_ID) return // Активировать NO_PARENT_ID можно только для копирования

    // Если активирован выбранный элемент для ПЕРЕМЕЩЕНИЯ то его перемещаем в родительский элемент
    // НЕ активируя selectedId
    if (activatedMovementId) {
      if (selectedId === id) return // Нажали на этот же элемент
      if (activatedMovementId === selectedItem.parentId) return // Нажали на родительский элемент
      if (entities[id]?.type !== 'box') return // Перемещать можно только в Box

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
      if (entities[id]?.type !== 'box' && id !== NO_PARENT_ID) return // Перемещать можно только в Box или корневой элемент
      
      const copiedViewItems = getCopyViewItem(activatedCopiedId, id, viewItems, userId);
      setDashboardView({ companyId, viewItems: copiedViewItems }); // Чтобы на экране изменение отобразилось максимально быстро, не дожидаясь обновления на сервере
      serviceCreateGroupViewItems({ companyId, viewItems: copiedViewItems });
    }
    else {
      setSelectedId(id);
    }
  }, [editMode, selectedId, activatedMovementId, activatedCopiedId, viewItems, entities, userId, setSelectedId, setDashboardView]);


  return (
    <Box
      sx      = {{ ...f('c') }}
      onClick = {() => handleSelectViewItem(NO_PARENT_ID)}
    >
      <ContentRender
        parentsViewItems = {parentsViewItems}
        parentId         = 'no_parentId'
        onSelect         = {handleSelectViewItem}
      />
    </Box>
  )
});
