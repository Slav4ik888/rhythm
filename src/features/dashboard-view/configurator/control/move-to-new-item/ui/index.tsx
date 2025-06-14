import { FC, memo, useCallback } from 'react';
import { createViewItem, ORDER_STEP, useDashboardView } from 'entities/dashboard-view';
import { Tooltip } from 'shared/ui/tooltip';
import { MDButton } from 'shared/ui/mui-design-components';
import { CustomTheme, useTheme } from 'app/providers/theme';
import MoveIcon from '@mui/icons-material/MoveUp';
import { pxToRem } from 'shared/styles';
import { blue } from '@mui/material/colors';
import { useUser } from 'entities/user';
import { useCompany } from 'entities/company';


const useStyles = (theme: CustomTheme) => ({
  button: {
    root: {
      color: blue[900],
      fontSize: '0.7rem',
    }
  },
  helperText: {
    position  : 'absolute',
    top       : '100%',
    width     : pxToRem(400),
    maxWidth  : pxToRem(400),
    fontSize  : '0.8rem',
    color     : theme.palette.error.dark,
  },
  icon: {
    color    : blue[900],
    fontSize : pxToRem(20),
  },
});


/**
 * Создать новый Box и переместить в него этот элемент
 */
export const MoveToNewItem: FC = memo(() => {
  const sx = useStyles(useTheme());
  const { selectedItem, serviceCreateGroupViewItems, serviceUpdateViewItems } = useDashboardView();
  const { userId } = useUser();
  const { paramsCompanyId } = useCompany();


  const handleClick = useCallback(() => {
    if (! selectedItem?.id) return;

    // New Box is creating
    const newBoxItem = createViewItem(
      userId, {
        sheetId  : selectedItem.sheetId,
        parentId : selectedItem.parentId,
        order    : selectedItem.order,
        type     : 'box',
      }
    );

    serviceCreateGroupViewItems({ companyId: paramsCompanyId, viewItems: [newBoxItem] });

    // SelectedItem is moving to new Box
    const updatedItem = {
      id       : selectedItem.id,
      parentId : newBoxItem.id,
      order    : ORDER_STEP
    };
    serviceUpdateViewItems({
      companyId         : paramsCompanyId,
      viewItems         : [updatedItem],
      newStoredViewItem : updatedItem
    });
  }, [userId, paramsCompanyId, selectedItem, serviceCreateGroupViewItems, serviceUpdateViewItems]);


  return (
    <Tooltip title='Создать новый Box и переместить в него этот элемент'>
      <MDButton
        variant   = 'outlined'
        color     = 'dark'
        startIcon = {<MoveIcon sx={sx.icon} />}
        sx        = {sx.button}
        onClick   = {handleClick}
      >
        Box
      </MDButton>
    </Tooltip>
  )
});
