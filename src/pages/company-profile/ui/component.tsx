import { FC, memo } from 'react';
import { useStylesAuth } from 'shared/ui/pages';
import { useTheme } from 'app/providers/theme';
import { Errors } from 'shared/lib/validators';
import { MDTypography } from 'shared/ui/mui-design-components';
import { InnerPageWrapper } from 'shared/ui/wrappers';
import { SidebarDivider } from 'shared/ui/sidebar-divider';
import { UseGroup } from 'shared/lib/hooks';
import { Company } from 'entities/company';
import { TextfieldItem } from 'shared/ui/containers';
import { Actions } from 'shared/ui/buttons';



interface Props {
  loading  : boolean
  group    : UseGroup<Company>
  errors   : Errors
  onCancel : () => void
  onSubmit : () => void
}


export const CompanyProfilePageComponent: FC<Props> = memo(({ loading, errors, group: C, onCancel, onSubmit }) => {
  const sx = useStylesAuth(useTheme());


  return (
      <InnerPageWrapper containerType='md'>
        <MDTypography variant="h6" textAlign="center" textTransform="none" mb={2}>
          Профиль компании
        </MDTypography>
        <SidebarDivider />
        
        <TextfieldItem
          label      = 'Название компании'
          name       = 'companyName'
          scheme     = 'companyName'
          // grid       = {{ md: 4, sm: 6 }}
          sx         = {{ root: sx.gridItem, bg: sx.textField } }
          group      = {C}
          errorField = 'companyName'
          errors     = {errors}
        />

        <TextfieldItem
          label      = 'Ссылка для загрузки из гугл таблицы'
          name       = 'url'
          scheme     = 'googleData.url'
          // grid       = {{ md: 4, sm: 6 }}
          sx         = {{ root: sx.gridItem, bg: sx.textField } }
          group      = {C}
          errorField = 'googleData.url'
          errors     = {errors}
        />

        <TextfieldItem
          disabled
          label      = 'Владелец аккаунта'
          name       = 'owner'
          scheme     = 'owner'
          grid       = {{ md: 6, sm: 6 }}
          sx         = {{ root: sx.gridItem, bg: sx.textField } }
          group      = {C}
          errorField = 'owner'
          errors     = {errors}
        />

        <TextfieldItem
          disabled
          label      = 'Статус аккаунта'
          name       = 'status'
          scheme     = 'status'
          grid       = {{ md: 6, sm: 6 }}
          sx         = {{ root: sx.gridItem, bg: sx.textField } }
          group      = {C}
          errorField = 'status'
          errors     = {errors}
        />

        <Actions
          loading  = {loading}
          hookOpen = {C}
          onCancel = {onCancel}
          onSubmit = {onSubmit}
        />
      </InnerPageWrapper>
  );
});
