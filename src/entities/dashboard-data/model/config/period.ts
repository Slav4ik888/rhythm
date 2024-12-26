
export enum DashboardPeriodType {
  CUSTOM       = 'custom', // Авторасчёт Даты "С"
  ONE_WEEK     = 'one_week',
  ONE_MONTH    = 'one_month',
  THREE_MONTHS = 'three_months',
  SIX_MONTHS   = 'six_months',
  NINE_MONTHS  = 'nine_months',
  ONE_YEAR     = 'one_year',
  TWO_YEARS    = 'two_years',
  THREE_YEARS  = 'three_years',
  FIVE_YEARS   = 'five_years',
  SEVEN_YEARS  = 'seven_years',
  TEN_YEARS    = 'ten_years'
}

export const DASHBOARD_PERIOD_TEXT: Record<DashboardPeriodType, string> = {
  [DashboardPeriodType.CUSTOM]       : 'Произвольный', // Автосброс Даты "С"
  [DashboardPeriodType.ONE_WEEK]     : '1 неделя',
  [DashboardPeriodType.ONE_MONTH]    : '1 месяц',
  [DashboardPeriodType.THREE_MONTHS] : '3 месяца',
  [DashboardPeriodType.SIX_MONTHS]   : '6 месяцев',
  [DashboardPeriodType.NINE_MONTHS]  : '9 месяцев',
  [DashboardPeriodType.ONE_YEAR]     : '1 год',
  [DashboardPeriodType.TWO_YEARS]    : '2 года',
  [DashboardPeriodType.THREE_YEARS]  : '3 года',
  [DashboardPeriodType.FIVE_YEARS]   : '5 лет',
  [DashboardPeriodType.SEVEN_YEARS]  : '7 лет',
  [DashboardPeriodType.TEN_YEARS]    : '10 лет'
}

export const arrayDashboardPeriodType = Array.from(Object.values(DashboardPeriodType));
