import { FC, memo, ChangeEvent } from 'react';
import { Errors } from 'shared/lib/validators';
import { MDDivider } from 'shared/ui/mui-design-components';
import { InnerPageWrapper } from 'shared/ui/wrappers';
import { Company } from 'entities/company';
import { Actions } from 'shared/ui/buttons';
import Typography from '@mui/material/Typography';
import { f, pxToRem } from 'shared/styles';
import Box from '@mui/material/Box';
import { TextFieldItem } from 'shared/ui/mui-components';



interface Props {
  loading   : boolean
  isChanges : boolean
  formData  : Partial<Company>
  errors    : Errors
  onCancel  : () => void
  onChange  : (e: ChangeEvent<HTMLInputElement>, scheme: string) => void
  onSubmit  : () => void
}


export const CompanyProfilePageComponent: FC<Props> = memo(({ isChanges, formData,
  loading, errors, onCancel, onSubmit, onChange
}) => (
  <InnerPageWrapper containerType='md'>
    <Typography variant='h6' color='text.dark' textAlign='center' textTransform='none' mb={2}>
      Профиль компании
    </Typography>
    <MDDivider />

    <Box sx={{ ...f('c'), gap: 4, width: { xs: '100%', md: '50%' }, maxWidth: pxToRem(300) }}>
      <TextFieldItem
        label        = 'Название компании'
        name         = 'companyName'
        defaultValue = {formData.companyName || ''}
        scheme       = 'companyName'
        errors       = {errors}
        onChange     = {onChange}
      />
      <TextFieldItem
        label        = 'Ссылка для загрузки из гугл таблицы'
        name         = 'url'
        defaultValue = {formData.googleData?.url || ''}
        scheme       = 'googleData.url'
        errors       = {errors}
        onChange     = {onChange}
      />
      <TextFieldItem
        disabled
        label        = 'Владелец аккаунта'
        name         = 'owner'
        defaultValue = {formData.owner || ''}
        scheme       = 'owner'
        errors       = {errors}
        onChange     = {onChange}
      />
      <TextFieldItem
        disabled
        label        = 'Статус аккаунта'
        name         = 'status'
        defaultValue = {formData.status || ''}
        scheme       = 'status'
        errors       = {errors}
        onChange     = {onChange}
      />
    </Box>

    <Actions
      hideIfNotChanges
      loading   = {loading}
      isChanges = {isChanges}
      onCancel  = {onCancel}
      onSubmit  = {onSubmit}
    />
  </InnerPageWrapper>
));
