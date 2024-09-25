import { Errors } from 'shared/lib/validators';
import { CompanyId } from './company';



export interface StateSchemaCompany {
  companyId : CompanyId | undefined

  loading   : boolean
  errors    : Errors
}
