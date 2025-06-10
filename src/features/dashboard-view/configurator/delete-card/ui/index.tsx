import { FC, memo, useCallback } from 'react';
import { ViewItemId, useDashboardView } from 'entities/dashboard-view';
import Box from '@mui/material/Box';
import { useCompany } from 'entities/company';
import { DeleteButton } from 'shared/ui/buttons/delete-button';
import { f } from 'shared/styles';
import { getAllChildrenIds } from '../model/utils/get-all-children-ids';



export const DeleteItemContainer: FC = memo(() => {
  const { selectedId, viewItems, serviceDeleteViewItem } = useDashboardView();
  const { companyId } = useCompany();


  const handleDel = useCallback(() => {
    const allIds: ViewItemId[] = []; // Ids всех вложенных элементов
    getAllChildrenIds(viewItems, selectedId, allIds);

    serviceDeleteViewItem({ companyId, allIds });
  }, [selectedId, viewItems, companyId, serviceDeleteViewItem]);


  return (
    <Box sx={{ ...f('-c-fe') }}>
      <DeleteButton
        toolTitle = 'Удалить этот элемент'
        onDel     = {handleDel}
      />
    </Box>
  )
});
