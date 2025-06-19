import { CompanyMember, ParamsCompany } from '../../../types';


/**
 * Get user access from companyProfile
 */
export const getUserAccess = (
  company   : ParamsCompany,
  userEmail : string,
): CompanyMember | undefined => {
  if (! company || ! company.members) return undefined;

  return Object.values(company.members).find(member => member.e === userEmail);
};
