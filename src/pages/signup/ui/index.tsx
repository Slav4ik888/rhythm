import { FC, memo, useCallback, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
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
  const
    { auth } = useUser(),
    { loading, serviceSignup, setErrors } = useSignup(),
    { isMobile } = useUI(),
    navigate = useNavigate(),
    S = useGroup<SignupData>(createUserData(isMobile)),
    firstNameRef = useRef(null),
    emailRef     = useRef(null),
    passwordRef  = useRef(null);
    
  
  useEffect(() => {
    if (auth) navigate(RoutePath.ROOT)
  }, [auth]);


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
  }, [S.group]);


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
