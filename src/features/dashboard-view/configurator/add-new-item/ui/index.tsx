import { FC, memo, useCallback } from 'react';
import {
  createViewItem, createNextOrder, NO_SHEET_ID, useDashboardView, findAvailableBunchId, ViewItemType, ViewItemId
 } from 'entities/dashboard-view';
import { useUser } from 'entities/user';
import { useCompany } from 'entities/company';



interface Props {
  parentId  : ViewItemId
  component : FC<{ onClick: (type: ViewItemType) => void }> // Btn
}

/** Feature for add new ViewItem */
export const AddNewViewItem: FC<Props> = memo(({ component: Component, parentId }) => {
  const {
    selectedId, viewItems, childrenViewItems, serviceCreateGroupViewItems, // selectedItem: { type }
  } = useDashboardView({ parentId });

  const { userId } = useUser();
  const { paramsCompanyId } = useCompany();


  const handleAdd = useCallback((type: ViewItemType) => {
    const availableBunchId = findAvailableBunchId(viewItems);
    const bunchAction = availableBunchId ? 'update' : 'create';

    const createViewItems = [createViewItem(
      userId,
      {
        sheetId  : NO_SHEET_ID,
        bunchId  : availableBunchId,
        parentId : parentId || selectedId, // Если нажали из панели то создастся на 1м уровне
        order    : createNextOrder(childrenViewItems),
        type,
      }
    )];

    serviceCreateGroupViewItems({
      companyId      : paramsCompanyId,
      bunchUpdatedMs : Date.now(),
      viewItems      : createViewItems,
      bunchAction,
    });
  }, [selectedId, parentId, viewItems, paramsCompanyId, userId, childrenViewItems, serviceCreateGroupViewItems]);


  return (
    <Component onClick={handleAdd} />
  )
});
