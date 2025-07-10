import { useUser } from 'entities/user';
import { useMemo } from 'react';
import { usePages } from 'shared/lib/hooks';
import { useCompany } from '../use-company';
import { CompanyDashboardAccessScheme } from './types';
import { checkDashboardAccess } from './utils';



export const useAccess = () => {
  const { paramsCompany } = useCompany();
  const { email } = useUser();
  const { dashboardSheetId } = usePages();


  /**
   * Имеет ли доступ к Просмотру Дашборда
   */
  const isDashboardAccessView = useMemo(() => checkDashboardAccess(
    paramsCompany, email, CompanyDashboardAccessScheme.AF, 'v', dashboardSheetId
  ),
    [email, paramsCompany, dashboardSheetId]
  );

  /**
   * Имеет ли доступ к Редактированию Дашборда
   */
  const isDashboardAccessEdit = useMemo(() => checkDashboardAccess(
    paramsCompany, email, CompanyDashboardAccessScheme.AF, 'e', dashboardSheetId
  ),
    [email, paramsCompany, dashboardSheetId]
  );


  return {
    isDashboardAccessView,
    isDashboardAccessEdit
  }
}
