import { DashboardItemType } from 'entities/dashboard';
import { DashboardStatisticType } from '../types';



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
