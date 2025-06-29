export {
  Template, PartialTemplate
} from './model/types'
export { actions as actionsDashboardTemplates, reducer as reducerDashboardTemplates } from './model/slice'
export {
  DashboardTemplatesEntities, StateSchemaDashboardTemplates
} from './model/slice/state-schema'
export { useDashboardTemplates } from './model/hooks'
export { getInitialState } from './model/utils'
export { MAX_COUNT_BUNCH_TEMPLATES } from './model/consts'
