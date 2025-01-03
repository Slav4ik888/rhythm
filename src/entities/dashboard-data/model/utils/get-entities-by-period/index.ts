import { DashboardPeriodDates, DashboardStatisticItem } from '../../types';
import { getStartIdx } from './get-start-idx';
import { getEndIdx } from './get-end-idx';
import { DashboardDataDates, DashboardDataEntities } from '../../slice/state-schema';



export interface PayloadGetEntitiesByPeriod {
  activeEntities : DashboardDataEntities
  activeDates    : DashboardDataDates
}


/** Returns startEntities & startDates by period  */
export function getEntitiesByPeriod(
  startEntities : DashboardDataEntities,
  startDates    : DashboardDataDates,
  period        : DashboardPeriodDates
): PayloadGetEntitiesByPeriod {

  const activeEntities: DashboardDataEntities = {};
  const activeDates: DashboardDataDates = {};
  

  // Обрабатываем каждую вкладку 
  for (const statisticType in startDates) {
    if (Object.prototype.hasOwnProperty.call(startDates, statisticType)) {
      const startIdx = getStartIdx(startDates[statisticType], period);
      const endIdx   = getEndIdx(startDates[statisticType], period);
      activeDates[statisticType] = [...startDates[statisticType].slice(startIdx, endIdx + 1)];

      // Перебрать все startEntities и для текущего statisticType обрезать нужный период дат
      for (const kod in startEntities) {
        if (Object.prototype.hasOwnProperty.call(startEntities, kod)) {
          if (startEntities[kod].statisticType === statisticType) {
            activeEntities[kod] = {} as DashboardStatisticItem;
            activeEntities[kod] = { ...startEntities[kod] };
            activeEntities[kod].data = [...startEntities[kod].data.slice(startIdx, endIdx + 1)];
          }
        }
      }
    }
  }

  return {
    activeEntities,
    activeDates
  }
}
