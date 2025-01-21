import { CardItem } from 'entities/dashboard-view';


/** 
 * Если это chart то берём код 1го графика
 * Если это состояние, тогда убираем '-C', чтобы вывелся title названия статистики
 */
export const getKod = (selectedItem: CardItem): string => {
  if (selectedItem.type === 'chart') {
    return selectedItem?.settings?.charts?.[0]?.kod || ''
  }
  else return selectedItem?.settings?.kod?.endsWith('-C')
    ? selectedItem?.settings?.kod?.replace('-C', '')
    : selectedItem?.settings?.kod
    || '';
}
