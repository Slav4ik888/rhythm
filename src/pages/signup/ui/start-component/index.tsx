import { FC, memo, useCallback, useRef, useState } from 'react';
import { useUI } from 'entities/ui';
import { SignupData, useSignup } from '../../model';
import { getRefValue } from 'shared/lib/refs';
import { validateSignupData } from '../../model/validators';
import { SignupStartPageComponent } from './component';



export const SignupPageStart: FC = memo(() => {
  const { loading, errors, serviceSignupStart, setErrors } = useSignup();
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
      email           : getRefValue(emailRef).toLocaleLowerCase(),
      password        : getRefValue(passwordRef),
      confirmPassword : getRefValue(confirmRef),
      permissions,
      isMobile
    };

    const { valid, errors } = validateSignupData(signupData);
    if (valid) serviceSignupStart(signupData);
    else setErrors(errors);
  },
    [loading, permissions, isMobile, serviceSignupStart, setErrors]
  );


  return (
    <SignupStartPageComponent
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
