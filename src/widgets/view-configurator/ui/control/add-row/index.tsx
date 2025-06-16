import { FC, memo, useCallback } from 'react';
import { RowWrapper, ConfiguratorSubHeader as SubHeader } from 'shared/ui/configurators-components';
import { createViewItem, createNextOrder, NO_SHEET_ID, useDashboardView } from 'entities/dashboard-view';
import { AddViewItemElementBtns, AddViewItemIndicatorsBtns } from 'features/dashboard-view';
import { f, pxToRem } from 'shared/styles';
import { useUser } from 'entities/user';
import { useCompany } from 'entities/company';
import { ViewItemType } from 'entities/dashboard-view/model/types';



/** Строки для добавления разных элементов */
export const AddRows: FC = memo(() => {
  const { selectedId, selectedItem: { type }, childrenViewItems, serviceCreateGroupViewItems } = useDashboardView();
  const { userId } = useUser();
  const { paramsCompanyId } = useCompany();


  const handleAdd = useCallback((type: ViewItemType) => {
    if (! selectedId) return;

    const viewItems = [createViewItem(
      userId,
      {
        sheetId  : NO_SHEET_ID,
        parentId : selectedId,
        order    : createNextOrder(childrenViewItems),
        type,
      }
    )];

    serviceCreateGroupViewItems({
      companyId     : paramsCompanyId,
      viewUpdatedMs : Date.now(),
      viewItems,
    });
  }, [selectedId, paramsCompanyId, userId, childrenViewItems, serviceCreateGroupViewItems]);


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
