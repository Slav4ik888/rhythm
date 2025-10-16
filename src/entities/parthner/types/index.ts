import { CompanyId } from 'entities/company';

// http://localhost:3000/demo/?ref=5994014


/** Данные участника начавшего регистрацию */
export interface PartnerRegisterStartedData {
  email       : string
  companyName : string
  firstName   : string
  createdAt   : number // Время регистрации
}

/** Данные участника зарегистрированного */
export interface PartnerRegisteredData {
  companyId : string // ID компании пользователя
  createdAt : number // Время регистрации
}


/** Инфо по партнёрским делам */
export interface PartnerData {
  id                   : string // Его ID как партнёра, если зарегистрирован у нас
  userId?              : string // ID пользователя, если зарегистрирован у нас
  companyId?           : CompanyId // если зарегистрирован у нас

  followers?           : number // Кол-во переходов по реферальной ссылке

  // Кол-во регистраций по реферальной ссылке
  registerStarted?     : number // Кол-во начавших регистрацию
  registerStartedData? : Record<CompanyId, PartnerRegisterStartedData>
  registered?          : number // Кол-во завершивших регистрацию
  registeredData?      : Record<CompanyId, PartnerRegisteredData>

  // Кол-во оплат по реферальной ссылке
  paid?                : number // Кол-во

  // └→ List: Payment Date | Company | User (Full Name)

  //     └→ Список: Дата регистрации | Компания | пользователь (ФИО)
  //  - Оплатили
  //     └→ Список: Дата оплаты | Компания | пользователь (ФИО)
}

// ◦ ⤵ ↳ └ →
//  -
