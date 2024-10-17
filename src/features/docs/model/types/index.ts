import { Errors } from 'shared/lib/validators';

export enum DocKey {
  POLICY = 'policy' // Политика конфиденциальности
}

export type DocKeys = Record<DocKey, string>

export interface StateSchemaDocs {
  loading : boolean
  errors  : Errors
  docKeys : DocKeys
}
