import { Errors } from 'shared/lib/validators';
import { Company } from '../types/company';



export interface StateSchemaCompany {
  company : Company
  loading : boolean
  errors  : Errors
}
