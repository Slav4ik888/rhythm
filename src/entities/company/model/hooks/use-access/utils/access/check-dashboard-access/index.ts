import { getValueByScheme } from 'shared/helpers/objects';
import { __devLog } from 'shared/lib/tests/__dev-log';
import { ParamsCompany } from '../../../../../../types';
import { getUserDashboardAccess } from '../get-user-dashboard-access';
import { hasRequiredAccess } from '../has-required-access';
import { isOwner } from '../is-owner';
import { AccessLevel, CompanyDashboardAccessScheme } from '../../../types';


/**
 * Check permissions by scheme
 */
export const checkDashboardAccess = (
  company        : ParamsCompany,
  userEmail      : string,
  scheme         : CompanyDashboardAccessScheme, // 'a.f'
  requiredAccess : AccessLevel
) => {
  // Если пользователь - владелец
  if (isOwner(company, userEmail)) return true;

  // Все полномочия пользователя от этой компании
  const allUserAccess = getUserDashboardAccess(company, userEmail);

  // Какие полномочия пользователя по этой scheme
  const userAccess = getValueByScheme(allUserAccess, scheme);

  // Соответствуют ли права на запрошенную операцию
  const result = hasRequiredAccess(userAccess, requiredAccess);
  __devLog(`checkAccess[${requiredAccess}][${userEmail}][${scheme}]:`, result);

  return result
};
