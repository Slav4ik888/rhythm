export type {
  Company, ColorSettingsType, CustomSettings, PartialCompany, ParamsCompany
} from './types'
export type { AccessLevel, CompanyDashboardMember, CompanyDashboardAccess } from './model/hooks'
export { checkDashboardAccess, useCompany, useAccess, CompanyDashboardAccessScheme } from './model/hooks'
export type { StateSchemaCompany } from './model/slice'
export { reducer as reducerCompany, actions as actionsCompany } from './model/slice'
export type { SetCompany } from './model/slice/types'
export { creatorCompany } from './lib/creators'
export { ACCESS_TYPE, ACCESS_LABELS, ACCESS_LABEL_TYPE } from './lib/consts'
