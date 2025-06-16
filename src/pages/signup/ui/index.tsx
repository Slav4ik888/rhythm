import { FC, memo, useCallback, useRef, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { AppRoutes, RoutePath } from 'app/providers/routes';
import { useUI } from 'entities/ui';
import { SignupData, useSignup } from '../model';
import { useUser } from 'entities/user';
import { getRefValue } from 'shared/lib/refs';
import { validateSignupData } from '../model/validators';
import { SignupPageComponent } from './component';
import { __devLog } from 'shared/lib/tests/__dev-log';



const SignupPage: FC = memo(() => {
  const { loading: userLoading, auth } = useUser();
  const { loading, errors, serviceSignup, setErrors } = useSignup();
  const { isMobile } = useUI();
  const companyNameRef = useRef(null);
  const firstNameRef   = useRef(null);
  const emailRef       = useRef(null);
  const passwordRef    = useRef(null);
  const confirmRef     = useRef(null);


  const [permissions, setPermissions] = useState(false);

  const handleTogglePermission = useCallback(() => {
    setPermissions(prev => ! prev);
  }, [setPermissions]);


  const handleSubmit = useCallback(async () => {
    if (loading) return;

    const signupData: SignupData = {
      companyName     : getRefValue(companyNameRef),
      firstName       : getRefValue(firstNameRef),
      email           : getRefValue(emailRef),
      password        : getRefValue(passwordRef),
      confirmPassword : getRefValue(confirmRef),
      permissions,
      isMobile
    };

    const { valid, errors } = validateSignupData(signupData);
    if (valid) {
      __devLog('signupData: ', signupData);
      return
      serviceSignup(signupData);
    }
    else {
      setErrors(errors);
    }
  }, [loading, permissions, isMobile, serviceSignup, setErrors]);


  if (auth) return <Navigate to={RoutePath[AppRoutes.ROOT]} replace />;
  if (userLoading) return null;


  return (
    <SignupPageComponent
      errors             = {errors}
      loading            = {loading}
      companyNameRef     = {companyNameRef}
      firstNameRef       = {firstNameRef}
      emailRef           = {emailRef}
      passwordRef        = {passwordRef}
      confirmRef         = {confirmRef}
      permissins         = {permissions}
      onTogglePermission = {handleTogglePermission}
      onSubmit           = {handleSubmit}
    />
  );
});


export default SignupPage;
