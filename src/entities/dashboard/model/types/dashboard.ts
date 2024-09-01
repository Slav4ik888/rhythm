
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


export type DashboardData = Array<Array<string | number>>
