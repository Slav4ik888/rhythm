import { memo, useCallback, useEffect, useMemo } from 'react';
import { ContentRender } from './render-items';
import { Box } from '@mui/material';
import { f } from 'shared/styles';
import { ViewItemId, PartialViewItem, useDashboardView, NO_PARENT_ID } from 'entities/dashboard-view';
import { useCompany } from 'entities/company';
import { getCopyViewItem } from 'features/dashboard-view';
import { useUser } from 'entities/user';
import { isEmpty, isNotEmpty } from 'shared/helpers/objects';
import { isChangedViewItem } from '../view-configurator/ui/unsaved-changes';



export const DashboardBodyContent = memo(() => {
  const { userId } = useUser();
  const { companyId, changedCompany, serviceUpdateCompany } = useCompany();
  const {
    loading, editMode, newSelectedId, changedViewItem, selectedId, selectedItem, activatedMovementId,
    parentsViewItems, viewItems, entities, activatedCopied, setNewSelectedId,
    setDashboardView, setSelectedId, updateViewItem, serviceUpdateViewItem, serviceCreateGroupViewItems
  } = useDashboardView();

  /** Есть ли не сохранённые изменения в SelectedItem */
  const isChanges = useMemo(() => isChangedViewItem(selectedId, changedCompany, changedViewItem), [selectedId, changedCompany, changedViewItem]);
  
  
  useEffect(() => {
    if (newSelectedId && !loading && newSelectedId !== selectedId && ! isChanges) {
      setSelectedId(newSelectedId);
    }
  }, [newSelectedId, loading, selectedId, isChanges, setSelectedId]);


  const handleSelectViewItem = useCallback((id: ViewItemId) => {
    if (! editMode || id === selectedId) return
    if (! activatedCopied && id === NO_PARENT_ID) return // Активировать NO_PARENT_ID можно только для копирования

    // Если активирован выбранный элемент для ПЕРЕМЕЩЕНИЯ то его перемещаем в родительский элемент
    // НЕ активируя selectedId
    if (activatedMovementId) {
      if (selectedId === id) return // Нажали на этот же элемент
      if (activatedMovementId === selectedItem.parentId) return // Нажали на родительский элемент
      if (entities[id]?.type !== 'box') return // Перемещать можно только в Box

      // У activatedMovementId изменяем parentId на выбранный id
      const viewItem: PartialViewItem = {
        id: activatedMovementId,
        parentId: id // Новый родительский элемент
      };
      updateViewItem(viewItem); // Чтобы на экране изменение отобразилось максимально быстро, не дожидаясь обновления на сервере
      serviceUpdateViewItem({ companyId, viewItem });
    }

    // Если активирован выбранный элемент для КОПИРОВАНИЯ то его вставляем в выбранный элемент
    // НЕ активируя selectedId
    else if (activatedCopied) {
      if (selectedId === id) return // Нажали на этот же элемент
      if (entities[id]?.type !== 'box' && id !== NO_PARENT_ID) return // Перемещать можно только в Box или корневой элемент
      
      const copiedViewItems = getCopyViewItem({ type: activatedCopied.type, id: activatedCopied.id }, id, viewItems, userId);

      setDashboardView({ companyId, viewItems: copiedViewItems }); // Чтобы на экране изменение отобразилось максимально быстро, не дожидаясь обновления на сервере
      serviceCreateGroupViewItems({ companyId, viewItems: copiedViewItems });
    }
    else {
      if (isChanges) {
        /** Сохраняем изменившиеся customSettings */
        if (isNotEmpty(changedCompany)) serviceUpdateCompany({ id: companyId, ...changedCompany });

        /** Сохраняем изменившиеся поля | стили */
        if (isEmpty(changedViewItem)) return

        const viewItem = { id: selectedId, ...changedViewItem };
        serviceUpdateViewItem({ companyId, viewItem, newStoredViewItem: viewItem });
        setNewSelectedId(id); // Здесь сохраняется в newSelectedId а активация выбранного id происходит в useEffect
      }
      else {
        setNewSelectedId(id); // Здесь сохраняется в newSelectedId а активация выбранного id происходит в useEffect
      }
    }
  }, [editMode, selectedId, activatedMovementId, activatedCopied, viewItems, entities, userId, isChanges, setSelectedId, setDashboardView]);


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
