import { FC, memo, useCallback } from 'react';
import { Tooltip } from 'shared/ui/tooltip';
import { MDButton } from 'shared/ui/mui-design-components';
import { useDashboardTemplates } from 'entities/dashboard-templates';
import { MAX_COUNT_BUNCH_VIEWITEMS } from 'entities/dashboard-view';
import { getCopyViewItem, useDashboardViewServices } from 'features/dashboard-view';
import { useUser } from 'entities/user';
import { useUI } from 'entities/ui';
import { findAvailableBunchId } from 'shared/lib/structures/bunch';
import { v4 as uuidv4 } from 'uuid';
import { useCompany } from 'entities/company';



/** Кнопка добавления активного элемента шаблона в дашборд */
export const AddToDashboardBtn: FC = memo(() => {
  const { userId } = useUser();
  const { paramsCompanyId } = useCompany();
  const { setWarningMessage } = useUI();
  const { selectedId, selectedTemplate, setOpened } = useDashboardTemplates();
  const { selectedItem, viewItems, serviceCreateGroupViewItems } = useDashboardViewServices();


  const handleClick = useCallback(() => {
    if (! selectedId || ! selectedTemplate) return setWarningMessage('Не выбран элемент для добавления');

    // Copying
    const copiedViewItems = getCopyViewItem(
      { type: 'copyItemsAll', id: selectedId },
      selectedItem?.id || 'no_parentId', // Если нажали из корня
      Object.values(selectedTemplate.viewItems),
      userId
    );

    // Adding bunchId to copied items
    const availableBunchId  = findAvailableBunchId(viewItems, MAX_COUNT_BUNCH_VIEWITEMS, copiedViewItems.length);
    const bunchId           = availableBunchId ? availableBunchId : uuidv4();
    const bunchAction       = availableBunchId ? 'update' : 'create';
    const copiedWithBunchId = copiedViewItems.map(item => ({ ...item, bunchId }));

    serviceCreateGroupViewItems({
      companyId      : paramsCompanyId,
      bunchUpdatedMs : Date.now(),
      viewItems      : copiedWithBunchId,
      bunchAction,
    });

    setOpened(false);
  },
    [
      selectedItem, paramsCompanyId, viewItems, userId, selectedTemplate, selectedId,
      setOpened, setWarningMessage, serviceCreateGroupViewItems
    ]
  );


  if (! selectedId) return null;

  return (
    <Tooltip title='Добавить этот элемент в дашборд'>
      <MDButton
        variant = 'outlined'
        color   = 'primary'
        onClick = {handleClick}
      >
        Добавить в Дашборд
      </MDButton>
    </Tooltip>
  )
});
