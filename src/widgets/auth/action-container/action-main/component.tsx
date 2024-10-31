import { FC, memo } from 'react';
import { Box } from '@mui/material';
import { ErrorBox } from 'shared/ui/containers';
import { Errors } from 'shared/lib/validators';
import { MDButton } from 'shared/ui/mui-design-components';



const useStyles = () => ({
  root: {
    width : '100%'
  },
  button: {
    root: {
      width  : '100%',
      height : '50px'
    }
  },
  error: {
    root: {
      mb: 2
    }
  }
});


interface Props {
  textBtn  : string
  errors   : Errors
  loading  : boolean
  disabled : boolean
  onSubmit : () => void
}


/** Кнопка "Зарегистрироваться" | "Войти" */
export const ActionMainComponent: FC<Props> = memo(({ textBtn, loading, errors, disabled, onSubmit }) => {
  const { root, error, button } = useStyles();
  

  return (
    <Box sx={root}>
      <ErrorBox
        field  = 'general'
        errors = {errors}
        sx     = {error}
      />
      <MDButton
        loading  = {loading || disabled}
        color    = 'primary'
        children = {textBtn}
        sx       = {button}
        onClick  = {onSubmit}
      />
    </Box>
  )
});
