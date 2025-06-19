import { getValueByScheme } from 'shared/helpers/objects';
import { __devLog } from 'shared/lib/tests/__dev-log';
import { AccessLevel, ParamsCompany } from '../../../types';
import { getUserAccess } from '../get-user-access';
import { hasRequiredAccess } from '../has-required-access';
import { isOwner } from '../is-owner';


/**
 * Check permissions by scheme
 */
export const checkAccess = (
  company        : ParamsCompany,
  userEmail      : string,
  scheme         : string,     // 'a.d.f'
  requiredAccess : AccessLevel // | AccessLevel[] | boolean
) => {
  if (isOwner(company, userEmail)) return true;

  const currentAllAccess = getUserAccess(company, userEmail);
  const requiredUserAccess = getValueByScheme(currentAllAccess, scheme);

  const result = hasRequiredAccess(requiredUserAccess, requiredAccess);
  __devLog(`checkAccess[${requiredAccess}][${userEmail}][${scheme}]:`, result);

  return result
};
