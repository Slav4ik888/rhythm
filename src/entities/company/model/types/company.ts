import { FixDate } from 'entities/base';
import { ReactElement } from 'react';


export enum CompanyId {
  OSNOVA     = "osnova_g2d7",
  CSS        = "css_1d3r8",
  DEMO_PECAR = "demo_pecar",
}
   
export enum CompanyStatus {
  NEW     = 'NEW',    // 'Зарегистрирован'
  ACTIVE  = 'ACTIVE', // 'Активный'
  REMOVED = 'REMOVED' // 'Удалён'
}

export type CompanyDashboardData = ReactElement<any, any>

export interface CompanyData {
  id            : string
  companyName   : string
  ownerId       : string
  owner         : string // email

  logoUrl       : string // https://firebasestorage.googleapis.com/v0/b/osnova-course.appspot.com/o/no-img-company.svg?alt=media
  status        : CompanyStatus

  dashboardData : CompanyDashboardData

  createdAt     : FixDate
  lastChange    : FixDate
}
