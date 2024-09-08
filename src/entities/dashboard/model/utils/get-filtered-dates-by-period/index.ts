import { DashboardDataSegment, DashboardDataSegmentColumnDates, DashboardPeriodDates } from '../../types';


/** Возвращает колонку с датами попадающими в период */
export const getFilteredDatesByPeriod = (
  data   : DashboardDataSegment,
  period : DashboardPeriodDates
): DashboardDataSegmentColumnDates => (data[0] as DashboardDataSegmentColumnDates).filter((item) => {

  if (! item) return false // пустая ячейка
    
  const date = new Date(item).getTime();
  
  // Если период не задан
  if (! period?.start) {
    if (! period?.end) return true

    return date <= period?.end
  }
  if (! period?.end) {
    return date >= period?.start
  }
  
  return date >= period?.start && date <= period?.end
});
