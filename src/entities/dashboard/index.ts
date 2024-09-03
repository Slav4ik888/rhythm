export { Dashboard } from './ui'
export { DashboardDataSegment, StateSchemaDashboard, DashboardData, DashboardPeriod } from './model/types'
export { actions as actionsDashboard, reducer as reducerDashboard } from './model/slice'
export {
  selectLoading, selectErrors, selectDateEnd, selectDateStart, selectLastUpdated,
  selectMonthData, selectWeekData, selectSelectedPeriod
} from './model/selectors'
