export { Dashboard } from './ui'
export {
  DashboardEntities, DashboardDates, StateSchemaDashboard, DashboardData, DashboardPeriod
} from './model/types'
export { DASHBOARD_PERIOD_TEXT, DashboardPeriodType, arrayDashboardPeriodType } from './model/config'
export { actions as actionsDashboard, reducer as reducerDashboard } from './model/slice'
export {
  selectLoading, selectErrors, selectActivePeriod, selectSelectedPeriod, selectLastUpdated,
  selectMonthData, selectWeekData,
  selectFilteredWeekDatesColumn, selectFilteredWeekData, selectFilteredMonthDatesColumn, selectFilteredMonthData
} from './model/selectors'
