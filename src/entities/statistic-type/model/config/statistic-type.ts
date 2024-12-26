import { DashboardItemType } from 'entities/dashboard-data';
import { DashboardStatisticType } from '../types';



export const STATISTIC_TYPE: Record<DashboardStatisticType, DashboardItemType> = {
  ['day']: {
    label       : 'Ден',
    description : 'Ежедневная статистика'
  },
  ['week']: {
    label       : 'Нед',
    description : 'Недельная статистика'
  },
  ['month']: {
    label       : 'Мес',
    description : 'Месячная статистика'
  },
  ['month_cal']: {
    label       : 'МеК',
    description : 'Месячная статистика (по календарному месяцу)'
  }
}

// export const arrayDashboardStatisticType = Array.from(Object.values(DashboardStatisticType));
export const arrayDashboardStatisticType = Array.from(Object.keys(STATISTIC_TYPE));
