import { Errors } from 'shared/lib/validators';
import { CompanyId, CompanyData } from '../types/company';



export interface StateSchemaCompany {
  companyId : CompanyId | undefined
  companyData : CompanyData
  loading   : boolean
  errors    : Errors
}
