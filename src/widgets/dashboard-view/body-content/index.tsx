import { memo, useCallback, useEffect, useLayoutEffect, useState } from 'react';
import { ContentRender } from './render-items';
import Box from '@mui/material/Box';
import { f } from 'shared/styles';
import {
  ViewItemId, PartialViewItem, useDashboardView, NO_PARENT_ID, createNextOrder, getChildren, isClickInsideViewItem
 } from 'entities/dashboard-view';
import { useCompany } from 'entities/company';
import { getCopyViewItem } from 'features/dashboard-view';
import { useUser } from 'entities/user';
import { isEmpty, isNotEmpty } from 'shared/helpers/objects';
import { useUI } from 'entities/ui';
import { PageLoader } from 'widgets/page-loader';
import { __devLog } from 'shared/lib/tests/__dev-log';



export const DashboardBodyContent = memo(() => {
  const { userId } = useUser();
  const { paramsCompanyId, paramsChangedCompany, serviceUpdateCompany } = useCompany();
  const {
    loading, editMode, newSelectedId, isUnsaved, changedViewItem, selectedId, selectedItem, activatedMovementId,
    parentsViewItems, viewItems, entities, activatedCopied, setNewSelectedId, serviceCopyStyles,
    setDashboardView, setSelectedId, serviceUpdateViewItems, serviceCreateGroupViewItems
  } = useDashboardView();
  const { setPageText } = useUI();
  const [isRendering, setIsRendering] = useState(true);


  useLayoutEffect(() => {
    // Проверяем завершение рендера в RAF (после paint)
    const checkRenderComplete = () => {
      requestAnimationFrame(() => {
        setIsRendering(false);
        setPageText();
      });
    };

    checkRenderComplete();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  useEffect(() => {
    if (newSelectedId && !loading && newSelectedId !== selectedId && ! isUnsaved) {
      setSelectedId(newSelectedId);
    }
  }, [newSelectedId, loading, selectedId, isUnsaved, setSelectedId]);


  const handleSelectViewItem = useCallback((id: ViewItemId) => {
    // (v1) if (! editMode || id === selectedId) return
    if (! editMode) return
    if (! activatedCopied && id === NO_PARENT_ID) return // Активировать NO_PARENT_ID можно только для копирования

    // Если активирован выбранный элемент для ПЕРЕМЕЩЕНИЯ то его перемещаем в новый родительский элемент
    // НЕ активируя selectedId
    if (activatedMovementId) {
      if (selectedId === id) return // Нажали на этот же элемент
      if (activatedMovementId === selectedItem.parentId) return // Нажали на родительский элемент (по сути не оставляем в том же месте)
      if (entities[id]?.type !== 'box') return // Перемещать можно только в Box

      // У activatedMovementId изменяем parentId на выбранный id
      const updatedViewItems = [];
      const movementItem = {
        id       : activatedMovementId,
        parentId : id,                                         // New parent`s id
        order    : createNextOrder(getChildren(viewItems, id)) // Next order in new parent
      } as PartialViewItem;

      updatedViewItems.push(movementItem);

      // Проверка, нажали внутрь элемента (на его потомка) или нет.
      if (isClickInsideViewItem(entities, activatedMovementId, id)) {
        // Если нажали внутрь элемента, то меняем ему parentId
        updatedViewItems.push({
          id,
          parentId : entities[activatedMovementId].parentId,
          order    : entities[activatedMovementId].order // Меняем на тот что был у activatedMovementId
        } as PartialViewItem);
      }

      // Чтобы обновился в уже обновлённом состоянии и не было isUnsaved
      const newStoredViewItem = {
        ...entities[activatedMovementId],
        ...movementItem
      };

      // updateViewItems(updatedViewItems); // Чтобы на экране изменение отобразилось максимально быстро, не дожидаясь обновления на сервере
      serviceUpdateViewItems({
        companyId     : paramsCompanyId,
        viewItems     : updatedViewItems,
        viewUpdatedMs : Date.now(),
        newStoredViewItem
      });
    }

    else if (activatedCopied?.type === 'copyStyles') {
      if (selectedId === id) return // Нажали на этот же элемент
      serviceCopyStyles({
        companyId     : paramsCompanyId,
        viewItems     : [{ id, styles: { ...selectedItem.styles } }],
        viewUpdatedMs : Date.now(),
      });
    }

    // Если активирован выбранный элемент для КОПИРОВАНИЯ то его вставляем в выбранный элемент
    // НЕ активируя selectedId
    else if (activatedCopied?.type === 'copyItemAll' || activatedCopied?.type === 'copyItemFirstOnly') {
    // (v1) if (selectedId === id) return // Нажали на этот же элемент
      if (selectedId === id && activatedCopied?.type === 'copyItemAll') return // Копировать всё в этот же элемент нельзя
      if (entities[id]?.type !== 'box' && id !== NO_PARENT_ID) return // Перемещать можно только в Box или корневой элемент

      const copiedViewItems = getCopyViewItem(
        { type: activatedCopied.type, id: activatedCopied.id },
        id,
        viewItems,
        userId
      );

      setDashboardView({ companyId: paramsCompanyId, viewItems: copiedViewItems }); // Чтобы на экране изменение отобразилось максимально быстро, не дожидаясь обновления на сервере
      serviceCreateGroupViewItems({
        companyId     : paramsCompanyId,
        viewItems     : copiedViewItems,
        viewUpdatedMs : Date.now(),
      });
    }
    else if (isUnsaved) {
      if (selectedId === id) return // Click на самого себя не сохранять, тк это может быть ошибочный клик

      /** Сохраняем изменившиеся customSettings */
      if (isNotEmpty(paramsChangedCompany)) serviceUpdateCompany({ id: paramsCompanyId, ...paramsChangedCompany });

      /** Сохраняем изменившиеся поля | стили */
      if (isEmpty(changedViewItem)) return

      const viewItem = { id: selectedId, ...changedViewItem };
      serviceUpdateViewItems({
        companyId         : paramsCompanyId,
        viewItems         : [viewItem],
        newStoredViewItem : viewItem,
        viewUpdatedMs     : Date.now(),
      });
      setNewSelectedId(id); // Здесь сохраняется в newSelectedId а активация выбранного id происходит в useEffect
    }
    else {
      setNewSelectedId(id); // Здесь сохраняется в newSelectedId а активация выбранного id происходит в useEffect
    }
  }, [editMode, selectedId, activatedMovementId, activatedCopied, viewItems, entities, userId, isUnsaved,
    paramsChangedCompany, changedViewItem, paramsCompanyId, selectedItem.parentId, selectedItem.styles,
    serviceCopyStyles, serviceCreateGroupViewItems, serviceUpdateCompany, serviceUpdateViewItems,
    setNewSelectedId, setDashboardView]);


  return (
    <Box
      sx      = {{ ...f('c'), width: editMode  ? 'calc(100% + 500px)' : '100%' }}
      onClick = {() => handleSelectViewItem(NO_PARENT_ID)}
    >
      {
        isRendering
          ? <PageLoader loading={isRendering} text='Отрисовка графиков...' />
          : <ContentRender
              parentsViewItems = {parentsViewItems}
              parentId         = 'no_parentId'
              onSelect         = {handleSelectViewItem}
            />
      }
    </Box>
  )
});
