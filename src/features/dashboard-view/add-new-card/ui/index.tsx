import { FC, memo, useCallback, useState } from 'react';
import { Box, FormControl, MenuItem } from '@mui/material';
import { Tooltip } from 'shared/ui/tooltip';
import { CustomTheme, pxToRem, useTheme } from 'app/providers/theme';
import { MDButton } from 'shared/ui/mui-design-components';
import { useCompany } from 'entities/company';
import { useUser } from 'entities/user';
import { createCardItem } from 'entities/dashboard-view/model/creators';
import AddCardIcon from '@mui/icons-material/AddCard';
import { CardItemId, createNextOrder, NO_SHEET_ID, useDashboardView } from 'entities/dashboard-view';
import { f } from 'app/styles';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { CardItemType } from 'entities/dashboard-view/model/types';



const useStyles = (theme: CustomTheme) => ({
  root: {
    ...f(),
    position : 'relative',
    width    : '110px',
  },
  chip: {
    position : 'absolute',
    top      : pxToRem(6),
    right    : 0,
    height   : '24px',
  },
  select: {
    visibility : 'hidden',
    opacity    : 0,
    height     : pxToRem(38),
  },
  icon: {
    color    : theme.palette.orange.main,
    fontSize : '20px',
  },
});


interface Props {
  parentId: CardItemId
}

/** For Panel */
export const DashboardAddNewCardBtn: FC<Props> = memo(({ parentId }) => {
  const { selectedId, childrenCardItems, parentChildrenIds, serviceAddNewCard } = useDashboardView({ parentId });
  const { userId } = useUser();
  const { companyId } = useCompany();
  const sx = useStyles(useTheme());

  const [openSelect, setOpenSelect] = useState(false);


  const handleChange = (e: SelectChangeEvent) => {
    handleAdd(e.target.value as CardItemType);
    setOpenSelect(false);
  };

  const handleSelectOpen = () => setOpenSelect(true);
  const handleSelectClose = () => setOpenSelect(false);


  const handleAdd = useCallback((type: CardItemType) => {
    const cardItem = createCardItem({
      sheetId  : NO_SHEET_ID,
      parentId : parentId || selectedId, // Если нажали из панели то создастся на 1м уровне
      order    : createNextOrder(childrenCardItems),
      type,
    }, userId);
    
    serviceAddNewCard(companyId, cardItem);
  }, [parentChildrenIds, childrenCardItems, serviceAddNewCard]);


  return (
    <FormControl sx={sx.root}>
      <Tooltip title='Добавить новый элемент'>
        <MDButton
          variant   = 'outlined'
          color     = 'dark'
          startIcon = {<AddCardIcon sx={sx.icon} />}
          onClick   = {handleSelectOpen}
        >
          Добавить
        </MDButton>
      </Tooltip>

      <Select
        variant      = 'standard'
        open         = {openSelect}
        defaultValue = ''
        sx           = {sx.select}
        onClose      = {handleSelectClose}
        onChange     = {handleChange}
      >
        {
          ['box', 'text'].map((item) => <MenuItem
            key   = {item}
            value = {item}
          >
            {item}
          </MenuItem>)
        }
      </Select>
    </FormControl>
  )
});
