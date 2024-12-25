import { FC, memo, useCallback } from 'react';
import { CardItemId } from 'entities/card-item';
import { Box } from '@mui/material';
import { useDashboard, getAllIds } from 'entities/dashboard';
import { useCompany } from 'entities/company';
import { DeleteButton } from 'shared/ui/buttons/delete-button';
import { f } from 'app/styles';



interface Props {
  cardItemId : CardItemId
}


export const DeleteItem: FC<Props> = memo(({ cardItemId }) => {
  const { selectedItem: { parentId }, viewEntities, serviceDeleteCard } = useDashboard();
  const { companyId } = useCompany();


  const handleDel = useCallback(() => {
    let allIds: CardItemId[] = []; // Ids всех вложенных элементов
    getAllIds(viewEntities, cardItemId, allIds);

    // Для обновления сhildrenIds в родительском card, убираем Id данного
    let parentChildrenIds: CardItemId[] = [];

    if (viewEntities[parentId]) {
      parentChildrenIds = viewEntities[parentId].childrenIds.filter(id => id !== cardItemId);
    }
    
    serviceDeleteCard({ companyId, cardItemId, parentId, allIds, parentChildrenIds });
  }, [cardItemId, parentId, viewEntities, serviceDeleteCard]);


  return (
    <Box sx={{ ...f('-c-fe') }}>
      <DeleteButton
        toolTitle = 'Удалить этот элемент'
        onDel     = {handleDel}
      />
    </Box>
  )
});
