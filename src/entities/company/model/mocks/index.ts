import { creatorFixDate } from 'entities/base';
import { MOCK_DATE_13_03_2023 } from 'entities/base/mocks';
import { creatorCompany } from '../creators';
import { CompanyDashboardData, CompanyData, CompanyStatus } from '../types';


export const MOCK_OWNER_ID   = '7mNs77rglRfvjuuIEf57ZvMFVr82';
export const MOCK_COMPANY_ID = 's61FdrbjG0U0iVlBRoFC';

export const MOCK_COMPANY_EMPTY: CompanyData = {
  id            : '',
  ownerId       : '',
  companyName   : '',
  owner         : '',

  logoUrl       : '',

  status        : CompanyStatus.NEW,
  dashboardData : {} as CompanyDashboardData, 
  createdAt     : creatorFixDate(), 
  lastChange    : creatorFixDate()
};


export const MOCK_COMPANY: CompanyData = creatorCompany({
  id            : MOCK_COMPANY_ID,
  ownerId       : MOCK_OWNER_ID,

  createdAt     : creatorFixDate(MOCK_OWNER_ID, MOCK_DATE_13_03_2023), 
  lastChange    : creatorFixDate(MOCK_OWNER_ID, MOCK_DATE_13_03_2023)
});
