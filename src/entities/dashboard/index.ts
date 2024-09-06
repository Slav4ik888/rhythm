export { Dashboard } from './ui'
export {
  DashboardDataSegment, StateSchemaDashboard, DashboardData, DashboardPeriod
} from './model/types'
export { DASHBOARD_PERIOD_TEXT, DashboardPeriodType, arrayDashboardPeriodType } from './model/config'
export { actions as actionsDashboard, reducer as reducerDashboard } from './model/slice'
export {
  selectLoading, selectErrors, selectActivePeriod, selectSelectedPeriod, selectLastUpdated,
  selectMonthData, selectWeekData
} from './model/selectors'
