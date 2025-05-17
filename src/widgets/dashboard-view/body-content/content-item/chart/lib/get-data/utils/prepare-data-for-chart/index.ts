import { DashboardDataDates, DashboardStatisticItem } from 'entities/dashboard-data';
import { StatisticPeriodType } from 'entities/statistic-type';


/**
 * Опираясь на greatestPeriodType преобразует данные для построения графика
 *  - если periodType === greatestPeriodType данные отдаются как есть,
 *  - если нет, то даты из periodType подстраиваем под greatestPeriodType и определяем индекс для них
 *    (чтобы копировать данные для этого)
 *    иначе сравниваются даты в greatestPeriodType и в periodType,
 *    те данные по которым даты совпадают остаются, а там где не совпадают заменяются NaN-ами
 */
export const prepareDataForChart = (
  itemData           : DashboardStatisticItem<number>,
  allActiveDates     : DashboardDataDates,
  greatestPeriodType : StatisticPeriodType,
): number[] => {
  // Если отличается от greatestPeriodType
  if (itemData.periodType === greatestPeriodType) return itemData.data

  const greatestDates = allActiveDates[greatestPeriodType];
  const itemDates = allActiveDates[itemData.periodType];

  // Индекс обработанной даты в itemDates
  let itemProcessedIdx = -1;

  const result = greatestDates.map(currentGreatestDate => {
    const dateInItemIdx = itemDates?.findIndex(dateInItem => dateInItem === currentGreatestDate);

    // 1 - Дата из periodType есть в DATE
    if (dateInItemIdx !== -1) {
      itemProcessedIdx = dateInItemIdx;
      return itemData.data[dateInItemIdx];
    }

    // 2 - Даты из periodType нет (не равна ни одной из) в DATE
    // 2-1 - Текущая необработанная дата из periodType < currentGreatestDate
    if (itemDates[itemProcessedIdx + 1] < currentGreatestDate) {
      itemProcessedIdx++;
      return itemData.data[itemProcessedIdx];
    }
    // 2-2 - Текущая необработанная дата из periodType > currentGreatestDate
    return NaN
  });

  return result
}
