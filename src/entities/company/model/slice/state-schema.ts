import { Errors } from 'shared/lib/validators';
import { CompanyData } from '../types/company';



export interface StateSchemaCompany {
  companyData : CompanyData
  loading     : boolean
  errors      : Errors
}
