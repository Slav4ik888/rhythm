export {
  Dashboard, StatisticTypeChip, ProductTypeChip, ConditionTypeChip,
  DashboardBody_osnova_g2d7, DashboardBody_demo_pecar, DashboardBody_css_1d3r8
 } from './ui'
export {
  DashboardEntities, DashboardDates, StateSchemaDashboard, DashboardItemData,
  DashboardStatisticItem, DashboardPeriod, Increased
} from './model/types'
export { ResultChanges } from './ui/items/result-changes'
export {
  DASHBOARD_PERIOD_TEXT, DashboardPeriodType, arrayDashboardPeriodType, DashboardStatisticType,
  DashboardConditionType
 } from './model/config'
export { actions as actionsDashboard, reducer as reducerDashboard } from './model/slice'
export {
  selectLoading, selectErrors, selectActivePeriod, selectSelectedPeriod, selectLastUpdated,
  selectActiveDates, selectActiveEntities
} from './model/selectors'
export { invertData, getConditionType } from './model/utils'
