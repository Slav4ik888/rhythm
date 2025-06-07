import { Company } from 'entities/company';
import { ViewItem } from 'entities/dashboard-view';
import { isNotEmpty } from 'shared/helpers/objects';


/** Есть ли не сохранённые изменения в SelectedItem */
export const isChangedViewItem = (
  selectedId       : string,
  changedCompany   : Partial<Company>,
  changedViewItem  : Partial<ViewItem>,
  _devShowConsole? : boolean // чтобы не во всех компонентах, где используется, выводился в консоль
): boolean => {
  if (! selectedId) return false;
  
  if (isNotEmpty(changedCompany)) return true
  if (isNotEmpty(changedViewItem)) {
    if (_devShowConsole) {
      console.log('changedViewItem');
      console.log(changedViewItem);
    }
    return true
  }
  return false
};
