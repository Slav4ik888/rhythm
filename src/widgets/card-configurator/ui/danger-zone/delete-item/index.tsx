import { FC, memo, useCallback } from 'react';
import { CardItemId } from 'entities/card-item';
import { Box } from '@mui/material';
import { useDashboard } from 'entities/dashboard';
import { useCompany } from 'entities/company';
import { DeleteButton } from 'shared/ui/buttons/delete-button';
import { f } from 'app/styles';



interface Props {
  cardItemId : CardItemId
}


export const DeleteItem: FC<Props> = memo(({ cardItemId }) => {
const { serviceDeleteCard } = useDashboard();
  const { companyId } = useCompany();


  const handleDel = useCallback(() => {
    serviceDeleteCard({ companyId, cardItemId });
  }, [cardItemId, serviceDeleteCard]);


  return (
    <Box sx={{ ...f('-c-fe') }}>
      <DeleteButton
        toolTitle = 'Удалить этот элемент'
        onDel     = {handleDel}
      />
    </Box>
  )
});
