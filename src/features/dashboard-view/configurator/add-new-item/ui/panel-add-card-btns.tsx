import { FC, memo, useCallback, useState } from 'react';
import { Box, FormControl, MenuItem } from '@mui/material';
import { Tooltip } from 'shared/ui/tooltip';
import { CustomTheme, useTheme } from 'app/providers/theme';
import { MDButton } from 'shared/ui/mui-design-components';
import { useCompany } from 'entities/company';
import { useUser } from 'entities/user';
import { createViewItem } from 'entities/dashboard-view/model/creators';
import AddViewItemIcon from '@mui/icons-material/AddCard';
import { ViewItemId, createNextOrder, NO_SHEET_ID, useDashboardView } from 'entities/dashboard-view';
import { f, pxToRem } from 'shared/styles';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { ViewItemType } from 'entities/dashboard-view/model/types';



const useStyles = (theme: CustomTheme) => ({
  root: {
    ...f('r'),
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
  parentId: ViewItemId
}

/** For Panel */
export const PanelAddViewItemBtns: FC<Props> = memo(({ parentId }) => {
  const { selectedId, childrenViewItems, parentChildrenIds, serviceAddNewViewItem } = useDashboardView({ parentId });
  const { userId } = useUser();
  const { companyId } = useCompany();
  const sx = useStyles(useTheme());

  const [openSelect, setOpenSelect] = useState(false);


  const handleChange = (e: SelectChangeEvent) => {
    handleAdd(e.target.value as ViewItemType);
    setOpenSelect(false);
  };

  const handleSelectOpen = () => setOpenSelect(true);
  const handleSelectClose = () => setOpenSelect(false);


  const handleAdd = useCallback((type: ViewItemType) => {
    const viewItem = createViewItem({
      sheetId  : NO_SHEET_ID,
      parentId : parentId || selectedId, // Если нажали из панели то создастся на 1м уровне
      order    : createNextOrder(childrenViewItems),
      type,
    }, userId);
    
    serviceAddNewViewItem(companyId, viewItem);
  }, [parentChildrenIds, childrenViewItems, serviceAddNewViewItem]);


  return (
    <FormControl sx={sx.root}>
      <Tooltip title='Добавить новый элемент'>
        <MDButton
          variant   = 'outlined'
          color     = 'dark'
          startIcon = {<AddViewItemIcon sx={sx.icon} />}
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
