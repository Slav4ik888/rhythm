export {
  Company, ColorSettingsType, CustomSettings, PartialCompany, ParamsCompany, AccessLevel, CompanyMember
 } from './model/types'
export { StateSchemaCompany, reducer as reducerCompany, actions as actionsCompany } from './model/slice'
export { SetCompany } from './model/slice/types'
export { useCompany } from './model/hooks'
export { creatorCompany } from './model/creators'
export { ACCESS_TYPE } from './model/consts'
