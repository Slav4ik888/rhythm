import { FC, memo, useMemo } from 'react';
import { MDButton } from 'shared/ui/mui-design-components';
import { f } from 'shared/styles';
import Box from '@mui/material/Box';
import { ErrorBox } from 'shared/ui/containers';
import { Errors } from 'shared/lib/validators';
import { AccessLevel } from 'entities/company';



interface Props {
  loading        : boolean
  email          : string
  accessLevel    : AccessLevel
  isEmailPresent : boolean
  errors         : Errors | undefined
  onSubmit       : () => void
  onClose        : () => void
}

export const Actions: FC<Props> = memo(({ loading, errors, email, accessLevel, isEmailPresent, onSubmit, onClose }) => {
  const submitText = useMemo(() => {
    if (accessLevel === 'none') return 'Закрыть доступ'
    else return isEmailPresent ? 'Изменить' : 'Пригласить'
  }, [accessLevel, isEmailPresent]);

  return (
    <Box sx={{ ...f('c'), width: '100%', mt: 2, mb: 4 }}>
      <ErrorBox
        field  = 'general'
        errors = {errors}
        sx     = {{ root: { mb: 2 } }}
      />
      <Box sx={{ ...f('-c-fe'), gap: 2, width: '100%' }}>
        <MDButton
          loading  = {loading}
          color    = 'text'
          variant  = 'outlined'
          children = 'Отменить'
          onClick  = {onClose}
          // sx       = {{
          //   root: {
          //     width  : '100%',
          //     height : '50px'
          //   }
          // }}
        />
        <MDButton
          loading  = {loading}
          disabled = {Boolean(errors) || ! email}
          color    = {errors ? 'text' : 'primary'}
          variant  = 'outlined'
          children = {submitText}
          onClick  = {onSubmit}
          // sx       = {{
          //   root: {
          //     width  : '100%',
          //     height : '50px'
          //   }
          // }}
        />
      </Box>
    </Box>
  )
});
