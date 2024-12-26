import { FC, memo, useCallback } from 'react';
import { CardItemId, useDashboardView, getAllIds } from 'entities/dashboard-view';
import { Box } from '@mui/material';
import { useCompany } from 'entities/company';
import { DeleteButton } from 'shared/ui/buttons/delete-button';
import { f } from 'app/styles';



interface Props {
  cardItemId : CardItemId
}


export const DeleteItem: FC<Props> = memo(({ cardItemId }) => {
  const { selectedItem: { parentId }, entities, serviceDeleteCard } = useDashboardView();
  const { companyId } = useCompany();


  const handleDel = useCallback(() => {
    let allIds: CardItemId[] = []; // Ids всех вложенных элементов
    getAllIds(entities, cardItemId, allIds);

    // Для обновления сhildrenIds в родительском card, убираем Id данного
    let parentChildrenIds: CardItemId[] = [];

    if (entities[parentId]) {
      parentChildrenIds = entities[parentId].childrenIds.filter(id => id !== cardItemId);
    }
    
    serviceDeleteCard({ companyId, cardItemId, parentId, allIds, parentChildrenIds });
  }, [cardItemId, parentId, entities, serviceDeleteCard]);


  return (
    <Box sx={{ ...f('-c-fe') }}>
      <DeleteButton
        toolTitle = 'Удалить этот элемент'
        onDel     = {handleDel}
      />
    </Box>
  )
});
