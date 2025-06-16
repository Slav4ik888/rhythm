import { FC, memo, MutableRefObject } from 'react';
import { reducerSignupPage } from '../model';
import { SignupContent as Content } from './content';
import { GettingPermissionsContainer } from './getting-permissions-container';
import { ActionMain, ActionHelps } from 'shared/ui/pages/action-container';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components';
import { LayoutInnerPage } from 'shared/ui/pages';
import { ProfileContentWrapper } from 'shared/ui/wrappers';
import { Errors } from 'shared/lib/validators';



const initialReducers: ReducersList = {
  signupPage: reducerSignupPage
};


interface Props {
  loading            : boolean
  errors             : Errors
  permissins         : boolean
  companyNameRef     : MutableRefObject<null>
  firstNameRef       : MutableRefObject<null>
  emailRef           : MutableRefObject<null>
  passwordRef        : MutableRefObject<null>
  confirmRef         : MutableRefObject<null>
  onTogglePermission : () => void
  onSubmit           : () => void
}


export const SignupPageComponent: FC<Props> = memo(({
  loading, errors, companyNameRef, confirmRef, permissins, firstNameRef, emailRef, passwordRef,
  onSubmit, onTogglePermission
}) => (
  <DynamicModuleLoader reducers={initialReducers} removeAfterUnmount>
    <LayoutInnerPage type='signup'>
      <ProfileContentWrapper>
        <Content
          companyNameRef = {companyNameRef}
          firstNameRef   = {firstNameRef}
          emailRef       = {emailRef}
          passwordRef    = {passwordRef}
          confirmRef     = {confirmRef}
        />

        <GettingPermissionsContainer
          permissins         = {permissins}
          onTogglePermission = {onTogglePermission}
        />
        <ActionMain
          type     = 'signup'
          loading  = {loading}
          errors   = {errors}
          onSubmit = {onSubmit}
        />
        <ActionHelps type='signup' />
      </ProfileContentWrapper>

    </LayoutInnerPage>
  </DynamicModuleLoader>
));
