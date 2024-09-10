import { DashboardPeriodDates } from '../../../types';


/** Возвращает индекс в массиве с датами, где начинается подходящий нам период */
export const getStartIdx = (
  dates  : string[],
  period : DashboardPeriodDates
): number => period?.start
  ? dates?.findIndex(item => new Date(item).getTime() >= (period.start as number))
  : 0;
