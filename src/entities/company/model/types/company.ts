import { FixDate } from 'entities/base';
import { CompanyMembers } from './access';



export enum CompanyStatus {
  NEW     = 'NEW',    // 'Зарегистрирован'
  ACTIVE  = 'ACTIVE', // 'Активный'
  REMOVED = 'REMOVED' // 'Удалён'
}


export interface GoogleData {
  url: string
}

// export type CompanyDashboardData = ReactElement<any, any>

/** Для сохранения уникальных настроек переменных (цветов и констант) */
export type ColorSettingsType = 'color' | 'background'

export interface ColorSettings {
  title?      : string // Можно исп для periodType, напр. "Мес" | "Нед"
  color?      : string
  background? : string
}

export interface CustomSettings {
  // [key: string]: ColorSettings
  periodType?  : Record<string, ColorSettings>
  companyType? : Record<string, ColorSettings>
  productType? : Record<string, ColorSettings>
}

/**
 * v.2025-06-16
 * Профиль компании
 */
export interface Company {
  id             : string
  companyName    : string
  ownerId        : string
  owner          : string // email

  logoUrl        : string // https://firebasestorage.googleapis.com/v0/b/osnova-course.appspot.com/o/no-img-company.svg?alt=media
  status         : CompanyStatus

  googleData     : GoogleData
  // dashboardData  : CompanyDashboardData
  customSettings : CustomSettings
  viewUpdated    : FixDate // Timestamp last ViewItems updated. При любом изменении ViewItems - обновляем

  members        : CompanyMembers
  createdAt      : FixDate
  lastChange     : FixDate
}

export type PartialCompany = Partial<Company> & { id: string }

/** Обязательные поля для чужого пользователя прошедшего по ссылке */
export type ParamsCompany = Partial<Company> & {
  id             : string
  customSettings : CustomSettings
  googleData     : GoogleData
  viewUpdated    : FixDate // Timestamp last ViewItems updated
  members        : CompanyMembers
}
