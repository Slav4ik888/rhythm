export { User, StateSchemaUser } from './model/types'
export { useUser } from './model/hooks'

export {
  actions as actionsUser,
  reducer as reducerUser
} from './model/slice'

export { getStartResourseData, logout } from './model/services'

export { selectUserId } from './model/selectors'
export { schemas } from './model/validators'

export { MOCK_USER_ID, MOCK_POSITION_ID, MOCK_POSITION_IDS_10A, MOCK_POSITION_IDS_10B,
MOCK_POSITION_IDS_10C, MOCK_POSITION_IDS_10D } from './model/mocks'
