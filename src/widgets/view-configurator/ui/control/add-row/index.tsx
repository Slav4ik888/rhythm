import { FC, memo, useCallback } from 'react';
import { RowWrapper } from 'shared/ui/configurators-components';
import { createViewItem, createNextOrder, NO_SHEET_ID, useDashboardView } from 'entities/dashboard-view';
import { AddViewItemElementBtns, AddViewItemIndicatorsBtns } from 'features/dashboard-view';
import { f, pxToRem } from 'shared/styles';
import { useUser } from 'entities/user';
import { useCompany } from 'entities/company';
import { ViewItemType } from 'entities/dashboard-view/model/types';
import { ConfiguratorSubHeader as SubHeader } from 'shared/ui/configurators-components';



/** Строки для добавления разных элементов */
export const AddRows: FC = memo(() => {
  const { selectedId, selectedItem: { type}, childrenViewItems, parentChildrenIds, serviceAddNewViewItem } = useDashboardView();
  const { userId } = useUser();
  const { companyId } = useCompany();


  const handleAdd = useCallback((type: ViewItemType) => {
    if (! selectedId) return;
    
    const viewItem = createViewItem({
      sheetId  : NO_SHEET_ID,
      parentId : selectedId,
      order    : createNextOrder(childrenViewItems),
      type,
    }, userId);
    
    serviceAddNewViewItem(companyId, viewItem);
  }, [selectedId, companyId, userId, parentChildrenIds, childrenViewItems, serviceAddNewViewItem]);  


  if (type !== 'box') return null

  return (
    <SubHeader title='Добавление элементов'>
      <RowWrapper sx={{ root: { ...f('-c-fe'), flexWrap: 'wrap', gap: pxToRem(8) } }}>
        <AddViewItemElementBtns onClick={handleAdd} />
      </RowWrapper>

      <RowWrapper sx={{ root: { ...f('-c-fe'), flexWrap: 'wrap', gap: pxToRem(8) } }}>
        {/* TODO: select chart type: line | bar ... */}
        <AddViewItemIndicatorsBtns onClick={handleAdd} />
      </RowWrapper>
    </SubHeader>
  )
});
