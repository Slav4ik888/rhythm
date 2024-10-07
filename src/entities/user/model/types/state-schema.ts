import { Errors } from 'shared/lib/validators';
import { User } from './user';

export interface StateSchemaUser {
  auth    : boolean
  user    : User
  loading : boolean
  errors  : Errors
}
