export { Dashboard, StatisticTypeChip, ProductTypeChip } from './ui'
export {
  DashboardEntities, DashboardDates, StateSchemaDashboard, DashboardItemData,
  DashboardStatisticItem, DashboardPeriod
} from './model/types'
export { DASHBOARD_PERIOD_TEXT, DashboardPeriodType, arrayDashboardPeriodType, DashboardStatisticType } from './model/config'
export { actions as actionsDashboard, reducer as reducerDashboard } from './model/slice'
export {
  selectLoading, selectErrors, selectActivePeriod, selectSelectedPeriod, selectLastUpdated,
  selectActiveDates, selectActiveEntities
} from './model/selectors'
export { invertData } from './model/utils'
