import { useMemo } from 'react';
import * as s from '../../selectors';
import { actions as a } from '../../slice';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks';
import { Errors } from 'shared/lib/validators';
import { CustomSettings, ParamsCompany, PartialCompany } from '../../../types';
import { ReqGetCompany, getParamsCompany, updateCompany } from 'shared/api/features/company';


interface Config {
  dashboardPageId?: string
}

export const useCompany = (config: Config = {}) => {
  const { dashboardPageId = 'main' } = config;
  const dispatch = useAppDispatch();

  const loading                  = useSelector(s.selectLoading);
  const errors                   = useSelector(s.selectErrors);
  const _isParamsCompanyIdLoaded = useSelector(s.selectIsParamsCompanyIdLoaded);
  const paramsCompany            = useSelector(s.selectParamsCompany);
  const paramsCompanyId          = paramsCompany?.id;
  const paramsBunchesUpdated     = paramsCompany?.bunchesUpdated;
  const paramsCustomSettings     = useSelector(s.selectParamsCustomSettings);
  const paramsChangedCompany     = useSelector(s.selectParamsChangedCompany); // Объект с изменившимися полями
  const usersAccessDashboard     = paramsCompany?.dashboardMembers || [];
  const dashboardPublicAccess    = paramsCompany?.dashboardPublicAccess?.[dashboardPageId];
  // const usersAccessDashboard     = useSelector(s.selectUsersAccessDashboard); // Списо пользователей имеющих доступ ('v' | 'e') к /dashboard
  const company                  = useSelector(s.selectCompany);
  const companyId                = company?.id;
  const storedCompany            = useSelector(s.selectStoredCompany);

  const api = useMemo(() => ({
    setErrors                  : (errors: Errors) => dispatch(a.setErrors(errors)),
    clearErrors                : () => dispatch(a.setErrors({})),
    setIsParamsCompanyIdLoaded : (status: boolean) => dispatch(a.setIsParamsCompanyIdLoaded(status)),
    updateParamsCustomSettings : (data: Partial<CustomSettings>) => dispatch(a.updateParamsCustomSettings(data)),
    cancelParamsCustomSettings : () => dispatch(a.cancelParamsCustomSettings()),
    updateParamsCompany        : (data: Partial<ParamsCompany>) => dispatch(a.updateParamsCompany(data)),

    serviceGetParamsCompany    : (data: ReqGetCompany) => dispatch(getParamsCompany(data)),
    serviceUpdateCompany       : (company: PartialCompany) => dispatch(updateCompany(company)),
  }), [dispatch]);


  return {
    loading,
    errors,
    _isParamsCompanyIdLoaded,
    paramsCompany,
    paramsCompanyId,
    paramsBunchesUpdated,
    paramsCustomSettings,
    paramsChangedCompany,
    usersAccessDashboard,
    dashboardPublicAccess,

    company,
    companyId,
    storedCompany,
    ...api
  }
};
