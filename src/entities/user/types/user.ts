import { ItemBase } from 'entities/base'
import { Person } from './person'
import { Role } from './roles'
// import { UserSettings } from './user-settings'



/** Типы состояние пользователя */
export enum UserStatus {
  NEW      = 'NEW',      // Зарегистрировался
  VERIFIED = 'VERIFIED', // Подтвердил регистрацию
  ACTIVE   = 'ACTIVE',   // Активный
  DISABLED = 'DISABLED', // Отключенный
  DELETED  = 'DELETED',  // Удалённый
}


/** При выборе нового элемента с помощью ListSelect  */
export type NewUserStatus = {
  status: UserStatus
}


/** Пользователь */
export interface User extends ItemBase {
  companyId     : string

  person        : Person
  email         : string  // korzan.va@mail.ru
  permissions   : boolean // Разрешения на обработку персональных данных

  role          : Role
  emailVerified : boolean
  status        : UserStatus

  isEditAccess? : boolean // Временный запрет для всех на доступ к Конструктору
  // settings?     : UserSettings
}
