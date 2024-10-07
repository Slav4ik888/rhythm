import * as s from '../../selectors';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks';
import { signupByLogin } from '../../services';
import { SignupData } from '../../types';
import { actions } from '../../slice';
import { Errors } from 'shared/lib/validators';


export const useSignup = () => {
  const
    dispatch      = useAppDispatch(),

    loading       = useSelector(s.selectLoading),
    errors        = useSelector(s.selectErrors),
    
    setErrors     = (errors: Errors) => dispatch(actions.setErrors(errors)),
    serviceSignup = (data: SignupData) => dispatch(signupByLogin(data));



  return {
    loading,
    errors,
    setErrors,
    
    serviceSignup,
  }
};
