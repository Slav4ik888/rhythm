import { creatorFixDate } from 'entities/base/model/creators';
import { cloneObj } from 'shared/helpers/objects';
import { CompanyDashboardData, CompanyData, CompanyStatus } from '../../types';



export const creatorCompany = (cfg: Partial<CompanyData> = {} as CompanyData): CompanyData => cloneObj({
  id            : cfg.id          || '',
  companyName   : cfg.companyName || '',
  ownerId       : cfg.ownerId     || '',
  owner         : cfg.owner       || '',

  logoUrl       : cfg.logoUrl     || '', // 'TODO: save in FB Cloude', // 'https://firebasestorage.googleapis.com/v0/b/osnova-course.appspot.com/o/no-img-company.svg?alt=media'
  status        : cfg.status      || CompanyStatus.NEW,

  dashboardData : cfg.dashboardData || {} as CompanyDashboardData,
  createdAt     : cfg.createdAt   || creatorFixDate(cfg.id),
  lastChange    : cfg.lastChange  || creatorFixDate(cfg.id)
});
