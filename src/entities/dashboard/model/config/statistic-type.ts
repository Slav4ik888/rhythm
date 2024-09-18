import { DashboardItemType } from '../types';


export enum DashboardStatisticType {
  DAY       = 'day',
  WEEK      = 'week',
  MONTH     = 'month',
  MONTH_CAL = 'month_cal' // Календарный
}


export const STATISTIC_TYPE: Record<DashboardStatisticType, DashboardItemType> = {
  [DashboardStatisticType.DAY]: {
    label       : 'Ден',
    description : 'Ежедневная статистика'
  },
  [DashboardStatisticType.WEEK]: {
    label       : 'Нед',
    description : 'Недельная статистика'
  },
  [DashboardStatisticType.MONTH]: {
    label       : 'Мес',
    description : 'Месячная статистика'
  },
  [DashboardStatisticType.MONTH_CAL]: {
    label       : 'МеК',
    description : 'Месячная статистика (по календарному месяцу)'
  }
}

export const arrayDashboardStatisticType = Array.from(Object.values(DashboardStatisticType));
