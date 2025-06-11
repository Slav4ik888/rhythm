import { FC, memo, useCallback, useEffect } from 'react';
import { useDashboardView } from 'entities/dashboard-view';
import { isEmpty, isNotEmpty } from 'shared/helpers/objects';
import { useCompany } from 'entities/company';
import { isChangedViewItem } from '../model/utils';
import { __devLog } from 'shared/lib/tests/__dev-log';
import { UnsavedChangesComponent } from './component';



export const UnsavedChanges: FC = memo(() => {
  const { companyId, changedCompany, serviceUpdateCompany, cancelCustomSettings } = useCompany();
  const {
    loading, selectedId, changedViewItem, isUnsaved,
    setIsUnsaved, serviceUpdateViewItems, cancelUpdateViewItem
  } = useDashboardView();

  useEffect(() => {
    isChangedViewItem(selectedId, changedCompany, changedViewItem, true)
      ? setIsUnsaved(true)
      : setIsUnsaved(false);
  }, [selectedId, changedCompany, changedViewItem, setIsUnsaved]);


  const handleCancel = useCallback(() => {
    if (isNotEmpty(changedCompany)) cancelCustomSettings(); /** Отменить изменившиеся customSettings */
    if (isNotEmpty(changedViewItem)) cancelUpdateViewItem(); /** Отменить изменившиеся поля | стили */
  }, [changedCompany, changedViewItem, cancelCustomSettings, cancelUpdateViewItem]);


  const handleClick = useCallback(() => {
    if (isNotEmpty(changedCompany)) serviceUpdateCompany({ id: companyId, ...changedCompany }); /** Сохраняем изменившиеся customSettings */
    if (isEmpty(changedViewItem)) return
    /** Сохраняем изменившиеся поля | стили */
    const viewItem = { id: selectedId, ...changedViewItem };
    serviceUpdateViewItems({ companyId, viewItems: [viewItem], newStoredViewItem: viewItem });
  }, [companyId, selectedId, changedCompany, changedViewItem, serviceUpdateViewItems, serviceUpdateCompany]);

  const handleConsole = useCallback(() => {
    if (isNotEmpty(changedCompany)) {
      __devLog('changedCompany:', '--force');
      __devLog(JSON.stringify(changedCompany, null, 2), '--force');
    }
    if (isNotEmpty(changedViewItem)) {
      __devLog('changedViewItem:', '--force');
      __devLog(JSON.stringify(changedViewItem, null, 2), '--force');
    }
  }, [changedCompany, changedViewItem]);


  if (! isUnsaved) return null;


  return (
    <UnsavedChangesComponent
      loading         = {loading}
      changedCompany  = {changedCompany}
      changedViewItem = {changedViewItem}
      onClick         = {handleClick}
      onConsole       = {handleConsole}
      onCancel        = {handleCancel}
    />
  )
});
