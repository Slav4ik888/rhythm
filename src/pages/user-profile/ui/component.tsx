import { FC, memo } from 'react';
import { useStylesAuth } from 'shared/ui/pages';
import { useTheme } from 'app/providers/theme';
import { Errors } from 'shared/lib/validators';
import { MDDivider, MDTypography } from 'shared/ui/mui-design-components';
import { InnerPageWrapper } from 'shared/ui/wrappers';
import { TextfieldItem } from 'shared/ui/containers';
import { UseGroup } from 'shared/lib/hooks';
import { Actions } from 'shared/ui/buttons';
import { User } from 'entities/user';
import { PageLoader } from 'widgets/page-loader';



interface Props {
  loading  : boolean
  auth     : boolean
  group    : UseGroup<User>
  errors   : Errors
  onCancel : () => void
  onSubmit : () => void
}


export const UserProfilePageComponent: FC<Props> = memo(({ loading, auth, errors, group: U, onCancel, onSubmit }) => {
  const sx = useStylesAuth(useTheme());


  return (
    <InnerPageWrapper containerType='md'>
      <MDTypography variant='h6' textAlign='center' textTransform='none' mb={2}>
        Профиль пользователя
      </MDTypography>
      <MDDivider />

      {
        ! auth
          ? <PageLoader loading={! auth} />
          : <>
              <TextfieldItem
                label      = 'Фамилия'
                name       = 'secondName'
                scheme     = 'person.fio.secondName'
                // grid       = {{ md: 4, sm: 6 }}
                sx         = {{ root: sx.gridItem, bg: sx.textField }}
                group      = {U}
                errorField = 'secondName'
                errors     = {errors}
              />

              <TextfieldItem
                label      = 'Имя'
                name       = 'firstName'
                scheme     = 'person.fio.firstName'
                // grid       = {{ md: 4, sm: 6 }}
                sx         = {{ root: sx.gridItem, bg: sx.textField }}
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
                sx         = {{ root: sx.gridItem, bg: sx.textField }}
                group      = {U}
                errorField = 'middleName'
                errors     = {errors}
              />

              <Actions
                hideIfNotChanges
                loading  = {loading}
                hookOpen = {U}
                onCancel = {onCancel}
                onSubmit = {onSubmit}
              />
            </>
      }
    </InnerPageWrapper>
  );
});
