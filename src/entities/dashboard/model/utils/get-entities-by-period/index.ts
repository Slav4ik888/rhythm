import { DashboardDates, DashboardEntities, DashboardPeriodDates, DashboardStatisticItem } from '../../types';
import { getStartIdx } from './get-start-idx';
import { getEndIdx } from './get-end-idx';



export interface PayloadGetEntitiesByPeriod {
  activeEntities : DashboardEntities
  activeDates    : DashboardDates
}


/** Returns startEntities & startDates by period  */
export function getEntitiesByPeriod(
  startEntities : DashboardEntities,
  startDates    : DashboardDates,
  period        : DashboardPeriodDates
): PayloadGetEntitiesByPeriod {

  const activeEntities: DashboardEntities = {};
  const activeDates: DashboardDates = {};
  

  // Обрабатываем каждую вкладку 
  for (const statisticType in startDates) {

    if (Object.prototype.hasOwnProperty.call(startDates, statisticType)) {
      console.log(1);
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

  console.log('activeEntities: ', activeEntities);
  console.log('activeDates: ', activeDates);

  return {
    activeEntities,
    activeDates
  }
}
