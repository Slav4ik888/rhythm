import { ViewItem, DashboardViewEntities } from 'entities/dashboard-view';
import { getFirstItemInBranchWithGlobalKod } from '../get-first-item-in-branch-with-global-kod';


/** Возвращает Kod для всех type !== chart */
export const getKod = (
  entities : DashboardViewEntities,
  item     : ViewItem
) => {
  // Если Kod должен браться fromGlobalKod, то проверяем есть ли он in parentGlobalItem
  if (item?.settings?.fromGlobalKod) {
    const globalItem = getFirstItemInBranchWithGlobalKod(entities, item.id);
    if (globalItem?.settings?.isGlobalKod && globalItem?.settings?.kod) return globalItem.settings.kod
  }

  // Возвращаем Kod текущего item
  return item?.settings?.kod || '';
}
