import { FC, memo, useCallback } from 'react';
import { Box, IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { useDashboard } from 'entities/dashboard';
import { Tooltip } from 'shared/ui/tooltip';
import { CustomTheme, useTheme } from 'app/providers/theme';
import { MDButton } from 'shared/ui/mui-design-components';
import { useCompany } from 'entities/company';
import { useUser } from 'entities/user';
import { createCardItem } from 'entities/card-item/model/creators';
import AddCardIcon from '@mui/icons-material/AddCard';
import { CardItemId, createNextOrder } from 'entities/card-item';



const useStyles = (theme: CustomTheme) => ({
  button: {
    // root: sxNavbarIconButton(theme),
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
  const { childrenCardItems, serviceAddNewCard } = useDashboard({ parentId });
  const { userId } = useUser();
  const { companyId } = useCompany();
  const sx = useStyles(useTheme());


  const handleAdd = useCallback(() => {
    const cardItem = createCardItem({
      sheetId  : 'no_sheetId',
      parentId,
      type     : 'box',
      order    : createNextOrder(childrenCardItems)
    }, userId);

    serviceAddNewCard(companyId, cardItem);
  }, [serviceAddNewCard]);


  return (
    <Box>
      <Tooltip title='Добавить новый элемент'>
        <IconButton onClick={handleAdd}>
          <AddCardIcon sx={sx.icon} />
        </IconButton>
        {/* <MDButton
          variant   = 'outlined'
          color     = 'dark'
          sx        = {sx.button}
          startIcon = {<AddIcon sx={sx.icon} />}
          onClick   = {handleAdd}
        >
          Добавить карточку
        </MDButton> */}
      </Tooltip>
    </Box>
  )
});
