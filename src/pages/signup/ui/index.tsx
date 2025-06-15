import { FC, memo, useCallback, useRef } from 'react';
import { Navigate } from 'react-router-dom';
import { RoutePath } from 'app/providers/routes';
import { useUI } from 'entities/ui';
import { SignupData, useSignup } from '../model';
import { useGroup } from 'shared/lib/hooks';
import { createUserData } from './utils';
import { useUser } from 'entities/user';
import { getRefValue } from 'shared/lib/refs';
import { validateSignupData } from '../model/validators';
import { SignupPageComponent } from './component';



const SignupPage: FC = memo(() => {
  const { auth } = useUser();
  const { loading, serviceSignup, setErrors } = useSignup();
  const { isMobile } = useUI();
  const S = useGroup<SignupData>(createUserData(isMobile));
  const firstNameRef = useRef(null);
  const emailRef     = useRef(null);
  const passwordRef  = useRef(null);


  const handleSubmit = useCallback(async () => {
    if (loading) return;
    const data = await S.getGroup();

    const signupData: SignupData = {
      companyName     : data.companyName,
      firstName       : getRefValue(firstNameRef),
      email           : getRefValue(emailRef),
      password        : getRefValue(passwordRef),
      confirmPassword : data.confirmPassword,
      permissions     : data.permissions,
      isMobile
    };

    const { valid, errors } = validateSignupData(signupData);
    valid ? serviceSignup(signupData) : setErrors(errors);
  }, [loading, S, isMobile, serviceSignup, setErrors]);

  if (auth) return <Navigate to={RoutePath.ROOT} replace />;

  return (
    <SignupPageComponent
      group        = {S}
      firstNameRef = {firstNameRef}
      emailRef     = {emailRef}
      passwordRef  = {passwordRef}
      onSubmit     = {handleSubmit}
    />
  );
});


export default SignupPage;
