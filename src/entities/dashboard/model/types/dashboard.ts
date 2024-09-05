

export enum DashboardPeriodType {
  CUSTOM       = 'Произвольный', // Автосброс Даты "С"
  ONE_WEEK     = '1 неделя',
  ONE_MONTH    = '1 месяц',
  THREE_MONTHS = '3 месяца',
  SIX_MONTHS   = '6 месяцев',
  NINE_MONTHS  = '9 месяцев',
  ONE_YEAR     = '1 год',
  TWO_YEARS    = '2 года',
  THREE_YEARS  = '3 года',
  FIVE_YEARS   = '5 лет',
  SEVEN_YEARS  = '7 лет',
  TEN_YEARS    = '10 лет'
}

export type DashboardDataSegment = Array<Array<string | number>>
export const arrayDashboardPeriodType = Array.from(Object.values(DashboardPeriodType));

export interface DashboardPeriod {
  type     : DashboardPeriodType // Выбранный тип
  prevType : DashboardPeriodType // Предыдущий тип
  start    : number
  end      : number
}


export interface DashboardData {
  weekData    : DashboardDataSegment
  monthData   : DashboardDataSegment
  
  period      : DashboardPeriod

  lastUpdated : number // Дата последнего обновления
}

// export type GetDashboardData = Omit<DashboardData, 'lastUpdated'>
