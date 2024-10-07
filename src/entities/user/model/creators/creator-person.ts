import { cloneObj } from 'shared/helpers/objects';
import { Person } from '../types';
import { creatorFIO } from './creator-fio';


/** v.2023-09-22 */
export const creatorPerson = (cfg: Partial<Person> = {}): Person => ({
  displayName   : cfg.displayName || '',
  avatarUrl     : cfg.avatarUrl   || '',
  phoneNumber   : cfg.phoneNumber || '',
  fio           : creatorFIO(cfg.fio),
  phones        : [...cloneObj(cfg.phones || [])]
});
