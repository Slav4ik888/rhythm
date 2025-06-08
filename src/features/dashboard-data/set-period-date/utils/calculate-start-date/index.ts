/* eslint-disable */
import { DashboardPeriodType } from 'entities/dashboard-data'
import { __devLog } from 'shared/lib/tests/__dev-log';

interface ResSplitDate {
  year  : number
  month : number
  day   : number
}

/** Отдаёт объект с year, month, day */
const splitDate = (dateMs: number): ResSplitDate => {
  const dates = new Date(dateMs);

  return {
    year  : dates.getFullYear(),
    month : dates.getMonth(),
    day   : dates.getDate()
  }
}


/** Рассчитывает начальную дату по входящим параметрам */
const calcStartDate = (
  dateMs     : number | undefined,
  shiftYear  : number,
  shiftMonth = 0,
  shiftDay   = 0
): number | undefined => {
  if (! dateMs) return;

  const { year, month, day } = splitDate(dateMs);

  // const startDate = new Date(year + shiftYear, month + shiftMonth, day + 1 + shiftDay, 23, 59, 59, 999);
  const startDate = new Date(year + shiftYear, month + shiftMonth, day + 1 + shiftDay, 0, 0, 0, 1);
  // console.log('startDate: ', startDate);

  return startDate.getTime()
}



/** Рассчитывает стартовую дату */
export const calculateStartDate = (endDate: number | undefined, type: DashboardPeriodType): number | undefined => {
  // На период монтирования будет undefined
  if (! type) return;

  switch (type) {
    case DashboardPeriodType.ONE_WEEK:     return calcStartDate(endDate, 0, 0, -7);
    case DashboardPeriodType.ONE_MONTH:    return calcStartDate(endDate, 0, -1);
    case DashboardPeriodType.THREE_MONTHS: return calcStartDate(endDate, 0, -3);
    case DashboardPeriodType.SIX_MONTHS:   return calcStartDate(endDate, 0, -6);
    case DashboardPeriodType.NINE_MONTHS:  return calcStartDate(endDate, 0, -9);
    case DashboardPeriodType.ONE_YEAR:     return calcStartDate(endDate, -1);
    case DashboardPeriodType.TWO_YEARS:    return calcStartDate(endDate, -2);
    case DashboardPeriodType.THREE_YEARS:  return calcStartDate(endDate, -3);
    case DashboardPeriodType.FIVE_YEARS:   return calcStartDate(endDate, -5);
    case DashboardPeriodType.SEVEN_YEARS:  return calcStartDate(endDate, -7);
    case DashboardPeriodType.TEN_YEARS:    return calcStartDate(endDate, -10);

    default: __devLog('Unknown period type:', type)
  }
  return;
}
