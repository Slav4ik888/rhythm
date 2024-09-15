
export enum DashboardStatisticType {
  DAY       = 'day',
  WEEK      = 'week',
  MONTH     = 'month',
  MONTH_CAL = 'month_cal' // Календарный
}


export interface DashboardStatisticTypeItem {
  label       : string
  description : string // Tooltip
}


export const DASHBOARD_STATISTIC_TYPE: Record<DashboardStatisticType, DashboardStatisticTypeItem> = {
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
