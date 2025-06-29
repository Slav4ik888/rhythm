import { memo, useCallback, useEffect, useLayoutEffect, useState } from 'react';
import { DashboardRender } from '../../dashboard-render';
import Box from '@mui/material/Box';
import { f } from 'shared/styles';
import {
  ViewItemId, NO_PARENT_ID, createNextOrder, getChildren, isClickInsideViewItem, ViewItem,
  MAX_COUNT_BUNCH_VIEWITEMS
 } from 'entities/dashboard-view';
import { useCompany } from 'entities/company';
import { getCopyViewItem } from 'features/dashboard-view';
import { useUser } from 'entities/user';
import { isEmpty, isNotEmpty, updateObject } from 'shared/helpers/objects';
import { useUI } from 'entities/ui';
import { PageLoader } from 'widgets/page-loader';
import { __devLog } from 'shared/lib/tests/__dev-log';
import { v4 as uuidv4 } from 'uuid';
import { findAvailableBunchId } from 'shared/lib/structures/bunch';
import { useDashboardViewServices } from 'features/dashboard-view/model/hooks/use-dashboard-view';
import { PartialViewItemUpdate } from 'shared/api/features/dashboard-view';



export const DashboardBodyContent = memo(() => {
  const { userId } = useUser();
  const { paramsCompanyId, paramsChangedCompany, serviceUpdateCompany } = useCompany();
  const {
    parentsViewItems, loading, editMode, newSelectedId, isUnsaved, changedViewItem, selectedId, selectedItem,
    activatedMovementId, viewItems, entities, activatedCopied, setNewSelectedId, setIsMounted,
    setDashboardViewItems, setSelectedId, serviceUpdateViewItems, serviceCreateGroupViewItems
  } = useDashboardViewServices();
  const { setPageText } = useUI();
  const [isRendering, setIsRendering] = useState(true);


  useLayoutEffect(() => {
    // Проверяем завершение рендера в RAF (после paint)
    const checkRenderComplete = () => {
      requestAnimationFrame(() => {
        setIsRendering(false);
        setPageText({ name: 'DashboardBodyContent', text: '' });
        setIsMounted();
      });
    };

    checkRenderComplete();
  },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );


  useEffect(() => {
    if (newSelectedId && ! loading && newSelectedId !== selectedId && ! isUnsaved) {
      setSelectedId(newSelectedId);
    }
  },
    [newSelectedId, loading, selectedId, isUnsaved, setSelectedId]
  );


  const handleSelectViewItem = useCallback((id: ViewItemId) => {
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
      const movementItem: PartialViewItemUpdate = {
        id       : activatedMovementId,
        bunchId  : entities[activatedMovementId].bunchId,
        parentId : id,                                         // New parent`s id
        order    : createNextOrder(getChildren(viewItems, id)) // Next order in new parent
      };

      updatedViewItems.push(movementItem);

      // Проверка, если нажали внутрь элемента (на его потомка)
      if (isClickInsideViewItem(entities, activatedMovementId, id)) {
        // Если нажали внутрь элемента, то меняем ему parentId
        const childItem: PartialViewItemUpdate = {
          id,
          bunchId  : entities[id].bunchId,
          parentId : entities[activatedMovementId].parentId,
          order    : entities[activatedMovementId].order // Меняем на тот что был у activatedMovementId
        };

        updatedViewItems.push(childItem);
      }

      // Чтобы обновился в уже обновлённом состоянии и не было isUnsaved
      const newStoredViewItem = {
        ...entities[activatedMovementId],
        ...movementItem
      };

      // updateViewItems(updatedViewItems); // Чтобы на экране изменение отобразилось максимально быстро, не дожидаясь обновления на сервере
      serviceUpdateViewItems({
        companyId      : paramsCompanyId,
        viewItems      : updatedViewItems,
        bunchUpdatedMs : Date.now(),
        newStoredViewItem
      });
    }

    else if (activatedCopied?.type === 'copyStyles') {
      if (selectedId === id) return // Нажали на этот же элемент

      const viewItems: PartialViewItemUpdate[] = [];
      const bunchUpdatedMs = Date.now();
      let newStoredViewItem = {} as ViewItem;

      if (isUnsaved) { /** Сохраняем текущий элемент, если он не сохранен */
        newStoredViewItem = updateObject(selectedItem, {
          id      : selectedId,
          bunchId : selectedItem.bunchId,
          ...changedViewItem
        });
        viewItems.push(newStoredViewItem);
      }

      // Обновляемый элемент со стилями для вставки
      viewItems.push({
        id,
        bunchId : entities[id].bunchId,
        styles  : { ...selectedItem.styles }
      });

      serviceUpdateViewItems({
        companyId         : paramsCompanyId,
        newStoredViewItem : isUnsaved ? newStoredViewItem : undefined,
        viewItems,
        bunchUpdatedMs,
      });
    }

    // Если активирован выбранный элемент для КОПИРОВАНИЯ то его вставляем в выбранный элемент
    // НЕ активируя selectedId
    else if (activatedCopied?.type === 'copyItemsAll' || activatedCopied?.type === 'copyItemFirstOnly') {
    // (v1) if (selectedId === id) return // Нажали на этот же элемент
      if (selectedId === id && activatedCopied?.type === 'copyItemsAll') return // Копировать всё в этот же элемент нельзя
      if (entities[id]?.type !== 'box' && id !== NO_PARENT_ID) return // Перемещать можно только в Box или корневой элемент

      // Copying
      const copiedViewItems = getCopyViewItem(
        { type: activatedCopied.type, id: activatedCopied.id },
        id,
        viewItems,
        userId
      );

      // Adding bunchId to copied items
      const availableBunchId  = findAvailableBunchId(viewItems, MAX_COUNT_BUNCH_VIEWITEMS, copiedViewItems.length);
      const bunchId           = availableBunchId ? availableBunchId : uuidv4();
      const copiedWithBunchId = copiedViewItems.map(item => ({ ...item, bunchId }));

      // Чтобы на экране изменение отобразилось максимально быстро, не дожидаясь обновления на сервере
      setDashboardViewItems({
        companyId      : paramsCompanyId,
        viewItems      : copiedWithBunchId,
        bunchesUpdated : {}, // Обновление произойдёт в serviceCreateGroupViewItems
      });

      serviceCreateGroupViewItems({
        companyId      : paramsCompanyId,
        viewItems      : copiedWithBunchId,
        bunchUpdatedMs : Date.now(),
        bunchAction    : availableBunchId ? 'update' : 'create',
      });
    }
    else if (isUnsaved) {
      if (selectedId === id) return // Click на самого себя не сохранять, тк это может быть ошибочный клик

      /** Сохраняем изменившиеся поля | стили */
      if (isEmpty(changedViewItem)) return

      const viewItem = {
        id      : selectedId,
        bunchId : selectedItem.bunchId,
        ...changedViewItem
      };

      serviceUpdateViewItems({
        companyId         : paramsCompanyId,
        viewItems         : [viewItem],
        newStoredViewItem : updateObject(selectedItem, viewItem),
        bunchUpdatedMs    : Date.now(),
      });
      setNewSelectedId(id); // Здесь сохраняется в newSelectedId а активация выбранного id происходит в useEffect
    }
    else {
      setNewSelectedId(id); // Здесь сохраняется в newSelectedId а активация выбранного id происходит в useEffect
    }


    /** Сохраняем изменившиеся customSettings */
    if (isUnsaved && selectedId !== id && isNotEmpty(paramsChangedCompany)) {
      serviceUpdateCompany({ id: paramsCompanyId, ...paramsChangedCompany });
    }
  },
    [
      editMode, selectedId, activatedMovementId, activatedCopied, viewItems, entities, userId, isUnsaved,
      paramsChangedCompany, changedViewItem, paramsCompanyId, selectedItem, serviceUpdateCompany,
      serviceUpdateViewItems, setNewSelectedId, setDashboardViewItems, serviceCreateGroupViewItems
    ]
  );


  return (
    <Box
      sx={{
        ...f('-fs-fs-w'),
        width : editMode ? 'calc(100% + 500px)' : '100%',
        pt    : 3
      }}
      onClick = {() => handleSelectViewItem(NO_PARENT_ID)}
    >
      {
        isRendering
          ? <PageLoader loading={isRendering} text='Отрисовка графиков...' />
          : <DashboardRender
              parents  = {parentsViewItems}
              parentId = 'no_parentId'
              onSelect = {handleSelectViewItem}
            />
      }
    </Box>
  )
});
