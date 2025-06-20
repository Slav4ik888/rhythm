import { getValueByScheme } from 'shared/helpers/objects';
import { __devLog } from 'shared/lib/tests/__dev-log';
import { AccessLevel, CompanyDashboardAccessScheme, ParamsCompany } from '../../../types';
import { getUserDashboardAccess } from '../get-user-dashboard-access';
import { hasRequiredAccess } from '../has-required-access';
import { isOwner } from '../is-owner';


/**
 * Check permissions by scheme
 */
export const checkDashboardAccess = (
  company        : ParamsCompany,
  userEmail      : string,
  scheme         : CompanyDashboardAccessScheme, // 'a.f'
  requiredAccess : AccessLevel
) => {
  if (isOwner(company, userEmail)) return true;

  const currentAllAccess = getUserDashboardAccess(company, userEmail);
  const requiredUserAccess = getValueByScheme(currentAllAccess, scheme);

  const result = hasRequiredAccess(requiredUserAccess, requiredAccess);
  __devLog(`checkAccess[${requiredAccess}][${userEmail}][${scheme}]:`, result);

  return result
};
