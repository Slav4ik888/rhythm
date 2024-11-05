import { FC, memo, MutableRefObject } from 'react';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components';
import { useStylesAuth } from 'shared/ui/pages';
import { useTheme } from 'app/providers/theme';
import { Errors } from 'shared/lib/validators';
import { MDBox, MDTypography } from 'shared/ui/mui-design-components';
import { InnerPageWrapper } from 'shared/ui/wrappers';
import { SidebarDivider } from 'shared/ui/sidebar-divider';
import { UseGroup } from 'shared/lib/hooks';
import { CompanyData } from 'entities/company';



const reducers: ReducersList = {
  // userProfilePage: reducerUserProfilePage
};


interface Props {
  group        : UseGroup<CompanyData>
  // emailRef    : MutableRefObject<null>
  // passwordRef : MutableRefObject<null>
  // errors      : Errors
  // onSubmit    : () => void
}


export const CompanyProfilePageComponent: FC<Props> = memo(({ group: C }) => {
  const sx = useStylesAuth(useTheme());


  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <InnerPageWrapper containerType='lg'>
        <MDTypography variant="h6" textAlign="center" textTransform="none" mb={2}>
          Профиль компании
        </MDTypography>
        <SidebarDivider />
        
        <TextfieldItem
          label      = 'Название компании'
          name       = 'companyName'
          scheme     = 'companyName'
          grid       = {{ sm: 12 }}
          sx         = {{ root: sx.gridItem, bg: sx.textField } }
          group      = {C}
          errorField = 'companyName'
          errors     = {errors}
        />
        Название компании companyName
        Владелец аккаунта owner
        Статус аккаунта status
        Ссылка для загрузки данных из гугл таблицы

      </InnerPageWrapper>
    </DynamicModuleLoader>
  );
});
