import { useUser } from 'entities/user';
import { useMemo } from 'react';
import { usePages } from 'shared/lib/hooks';
import { useCompany } from '../use-company';
import { CompanyDashboardAccessScheme } from './types';
import { checkDashboardAccess } from './utils';



export const useAccess = () => {
  const { paramsCompany } = useCompany();
  const { email } = useUser();
  const { dashboardPageId } = usePages();


  /**
   * Имеет ли доступ к Просмотру Дашборда
   */
  const isDashboardAccessView = useMemo(() => checkDashboardAccess(
    paramsCompany, email, CompanyDashboardAccessScheme.AF, 'v', dashboardPageId
  ),
    [email, paramsCompany, dashboardPageId]
  );

  /**
   * Имеет ли доступ к Редактированию Дашборда
   */
  const isDashboardAccessEdit = useMemo(() => checkDashboardAccess(
    paramsCompany, email, CompanyDashboardAccessScheme.AF, 'e', dashboardPageId
  ),
    [email, paramsCompany, dashboardPageId]
  );


  return {
    isDashboardAccessView,
    isDashboardAccessEdit
  }
}
