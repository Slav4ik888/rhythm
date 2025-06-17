// Уровни доступа
export type AccessLevel = 'none' | 'view' | 'edit'

// Права к профилю компании
export interface CompanyProfileAccess {
  allFields: AccessLevel // Только владелец
  // anyFields: AccessLevel
}

// Права к дашборду компании
export interface CompanyDashboardAccess {
  allFields: AccessLevel
  // anyFields: AccessLevel
}

// Права к профилю и дашборду компании
export interface CompanyAccess {
  profile   : CompanyProfileAccess
  dashboard : CompanyDashboardAccess
}

// Участник компании
export interface CompanyMember {
  email  : string
  access : CompanyAccess
}

type UserIdType = string
export type CompanyMembers = Record<UserIdType, CompanyMember>;

// Пользователь написал email кому хочет дать доступ
// Валидируем email
// Проверяем есть ли этот пользователь в базе (получаем его UserId)
//  - Есть - создаём CompanyMember и наполняем правами
//  - Нет - создаём User, получаем обратно его UserId
