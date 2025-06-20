export {
  Company, ColorSettingsType, CustomSettings, PartialCompany, ParamsCompany, AccessLevel, CompanyDashboardMember,
  CompanyDashboardAccessScheme, CompanyDashboardAccess
 } from './model/types'
export { StateSchemaCompany, reducer as reducerCompany, actions as actionsCompany } from './model/slice'
export { SetCompany } from './model/slice/types'
export { useCompany } from './model/hooks'
export { creatorCompany } from './model/creators'
export { ACCESS_TYPE, ACCESS_LABELS, ACCESS_LABEL_TYPE } from './model/consts'
export { checkDashboardAccess } from './model/utils'
