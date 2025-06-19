import { FC, memo } from 'react';
import { MDButton } from 'shared/ui/mui-design-components';
import { f } from 'shared/styles';
import Box from '@mui/material/Box';
import { ErrorBox } from 'shared/ui/containers';
import { Errors } from 'shared/lib/validators';
import { CopyLinkBtn } from './copy-link-btn';



interface Props {
  loading       : boolean
  selectedEmail : string
  errors        : Errors | undefined
  onSubmit      : () => void
}

export const Actions: FC<Props> = memo(({ loading, errors, selectedEmail, onSubmit }) => (
  <Box sx={{ ...f('c'), width: '100%', my: 2 }}>
    <ErrorBox
      field  = 'general'
      errors = {errors}
      sx     = {{ root: { mb: 2 } }}
    />
    <Box sx={{ ...f('-c-sb'), width: '100%' }}>
      <CopyLinkBtn />

      <MDButton
        loading  = {loading}
        disabled = {Boolean(errors) || ! selectedEmail}
        color    = {errors ? 'text' : 'primary'}
        variant  = 'outlined'
        children = 'Сохранить'
        onClick  = {onSubmit}
      />
    </Box>
  </Box>
));
