import { FC, memo } from 'react';
import { useStylesAuth } from 'shared/ui/pages';
import { useTheme } from 'app/providers/theme';
import { Errors } from 'shared/lib/validators';
import { MDBox, MDTypography } from 'shared/ui/mui-design-components';
import { InnerPageWrapper } from 'shared/ui/wrappers';
import { SidebarDivider } from 'shared/ui/sidebar-divider';
import { TextfieldItem } from 'shared/ui/containers';
import { UseGroup } from 'shared/lib/hooks';
import { Actions } from 'shared/ui/buttons';
import { User } from 'entities/user';



interface Props {
  loading  : boolean
  group    : UseGroup<User>
  errors   : Errors
  onSubmit : () => void
}


export const UserProfilePageComponent: FC<Props> = memo(({ loading, errors, group: U, onSubmit }) => {
  const sx = useStylesAuth(useTheme());


  return (
    <InnerPageWrapper containerType='md'>
      <MDTypography variant="h6" textAlign="center" textTransform="none" mb={2}>
        Профиль пользователя
      </MDTypography>
      <SidebarDivider />
      
      <TextfieldItem
        label      = 'Фамилия'
        name       = 'secondName'
        scheme     = 'person.fio.secondName'
        // grid       = {{ md: 4, sm: 6 }}
        sx         = {{ root: sx.gridItem, bg: sx.textField } }
        group      = {U}
        errorField = 'secondName'
        errors     = {errors}
      />

      <TextfieldItem
        label      = 'Имя'
        name       = 'firstName'
        scheme     = 'person.fio.firstName'
        // grid       = {{ md: 4, sm: 6 }}
        sx         = {{ root: sx.gridItem, bg: sx.textField } }
        group      = {U}
        errorField = 'firstName'
        errors     = {errors}
      />

      <TextfieldItem
        disabled
        label      = 'Отчество'
        name       = 'middleName'
        scheme     = 'person.fio.middleName'
        // grid       = {{ md: 4, sm: 6 }}
        sx         = {{ root: sx.gridItem, bg: sx.textField } }
        group      = {U}
        errorField = 'middleName'
        errors     = {errors}
      />

      <Actions
        loading  = {loading}
        hookOpen = {U}
        onSubmit = {onSubmit}
      />
    </InnerPageWrapper>
  );
});
