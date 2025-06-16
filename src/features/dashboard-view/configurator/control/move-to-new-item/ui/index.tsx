import { FC, memo, useCallback } from 'react';
import { createViewItem, ORDER_STEP, useDashboardView } from 'entities/dashboard-view';
import { Tooltip } from 'shared/ui/tooltip';
import { MDButton } from 'shared/ui/mui-design-components';
import MoveIcon from '@mui/icons-material/MoveUp';
import { pxToRem } from 'shared/styles';
import { blue } from '@mui/material/colors';
import { useUser } from 'entities/user';
import { useCompany } from 'entities/company';



/**
 * Создать новый Box и переместить в него этот элемент
 */
export const MoveToNewItem: FC = memo(() => {
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

    serviceCreateGroupViewItems({
      companyId     : paramsCompanyId,
      viewUpdatedMs : Date.now(),
      viewItems     : [newBoxItem]
    });

    // SelectedItem is moving to new Box
    const updatedItem = {
      id       : selectedItem.id,
      parentId : newBoxItem.id,
      order    : ORDER_STEP
    };
    serviceUpdateViewItems({
      companyId         : paramsCompanyId,
      viewItems         : [updatedItem],
      viewUpdatedMs     : Date.now(),
      newStoredViewItem : updatedItem
    });
  }, [userId, paramsCompanyId, selectedItem, serviceCreateGroupViewItems, serviceUpdateViewItems]);


  return (
    <Tooltip title='Создать новый Box и переместить в него этот элемент'>
      <MDButton
        variant   = 'outlined'
        color     = 'dark'
        startIcon = {<MoveIcon sx={{ color: blue[900], fontSize: pxToRem(20) }} />}
        onClick   = {handleClick}
        sx        = {{
          root: {
            color: blue[900],
            fontSize: '0.7rem',
          }
        }}
      >
        Box
      </MDButton>
    </Tooltip>
  )
});
