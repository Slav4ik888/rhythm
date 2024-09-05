export { Dashboard } from './ui'
export {
  DashboardDataSegment, StateSchemaDashboard, DashboardData, DashboardPeriodType, DashboardPeriod,
  arrayDashboardPeriodType
} from './model/types'
export { actions as actionsDashboard, reducer as reducerDashboard } from './model/slice'
export {
  selectLoading, selectErrors, selectDateEnd, selectDateStart, selectLastUpdated,
  selectMonthData, selectWeekData, selectPeriod, selectPeriodType, selectPeriodPrevType
} from './model/selectors'
