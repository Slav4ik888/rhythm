import { memo, useCallback } from 'react';
import { Box, IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { useDashboard } from 'entities/dashboard';
import { Tooltip } from 'shared/ui/tooltip';
import { CustomTheme, useTheme } from 'app/providers/theme';
import { sxNavbarIconButton } from 'shared/lib/styles/navbar';
import { MDButton } from 'shared/ui/mui-design-components';
import { useCompany } from 'entities/company';
import { useUser } from 'entities/user';
import { createCardItem } from 'entities/card-item/model/creators';



const useStyles = (theme: CustomTheme, editMode: boolean) => ({
  root: {
    my: 2,
  },
  button: {
    // root: sxNavbarIconButton(theme),
  },
  icon: {
    color: theme.palette.dark.main,
  },
});


export const DashboardAddNewCardBtn = memo(() => {
  const { editMode, serviceAddNewCard } = useDashboard();
  const { userId } = useUser();
  const { companyId } = useCompany();
  const sx = useStyles(useTheme(), editMode);

 
  const handleToggle = useCallback(() => {
    const cardItem = createCardItem({ sheetId: 'no_sheetId', parentId: 'no_parentId', type: 'box' }, userId);

    serviceAddNewCard(companyId, cardItem);
  }, [serviceAddNewCard]);

  if (! editMode) return null;

  return (
    <Box sx={sx.root}>
      <Tooltip title='Добавить карточку'>
        <MDButton
          variant = 'outlined'
          color   = 'dark'
          sx      = {sx.button}
          startIcon = {<AddIcon
            fontSize = 'small'
            sx       = {sx.icon}
          />}
          onClick = {handleToggle}
        >
          Добавить карточку
        </MDButton>
      </Tooltip>
    </Box>
  )
});
