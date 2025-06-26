import { FC, memo, useCallback } from 'react';
import { createViewItem, findAvailableBunchId, ORDER_STEP, useDashboardView } from 'entities/dashboard-view';
import { Tooltip } from 'shared/ui/tooltip';
import { MDButton } from 'shared/ui/mui-design-components';
import MoveIcon from '@mui/icons-material/MoveUp';
import { pxToRem } from 'shared/styles';
import { blue } from '@mui/material/colors';
import { useUser } from 'entities/user';
import { useCompany } from 'entities/company';
import { updateObject } from 'shared/helpers/objects';
import { getColorByType } from 'shared/ui/configurators-components/add-btn/get-color-by-type';



/**
 * Создать новый Box и переместить в него этот элемент
 */
export const MoveToNewItem: FC = memo(() => {
  const { selectedItem, viewItems, serviceCreateGroupViewItems, serviceUpdateViewItems } = useDashboardView();
  const { userId } = useUser();
  const { paramsCompanyId } = useCompany();


  const handleClick = useCallback(() => {
    if (! selectedItem?.id) return;

    // New Box is creating
    const availableBunchId = findAvailableBunchId(viewItems);

    const newBoxItem = createViewItem(userId,
      {
        sheetId  : selectedItem.sheetId,
        bunchId  : availableBunchId,
        parentId : selectedItem.parentId,
        order    : selectedItem.order,
        type     : 'box',
      }
    );

    const bunchUpdatedMs = Date.now();
    serviceCreateGroupViewItems({
      companyId      : paramsCompanyId,
      viewItems      : [newBoxItem],
      bunchAction    : availableBunchId ? 'update' : 'create',
      bunchUpdatedMs,
    });

    // SelectedItem is moving to new Box
    const updatedItem = {
      id       : selectedItem.id,
      bunchId  : selectedItem.bunchId,
      parentId : newBoxItem.id,
      order    : ORDER_STEP
    };
    serviceUpdateViewItems({
      companyId         : paramsCompanyId,
      viewItems         : [updatedItem],
      newStoredViewItem : updateObject(selectedItem, updatedItem),
      bunchUpdatedMs,
    });
  }, [userId, paramsCompanyId, selectedItem, viewItems, serviceCreateGroupViewItems, serviceUpdateViewItems]);


  return (
    <Tooltip title='Создать новый Box и переместить в него этот элемент'>
      <MDButton
        variant   = 'outlined'
        color     = 'dark'
        startIcon = {<MoveIcon sx={{ color: getColorByType('box'), fontSize: pxToRem(20) }} />}
        onClick   = {handleClick}
        sx        = {{
          root: {
            color: getColorByType('box'),
            fontSize: '0.7rem',
          }
        }}
      >
        Box
      </MDButton>
    </Tooltip>
  )
});
