import { DashboardItemType } from 'entities/dashboard-data';
import { StatisticPeriodType } from '../types';



export const STATISTIC_PERIOD_TYPE: Record<StatisticPeriodType, DashboardItemType> = {
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

export const arrayStatisticPeriodType = Array.from(Object.keys(STATISTIC_PERIOD_TYPE));
