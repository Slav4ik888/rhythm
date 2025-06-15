import { FC, memo, ChangeEvent } from 'react';
import { Errors } from 'shared/lib/validators';
import { MDDivider } from 'shared/ui/mui-design-components';
import { InnerPageWrapper } from 'shared/ui/wrappers';
import { Actions } from 'shared/ui/buttons';
import { User } from 'entities/user';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
// import Button from '@mui/material/Button'
import { TextFieldItem } from 'shared/ui/mui-components';
import { f, pxToRem } from 'shared/styles';


interface Props {
  loading   : boolean
  isChanges : boolean
  formData  : User
  errors    : Errors
  onCancel  : () => void
  onChange  : (e: ChangeEvent<HTMLInputElement>, scheme: string) => void
  onSubmit  : () => void
}


export const UserProfilePageComponent: FC<Props> = memo(({ loading, errors, formData, isChanges,
  onCancel, onChange, onSubmit }) => (
  <InnerPageWrapper containerType='md'>
    <Typography variant='h6' color='text.dark' textAlign='center' textTransform='none' mb={2}>
      Профиль пользователя
    </Typography>
    <MDDivider />

    <Box sx={{ ...f('c'), gap: 4, width: {  xs: '100%', md: '50%' }, maxWidth: pxToRem(300) }}>
      <TextFieldItem
        label        = 'Фамилия'
        name         = 'secondName'
        defaultValue = {formData.person?.fio?.secondName}
        scheme       = 'person.fio.secondName'
        errors       = {errors}
        onChange     = {onChange}
      />

      <TextFieldItem
        label        = 'Имя'
        name         = 'firstName'
        defaultValue = {formData.person?.fio?.firstName}
        scheme       = 'person.fio.firstName'
        errors       = {errors}
        onChange     = {onChange}
      />

      <TextFieldItem
        label        = 'Отчество'
        name         = 'middleName'
        defaultValue = {formData.person?.fio?.middleName}
        scheme       = 'person.fio.middleName'
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
    {/* <Box sx={{ mt: 3 }}>
      <Button
        variant='contained'
        disabled={Object.keys(getChanges(storedUser, formData)).length > 0}
        onClick={onSubmit}
      >
        Сохранить изменения
      </Button>
    </Box> */}
  </InnerPageWrapper>
));
