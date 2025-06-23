import { FC, memo, useCallback, useState } from 'react';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import { Tooltip } from 'shared/ui/tooltip';
import { CustomTheme } from 'app/providers/theme';
import { MDButton } from 'shared/ui/mui-design-components';
import { useCompany } from 'entities/company';
import { useUser } from 'entities/user';
import { createViewItem } from 'entities/dashboard-view/model/creators';
import AddViewItemIcon from '@mui/icons-material/AddCard';
import { ViewItemId, createNextOrder, NO_SHEET_ID, useDashboardView } from 'entities/dashboard-view';
import { f, pxToRem } from 'shared/styles';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { ViewItemType } from 'entities/dashboard-view/model/types';



interface Props {
  parentId: ViewItemId
}

/** For Panel */
export const PanelAddViewItemBtns: FC<Props> = memo(({ parentId }) => {
  const { selectedId, childrenViewItems, serviceCreateGroupViewItems } = useDashboardView({ parentId });
  const { userId } = useUser();
  const { paramsCompanyId } = useCompany();

  const [openSelect, setOpenSelect] = useState(false);

  const handleSelectOpen = () => setOpenSelect(true);
  const handleSelectClose = () => setOpenSelect(false);


  const handleAdd = useCallback((type: ViewItemType) => {
    // TODO: fix
    // const viewItems = [createViewItem(
    //   userId,
    //   {
    //     sheetId  : NO_SHEET_ID,
    //     parentId : parentId || selectedId, // Если нажали из панели то создастся на 1м уровне
    //     order    : createNextOrder(childrenViewItems),
    //     type,
    //   }
    // )];

    // serviceCreateGroupViewItems({ companyId: paramsCompanyId, viewItems, viewUpdatedMs: Date.now() });
  }, [userId, paramsCompanyId, selectedId, parentId, childrenViewItems, serviceCreateGroupViewItems]);


  const handleChange = useCallback((e: SelectChangeEvent) => {
    handleAdd(e.target.value as ViewItemType);
    setOpenSelect(false);
  }, [handleAdd]);


  return (
    <FormControl
      sx={{
        ...f('r'),
        position : 'relative',
        width    : '110px',
      }}
    >
      <Tooltip title='Добавить новый элемент'>
        <MDButton
          variant   = 'outlined'
          color     = 'dark'
          startIcon = {<AddViewItemIcon sx={(theme) => ({
            color    : (theme as CustomTheme).palette.orange.main,
            fontSize : pxToRem(20)
          })} />}
          onClick   = {handleSelectOpen}
        >
          Добавить
        </MDButton>
      </Tooltip>

      <Select
        variant      = 'standard'
        open         = {openSelect}
        defaultValue = ''
        onClose      = {handleSelectClose}
        onChange     = {handleChange}
        sx           = {{
          visibility : 'hidden',
          opacity    : 0,
          height     : pxToRem(38),
        }}
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
