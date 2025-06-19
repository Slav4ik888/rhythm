/** Уровни доступа */
export type AccessLevel = 'n' | 'v' | 'e' // 'none' | 'view' | 'edit'

/** Права к профилю компании */
export interface CompanyProfileAccess {
  f? : AccessLevel // full Изначально только владелец
  // aU? : boolean     // addUsers
  // anyFields: AccessLevel
}

/** Права к дашборду компании  */
export interface CompanyDashboardAccess {
  f: AccessLevel // full
  // aU: boolean     // addUsers
  // anyFields: AccessLevel
}

/** Права к профилю и дашборду компании */
export interface CompanyAccess {
  d  : CompanyDashboardAccess
  p? : CompanyProfileAccess
}

/** Участник компании */
export interface CompanyMember {
  e : string // email
  a : CompanyAccess
}

type UserIdType = string
export type CompanyMembers = Record<UserIdType, CompanyMember>;

// Пользователь написал email кому хочет дать доступ
// Валидируем email
// Проверяем есть ли этот пользователь в базе (получаем его UserId)
//  - Есть - создаём CompanyMember и наполняем правами
//  - Нет - создаём User, получаем обратно его UserId
