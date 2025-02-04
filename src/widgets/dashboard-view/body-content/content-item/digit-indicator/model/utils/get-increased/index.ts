import { DashboardDataEntities, Increased } from 'entities/dashboard-data';
import { ViewItem } from 'entities/dashboard-view';
import { calcIncreased } from '../calc-increased';
import { getReversedIndicators } from '../get-reversed-indicators';


export const getIncreased = (
  item           : ViewItem,
  activeEntities : DashboardDataEntities
): Increased => {
  const data = activeEntities[item.settings?.kod || '']?.data as number[] || [];
  
  const [lastValue, prevValue] = getReversedIndicators(data);

  return calcIncreased(lastValue, prevValue, item.settings?.inverted);
}
