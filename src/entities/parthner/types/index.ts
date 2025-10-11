import { CompanyId } from 'entities/company';

// http://localhost:3000/demo/?ref=5994014


export interface PartnerRegisterData {
  companyId    : string // ID компании пользователя
  registration : number // Время регистрации
}


/** Инфо по партнёрским делам */
export interface PartnerData {
  id           : string // Его ID как партнёра, если зарегистрирован у нас

  followers    : number // Кол-во переходов по реферальной ссылке

  // Кол-во регистраций по реферальной ссылке
  registers    : number // Кол-во
  registerData : Record<CompanyId, PartnerRegisterData>

  // Кол-во оплат по реферальной ссылке
  paid         : number // Кол-во

  // └→ List: Payment Date | Company | User (Full Name)

  //     └→ Список: Дата регистрации | Компания | пользователь (ФИО)
  //  - Оплатили
  //     └→ Список: Дата оплаты | Компания | пользователь (ФИО)
}

// ◦ ⤵ ↳ └ →
//  -
