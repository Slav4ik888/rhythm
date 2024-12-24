import { FixDate } from 'entities/base';
import { ReactElement } from 'react';


/**
 * Временно для компаний которых я подключил к Ритму
 * До тех пор пока не сделаю возможность настройки dashboard в виде Конструктора
 * с сохранением конструкции в аккаунте компании
 * 
 * Need double in Server
 */
export enum ActivatedCompanyId {
  OSNOVA     = "89MM9qHJLJlY5DZp1T9S",
  CSS        = "jOiXJDIY0nJeiIuBMtI4",
  DEMO_PECAR = "demo_pecar",
}


export enum CompanyStatus {
  NEW     = 'NEW',    // 'Зарегистрирован'
  ACTIVE  = 'ACTIVE', // 'Активный'
  REMOVED = 'REMOVED' // 'Удалён'
}


export interface GoogleData {
  url: string
}

export type CompanyDashboardData = ReactElement<any, any>


export interface Company {
  id            : string
  companyName   : string
  ownerId       : string
  owner         : string // email

  logoUrl       : string // https://firebasestorage.googleapis.com/v0/b/osnova-course.appspot.com/o/no-img-company.svg?alt=media
  status        : CompanyStatus

  googleData    : GoogleData
  dashboardData : CompanyDashboardData

  createdAt     : FixDate
  lastChange    : FixDate
}
