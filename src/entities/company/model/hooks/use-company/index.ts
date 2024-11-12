import * as s from '../../selectors';
import { actions as a } from '../../slice';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks';
import { Errors } from 'shared/lib/validators';



interface Config {
}

export const useCompany = (config: Config = {}) => {
  const
    { } = config,
    dispatch    = useAppDispatch(),

    loading     = useSelector(s.selectLoading),
    errors      = useSelector(s.selectErrors),
    setErrors   = (errors: Errors) => dispatch(a.setErrors(errors)),
    clearErrors = () => dispatch(a.setErrors({})),

    company     = useSelector(s.selectCompany);
    // serviceDeleteCompany = (companyId: string) => dispatch(deleteCompany(companyId)),

  
  return {
    loading,
    errors,
    setErrors,
    clearErrors,

    company,
  }
};
