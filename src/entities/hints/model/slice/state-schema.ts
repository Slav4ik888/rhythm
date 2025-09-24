import { Hint } from '../../types';
import { Errors } from 'shared/lib/validators';



export interface StateSchemaHints {
  loading  : boolean
  errors   : Errors
  activeId : string | undefined
  entities : { [key: string]: Hint}
}
