import { memo, useCallback, useEffect, useMemo } from 'react';
import { ContentRender } from './render-items';
import { Box } from '@mui/material';
import { f } from 'shared/styles';
import { ViewItemId, PartialViewItem, useDashboardView, NO_PARENT_ID } from 'entities/dashboard-view';
import { useCompany } from 'entities/company';
import { getCopyViewItem } from 'features/dashboard-view';
import { useUser } from 'entities/user';
import { getChanges, isEmpty, isNotEmpty } from 'shared/helpers/objects';



export const DashboardBodyContent = memo(() => {
  const { userId } = useUser();
  const { companyId, storedCompany, company, serviceUpdateCompany } = useCompany();
  const {
    loading, editMode, newSelectedId, newStoredViewItem, selectedId, selectedItem, activatedMovementId,
    parentsViewItems, viewItems, entities, activatedCopiedId, setNewSelectedId,
    setDashboardView, setSelectedId, updateViewItem, serviceUpdateViewItem, serviceCreateGroupViewItems
  } = useDashboardView();


  const changedCompany = useMemo(() => getChanges(storedCompany, company)
    , [selectedId, newStoredViewItem, entities, storedCompany, company]);
  
  const changedStyles = useMemo(() => getChanges(newStoredViewItem, entities?.[selectedId])
    , [selectedId, newStoredViewItem, entities, storedCompany, company]);

  /** Есть ли не сохранённые изменения в SelectedItem */
  const isChanges = useMemo(() => {
    if (! selectedId) return false;
    
    if (isNotEmpty(changedCompany)) return true
    if (isNotEmpty(changedStyles)) {
      console.log('changedStyles: ', changedStyles);
      return true
    }
    return false
  }, [selectedId, changedCompany, changedStyles]);
  
  
  useEffect(() => {
    if (newSelectedId && !loading && newSelectedId !== selectedId && ! isChanges) {
      setSelectedId(newSelectedId);
    }
  }, [newSelectedId, loading, selectedId, isChanges, setSelectedId]);


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
        id: activatedMovementId,
        parentId: id // Новый родительский элемент
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
      if (isChanges) {
        /** Сохраняем изменившиеся customSettings */
        if (isNotEmpty(changedCompany)) serviceUpdateCompany({ id: companyId, ...changedCompany });

        /** Сохраняем изменившиеся поля | стили */
        if (isEmpty(changedStyles)) return

        const viewItem = { id: selectedId, ...changedStyles };
        serviceUpdateViewItem({ companyId, viewItem, newStoredViewItem: viewItem });
        setNewSelectedId(id); // Здесь сохраняется в newSelectedId а активация выбранного id происходит в useEffect
      }
      else {
        setNewSelectedId(id); // Здесь сохраняется в newSelectedId а активация выбранного id происходит в useEffect
      }
    }
  }, [editMode, selectedId, activatedMovementId, activatedCopiedId, viewItems, entities, userId, isChanges, setSelectedId, setDashboardView]);


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
