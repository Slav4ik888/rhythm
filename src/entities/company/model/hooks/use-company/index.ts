import { useMemo } from 'react';
import * as s from '../../selectors';
import { actions as a } from '../../slice';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks';
import { Errors } from 'shared/lib/validators';
import { CustomSettings, PartialCompany } from '../../types';
import { getParamsCompany, updateCompany } from 'features/company';



// interface Config {
// }

// export const useCompany = (config: Config = {}) => {
//   const
//     { } = config,
export const useCompany = () => {
  const dispatch = useAppDispatch();

  const loading                  = useSelector(s.selectLoading);
  const errors                   = useSelector(s.selectErrors);
  const _isParamsCompanyIdLoaded = useSelector(s.selectIsParamsCompanyIdLoaded);
  const paramsCompany            = useSelector(s.selectParamsCompany);
  const paramsCompanyId          = paramsCompany?.id;
  const paramsViewUpdated        = paramsCompany?.viewUpdated;
  const paramsCustomSettings     = useSelector(s.selectParamsCustomSettings);
  const paramsChangedCompany     = useSelector(s.selectParamsChangedCompany); // Объект с изменившимися полями
  const company                  = useSelector(s.selectCompany);
  const companyId                = company?.id;
  const storedCompany            = useSelector(s.selectStoredCompany);
  // customSettings           = useSelector(s.selectCustomSettings);
  // changedCompany           = useSelector(s.selectChangedCompany); // Объект с изменившимися полями
  // updateCustomSettings     = (data: Partial<CustomSettings>) => dispatch(a.updateCustomSettings(data));
  // cancelCustomSettings     = () => dispatch(a.cancelCustomSettings());
  // serviceDeleteCompany = (companyId: string) => dispatch(deleteCompany(companyId));

  const api = useMemo(() => ({
    setErrors                  : (errors: Errors) => dispatch(a.setErrors(errors)),
    clearErrors                : () => dispatch(a.setErrors({})),
    setIsParamsCompanyIdLoaded : (status: boolean) => dispatch(a.setIsParamsCompanyIdLoaded(status)),
    updateParamsCustomSettings : (data: Partial<CustomSettings>) => dispatch(a.updateParamsCustomSettings(data)),
    cancelParamsCustomSettings : () => dispatch(a.cancelParamsCustomSettings()),
    serviceGetParamsCompany    : (companyId: string) => dispatch(getParamsCompany({ companyId })),
    serviceUpdateCompany       : (company: PartialCompany) => dispatch(updateCompany(company)),
  }), [dispatch]);


  return {
    loading,
    errors,
    _isParamsCompanyIdLoaded,
    paramsCompany,
    paramsCompanyId,
    paramsViewUpdated,
    paramsCustomSettings,
    paramsChangedCompany,

    company,
    companyId,
    storedCompany,
    ...api
  }
};
