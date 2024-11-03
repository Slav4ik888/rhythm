import { FC, memo, MutableRefObject } from 'react';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components';
import { useStylesAuth } from 'shared/ui/pages';
import { useTheme } from 'app/providers/theme';
import { Errors } from 'shared/lib/validators';
import { MDBox } from 'shared/ui/mui-design-components';



const reducers: ReducersList = {
  // userProfilePage: reducerUserProfilePage
};


interface Props {
  // emailRef    : MutableRefObject<null>
  // passwordRef : MutableRefObject<null>
  // errors      : Errors
  // onSubmit    : () => void
}


export const UserProfilePageComponent: FC<Props> = memo(({ }) => {
  const sx = useStylesAuth(useTheme());


  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <MDBox>
        UserProfilePageComponent
      </MDBox>
    </DynamicModuleLoader>
  );
});
