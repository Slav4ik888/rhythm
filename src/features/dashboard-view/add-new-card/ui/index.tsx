import { FC, memo, useCallback } from 'react';
import { Box } from '@mui/material';
import { Tooltip } from 'shared/ui/tooltip';
import { CustomTheme, useTheme } from 'app/providers/theme';
import { MDButton } from 'shared/ui/mui-design-components';
import { useCompany } from 'entities/company';
import { useUser } from 'entities/user';
import { createCardItem } from 'entities/dashboard-view/model/creators';
import AddCardIcon from '@mui/icons-material/AddCard';
import { CardItemId, createNextOrder, NO_SHEET_ID, useDashboardView } from 'entities/dashboard-view';



const useStyles = (theme: CustomTheme) => ({
  button: {
  },
  icon: {
    color    : theme.palette.dark.main,
    fontSize : '20px',
  },
});

interface Props {
  parentId: CardItemId
}

export const DashboardAddNewCardBtn: FC<Props> = memo(({ parentId }) => {
  const { childrenCardItems, parentChildrenIds, serviceAddNewCard } = useDashboardView({ parentId });
  const { userId } = useUser();
  const { companyId } = useCompany();
  const sx = useStyles(useTheme());


  const handleAdd = useCallback(() => {
    const cardItem = createCardItem({
      sheetId  : NO_SHEET_ID,
      parentId,
      type     : 'box',
      order    : createNextOrder(childrenCardItems)
    }, userId);
    
    // Для обновления сhildrenIds в родительском card
    const ids = [...parentChildrenIds, cardItem.id];

    serviceAddNewCard(companyId, cardItem, ids);
  }, [parentChildrenIds, childrenCardItems, serviceAddNewCard]);


  return (
    <Box>
      <Tooltip title='Добавить новый элемент'>
        <MDButton
          variant   = 'outlined'
          color     = 'dark'
          sx        = {sx.button}
          startIcon = {<AddCardIcon sx={sx.icon} />}
          onClick   = {handleAdd}
        >
          Добавить
        </MDButton>
      </Tooltip>
    </Box>
  )
});
