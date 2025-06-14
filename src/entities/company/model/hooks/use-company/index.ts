import * as s from '../../selectors';
import { actions as a } from '../../slice';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks';
import { Errors } from 'shared/lib/validators';
import { Company, CustomSettings, PartialCompany } from '../../types';
import { getParamsCompany, updateCompany } from 'features/company';



// interface Config {
// }

// export const useCompany = (config: Config = {}) => {
//   const
//     { } = config,
export const useCompany = () => {
  const
    dispatch                 = useAppDispatch(),

    loading                  = useSelector(s.selectLoading),
    errors                   = useSelector(s.selectErrors),
    setErrors                = (errors: Errors) => dispatch(a.setErrors(errors)),
    clearErrors              = () => dispatch(a.setErrors({})),

    _isParamsCompanyIdLoaded = useSelector(s.selectIsParamsCompanyIdLoaded),
    paramsCompany            = useSelector(s.selectParamsCompany),
    paramsCompanyId          = paramsCompany?.id,
    paramsCustomSettings     = useSelector(s.selectParamsCustomSettings),
    paramsChangedCompany     = useSelector(s.selectParamsChangedCompany), // Объект с изменившимися полями
    updateParamsCustomSettings = (data: Partial<CustomSettings>) => dispatch(a.updateParamsCustomSettings(data)),
    cancelParamsCustomSettings = () => dispatch(a.cancelParamsCustomSettings()),
    serviceGetParamsCompany  = (companyId: string) => dispatch(getParamsCompany({ companyId })),

    company                  = useSelector(s.selectCompany),
    companyId                = company?.id,
    storedCompany            = useSelector(s.selectStoredCompany),
    // customSettings           = useSelector(s.selectCustomSettings),
    // changedCompany           = useSelector(s.selectChangedCompany), // Объект с изменившимися полями
    // updateCustomSettings     = (data: Partial<CustomSettings>) => dispatch(a.updateCustomSettings(data)),
    // cancelCustomSettings     = () => dispatch(a.cancelCustomSettings()),
    serviceUpdateCompany     = (company: PartialCompany) => dispatch(updateCompany(company));
    // serviceDeleteCompany = (companyId: string) => dispatch(deleteCompany(companyId)),



  return {
    loading,
    errors,
    setErrors,
    clearErrors,

    _isParamsCompanyIdLoaded,
    paramsCompany,
    paramsCompanyId,
    paramsCustomSettings,
    paramsChangedCompany,
    serviceGetParamsCompany,
    updateParamsCustomSettings,
    cancelParamsCustomSettings,

    company,
    companyId,
    storedCompany,
    // customSettings,
    // changedCompany,
    // updateCustomSettings,
    // cancelCustomSettings,
    serviceUpdateCompany,
  }
};
