import { DashboardViewEntities } from '../../slice/state-schema';
import { ViewItem, ViewItemChart } from '../../types';
import { getFirstItemInBranchWithGlobalKod } from '../get-first-item-in-branch-with-global-kod';


/**
 * Возвращает Kod от isGlobalKod или код самого элемента (item.settings.kod || chart?.kod)
 *  - для всех типов item.type
 */
export const getKod = (
  entities : DashboardViewEntities,
  item     : ViewItem | undefined,
  chart?   : ViewItemChart
) => {
  if (! item) return '';
  
  const globalItem = getFirstItemInBranchWithGlobalKod(entities, item.id);

  if (item.type !== 'chart') {
    if (item?.settings?.fromGlobalKod) {
      // Если Kod должен браться fromGlobalKod, то проверяем есть ли он in parentGlobalItem
      if (globalItem?.settings?.isGlobalKod && globalItem?.settings?.kod) return globalItem.settings.kod
    }
    // Возвращаем Kod текущего item
    return item?.settings?.kod || '';
  }
  else {
    if (chart?.fromGlobalKod) {
      // Если Kod должен браться fromGlobalKod, то проверяем есть ли он in parentGlobalItem
      if (globalItem?.settings?.isGlobalKod && globalItem?.settings?.kod) return globalItem.settings.kod
    }
    // Возвращаем Kod текущего chart
    return chart?.kod || '';
  }
}
