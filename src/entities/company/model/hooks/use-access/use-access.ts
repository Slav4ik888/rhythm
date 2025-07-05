import { useUser } from 'entities/user';
import { useMemo } from 'react';
import { useCompany } from '../use-company';
import { CompanyDashboardAccessScheme } from './types';
import { checkDashboardAccess } from './utils';


export const useAccess = () => {
  const { paramsCompany } = useCompany();
  const { email } = useUser();

  /**
   * Имеет ли доступ к панели управления компании
   */
  const isDashboardAccess = useMemo(() => checkDashboardAccess(
    paramsCompany, email, CompanyDashboardAccessScheme.AF, 'e'
  ),
    [email, paramsCompany]
  );

  return {
    isDashboardAccess
  }
}
