import { AccessLevel } from './base';


/** Права к дашборду компании  */
export interface CompanyDashboardAccess {
  f: AccessLevel // full
  // aU: boolean     // addUsers
  // anyFields: AccessLevel
}


/** Участник с правами к дашборду компании */
export interface CompanyDashboardMember {
  e : string // email
  a : CompanyDashboardAccess
}


export enum CompanyDashboardAccessScheme {
  AF = 'a.f'
}


// Пользователь написал email кому хочет дать доступ
// Валидируем email
// Проверяем есть ли этот пользователь в базе (получаем его UserId)
//  - Есть - создаём CompanyMember и наполняем правами
//  - Нет - создаём User, получаем обратно его UserId
