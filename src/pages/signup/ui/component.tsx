import { FC, memo, MutableRefObject } from 'react';
import { SignupData, reducerSignupPage } from '../model';
import { SignupContent as Content } from './content';
import { GettingPermissionsContainer } from 'pages/signup/ui/getting-permissions-container';
import { ActionMain, ActionHelps } from 'widgets/auth/action-container';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components';
import { UseGroup } from 'shared/lib/hooks';
import { AuthContentWrapper, AuthCardHeader } from 'shared/ui/pages';
import { InnerPageWrapper } from 'shared/ui/wrappers';



const initialReducers: ReducersList = {
  signupPage: reducerSignupPage
};


interface Props {
  group        : UseGroup<SignupData>
  firstNameRef : MutableRefObject<null>
  emailRef     : MutableRefObject<null>
  passwordRef  : MutableRefObject<null>
  onSubmit     : () => void
}


export const SignupPageComponent: FC<Props> = memo(({ group: S, firstNameRef, emailRef, passwordRef, onSubmit }) => (
  <DynamicModuleLoader reducers={initialReducers} removeAfterUnmount>
    <InnerPageWrapper>
      <AuthCardHeader type='signup' />

      <AuthContentWrapper>
        <Content
          group        = {S}
          firstNameRef = {firstNameRef}
          emailRef     = {emailRef}
          passwordRef  = {passwordRef}
        />

        <GettingPermissionsContainer group={S} />
        <ActionMain
          type     = 'signup'
          onSubmit = {onSubmit}
        />
        <ActionHelps type='signup' />
      </AuthContentWrapper>

    </InnerPageWrapper>
  </DynamicModuleLoader>
));
