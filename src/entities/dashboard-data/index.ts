export {
  DashboardItemData, DashboardStatisticItem, DashboardPeriod, Increased, DashboardItemType, SidebarRouteListItem,
} from './model/types'
export {
  DASHBOARD_PERIOD_TEXT, DashboardPeriodType, arrayDashboardPeriodType,
  routesList_css_1d3r8, routesList_demo_pecar, routesList_osnova_g2d7
} from './model/config'
export { actions as actionsDashboardData, reducer as reducerDashboardData } from './model/slice'
export { DashboardDataEntities, DashboardDataDates, StateSchemaDashboardData } from './model/slice/state-schema'
export { checkInvertData, getInitialState } from './model/utils'
export { useDashboardData } from './model/hooks'
