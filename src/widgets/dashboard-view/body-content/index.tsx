import { memo, useCallback, useEffect, useLayoutEffect, useState } from 'react';
import { ContentRender } from './render-items';
import { Box } from '@mui/material';
import { f } from 'shared/styles';
import { ViewItemId, PartialViewItem, useDashboardView, NO_PARENT_ID, createNextOrder, getChildren } from 'entities/dashboard-view';
import { useCompany } from 'entities/company';
import { getCopyViewItem } from 'features/dashboard-view';
import { useUser } from 'entities/user';
import { isEmpty, isNotEmpty } from 'shared/helpers/objects';
import { PageLoader } from 'widgets/page-loader';



export const DashboardBodyContent = memo(() => {
  const { userId } = useUser();
  const { companyId, changedCompany, serviceUpdateCompany } = useCompany();
  const {
    loading, editMode, newSelectedId, isUnsaved, changedViewItem, selectedId, selectedItem, activatedMovementId,
    parentsViewItems, viewItems, entities, activatedCopied, setNewSelectedId, serviceCopyStyles,
    setDashboardView, setSelectedId, updateViewItem, serviceUpdateViewItem, serviceCreateGroupViewItems
  } = useDashboardView();

  const [isRendering, setIsRendering] = useState(true);

  useLayoutEffect(() => {
    // Проверяем завершение рендера в RAF (после paint)
    const checkRenderComplete = () => {
      requestAnimationFrame(() => {
        setIsRendering(false);
      });
    };

    checkRenderComplete();
  }, []);
  

  useEffect(() => {
    if (newSelectedId && !loading && newSelectedId !== selectedId && ! isUnsaved) {
      setSelectedId(newSelectedId);
    }
  }, [newSelectedId, loading, selectedId, isUnsaved, setSelectedId]);


  const handleSelectViewItem = useCallback((id: ViewItemId) => {
    if (! editMode || id === selectedId) return
    if (! activatedCopied && id === NO_PARENT_ID) return // Активировать NO_PARENT_ID можно только для копирования

    // Если активирован выбранный элемент для ПЕРЕМЕЩЕНИЯ то его перемещаем в родительский элемент
    // НЕ активируя selectedId
    if (activatedMovementId) {
      if (selectedId === id) return // Нажали на этот же элемент
      if (activatedMovementId === selectedItem.parentId) return // Нажали на родительский элемент (по сути не оставляем в том же месте)
      if (entities[id]?.type !== 'box') return // Перемещать можно только в Box

      // У activatedMovementId изменяем parentId на выбранный id
      const viewItem: PartialViewItem = {
        id       : activatedMovementId,
        parentId : id,                                         // New parent`s id
        order    : createNextOrder(getChildren(viewItems, id)) // Next order in new parent
      };
      updateViewItem(viewItem); // Чтобы на экране изменение отобразилось максимально быстро, не дожидаясь обновления на сервере
      serviceUpdateViewItem({ companyId, viewItem });
    }

    else if (activatedCopied?.type === 'copyStyles') {
      if (selectedId === id) return // Нажали на этот же элемент
      serviceCopyStyles({ companyId, viewItem: { id, styles: { ...selectedItem.styles } } });
    }

    // Если активирован выбранный элемент для КОПИРОВАНИЯ то его вставляем в выбранный элемент
    // НЕ активируя selectedId
    else if (activatedCopied?.type === 'copyItemAll' || activatedCopied?.type === 'copyItemFirstOnly') {
      if (selectedId === id) return // Нажали на этот же элемент
      if (entities[id]?.type !== 'box' && id !== NO_PARENT_ID) return // Перемещать можно только в Box или корневой элемент
      
      const copiedViewItems = getCopyViewItem({ type: activatedCopied.type, id: activatedCopied.id }, id, viewItems, userId);

      setDashboardView({ companyId, viewItems: copiedViewItems }); // Чтобы на экране изменение отобразилось максимально быстро, не дожидаясь обновления на сервере
      serviceCreateGroupViewItems({ companyId, viewItems: copiedViewItems });
    }
    else {
      if (isUnsaved) {
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
  }, [editMode, selectedId, activatedMovementId, activatedCopied, viewItems, entities, userId, isUnsaved, setSelectedId, setDashboardView]);


  return (
    <Box
      sx      = {{ ...f('c'), width: editMode  ? 'calc(100% + 500px)' : '100%' }}
      onClick = {() => handleSelectViewItem(NO_PARENT_ID)}
    >
      {/* {
        isRendering
          ? <PageLoader loading={isRendering} />
          : <ContentRender
              parentsViewItems = {parentsViewItems}
              parentId         = 'no_parentId'
              onSelect         = {handleSelectViewItem}
            />
      } */}
    </Box>
  )
});
