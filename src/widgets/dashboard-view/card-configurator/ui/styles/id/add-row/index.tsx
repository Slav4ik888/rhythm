import { FC, memo, useCallback } from 'react';
import { RowWrapper } from 'shared/ui/configurators-components';
import { createCardItem, createNextOrder, NO_SHEET_ID, useDashboardView } from 'entities/dashboard-view';
import { AddCardElementBtns, AddCardChartBtns } from 'features/dashboard-view';
import { f } from 'app/styles';
import { useUser } from 'entities/user';
import { useCompany } from 'entities/company';
import { CardItemType } from 'entities/dashboard-view/model/types';



export const AddRows: FC = memo(() => {
  const { selectedId, selectedItem: { type}, childrenCardItems, parentChildrenIds, serviceAddNewCard } = useDashboardView();
  const { userId } = useUser();
  const { companyId } = useCompany();


  const handleAdd = useCallback((type: CardItemType) => {
    const cardItem = createCardItem({
      sheetId  : NO_SHEET_ID,
      parentId : selectedId,
      order    : createNextOrder(childrenCardItems),
      type,
    }, userId);
    
    serviceAddNewCard(companyId, cardItem);
  }, [parentChildrenIds, childrenCardItems, serviceAddNewCard]);  


  if (type !== 'box') return null

  return (
    <>
      <RowWrapper sx={f('-c-fe')}>
        <AddCardElementBtns onClick={handleAdd} />
      </RowWrapper>

      <RowWrapper sx={f('-c-fe')}>
        {/* TODO: select chart type: line | bar ... */}
        <AddCardChartBtns onClick={handleAdd} />
      </RowWrapper>
    </>
  )
});
