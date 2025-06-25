import { FC, memo, useCallback } from 'react';
import { ViewItemId, useDashboardView } from 'entities/dashboard-view';
import Box from '@mui/material/Box';
import { useCompany } from 'entities/company';
import { DeleteButton } from 'shared/ui/buttons/delete-button';
import { f } from 'shared/styles';
import { getAllChildrenIdWithBunch } from '../model/utils/get-all-children-ids-with-bunch';
import { PartialViewItemUpdate } from '../../update-view-item';



export const DeleteItemContainer: FC = memo(() => {
  const { selectedId, viewItems, serviceDeleteViews } = useDashboardView();
  const { paramsCompanyId } = useCompany();


  const handleDel = useCallback(() => {
    const deleteItems: PartialViewItemUpdate[] = []; // Ids всех вложенных элементов
    getAllChildrenIdWithBunch(viewItems, selectedId, deleteItems);

    serviceDeleteViews({
      companyId      : paramsCompanyId,
      bunchUpdatedMs : Date.now(),
      viewItems      : deleteItems
    });
  },
    [selectedId, viewItems, paramsCompanyId, serviceDeleteViews]
  );


  return (
    <Box sx={{ ...f('-c-fe') }}>
      <DeleteButton
        toolTitle = 'Удалить этот элемент'
        onDel     = {handleDel}
      />
    </Box>
  )
});
