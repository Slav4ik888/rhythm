import { Company } from 'entities/company';
import { ViewItem } from 'entities/dashboard-view';
import { isNotEmpty } from 'shared/helpers/objects';


/** Есть ли не сохранённые изменения в SelectedItem */
export const isChangedViewItem = (
  selectedId      : string,
  changedCompany  : Partial<Company>,
  changedViewItem : Partial<ViewItem>
): boolean => {
  if (! selectedId) return false;
  
  if (isNotEmpty(changedCompany)) return true
  if (isNotEmpty(changedViewItem)) {
    console.log('changedViewItem: ', changedViewItem);
    return true
  }
  return false
};
