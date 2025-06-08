import * as s from '../../selectors';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks';
import { signupByEmail } from '../../services';
import { SignupData } from '../../types';
import { actions } from '../../slice';
import { Errors } from 'shared/lib/validators';


export const useSignup = () => {
  const
    dispatch      = useAppDispatch(),

    loading       = useSelector(s.selectLoading),
    errors        = useSelector(s.selectErrors),

    setErrors     = (errors: Errors) => dispatch(actions.setErrors(errors)),
    serviceSignup = (data: SignupData) => dispatch(signupByEmail(data));



  return {
    loading,
    errors,
    setErrors,

    serviceSignup,
  }
};
