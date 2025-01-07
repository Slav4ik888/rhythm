import { FC, memo, useCallback } from 'react';
import { CardItemId, useDashboardView } from 'entities/dashboard-view';
import { Box } from '@mui/material';
import { useCompany } from 'entities/company';
import { DeleteButton } from 'shared/ui/buttons/delete-button';
import { f } from 'shared/styles';
import { getAllChildrenIds } from '../model/utils/get-all-children-ids';



export const DeleteItemContainer: FC = memo(() => {
  const { selectedId, cardItems, serviceDeleteCard } = useDashboardView();
  const { companyId } = useCompany();


  const handleDel = useCallback(() => {
    let allIds: CardItemId[] = []; // Ids всех вложенных элементов
    getAllChildrenIds(cardItems, selectedId, allIds);

    serviceDeleteCard({ companyId, allIds });
  }, [selectedId, cardItems, serviceDeleteCard]);


  return (
    <Box sx={{ ...f('-c-fe') }}>
      <DeleteButton
        toolTitle = 'Удалить этот элемент'
        onDel     = {handleDel}
      />
    </Box>
  )
});
