

export enum DashboardPeriod {
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

export interface DashboardData {
  weekData       : DashboardDataSegment
  monthData      : DashboardDataSegment
  
  selectedPeriod : DashboardPeriod
  dateStart      : number | undefined
  dateEnd        : number | undefined

  lastUpdated    : number // Дата последнего обновления
}

// export type GetDashboardData = Omit<DashboardData, 'lastUpdated'>
