import * as s from '../../selectors';
import { actions as a } from '../../slice';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks';
import { Errors } from 'shared/lib/validators';
import { ActivatedCompanyId, Company, CustomSettings } from '../../types';
import { updateCompany } from 'features/company';



interface Config {
}

export const useCompany = (config: Config = {}) => {
  const
    { } = config,
    dispatch             = useAppDispatch(),

    loading              = useSelector(s.selectLoading),
    errors               = useSelector(s.selectErrors),
    setErrors            = (errors: Errors) => dispatch(a.setErrors(errors)),
    clearErrors          = () => dispatch(a.setErrors({})),

    company              = useSelector(s.selectCompany),
    companyId            = company?.id as ActivatedCompanyId,
    storedCompany        = useSelector(s.selectStoredCompany),
    customSettings       = useSelector(s.selectCustomSettings),
    updateCustomSettings = (data: Partial<CustomSettings>) => dispatch(a.updateCustomSettings(data)),
    serviceUpdateCompany = (company: Partial<Company>) => dispatch(updateCompany(company));
    // serviceDeleteCompany = (companyId: string) => dispatch(deleteCompany(companyId)),


  
  return {
    loading,
    errors,
    setErrors,
    clearErrors,

    company,
    companyId,
    storedCompany,
    customSettings,
    updateCustomSettings,
    serviceUpdateCompany,
  }
};
