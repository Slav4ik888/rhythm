import { FC, memo } from 'react';
import { SignupData, useSignup } from '../../model';
import Box from '@mui/material/Box';
import { CheckboxContainer as Checkbox } from 'shared/ui/containers/items';
import { PolicyDescription } from './policy-description';
import { ErrorBox } from 'shared/ui/containers';
import { UseGroup } from 'shared/lib/hooks';
import { CustomTheme, useTheme } from 'app/providers/theme';
import { f } from 'app/styles';



const useStyles = (theme: CustomTheme) => ({
  root: {
    ...f('c-fs'),
    textAlign  : 'left',
    fontSize   : '0.8rem',
    lineHeight : 1.4,
    mt         : 4,
    mb         : 2
  },
  boxCheck: {
    ...f('-c'),
    my: 0.5
  },
  sxBox: {
    backgroundColor : theme.palette.background.paper,
    pr              : 1.1
  },
  checkbox: {
    '&.Mui-checked': {
      color: theme.palette.primary.dark
    },
    color: theme.palette.primary.dark
  }
});


type Props = {
  group: UseGroup<SignupData>
}


export const GettingPermissionsContainer: FC<Props> = memo(({ group: S }) => {
  const
    sx = useStyles(useTheme()),
    { errors } = useSignup();

  
  return (
    <Box sx={sx.root}>
      <Box sx={sx.boxCheck}>
        <Checkbox
          scheme     = 'permissions'
          group      = {S}
          box
          sx         = {{ bg: sx.sxBox }}
          sxCheckbox = {sx.checkbox}
        />
        <PolicyDescription />
      </Box>

      {/* <FormControlLabel
        value="Разрешаю"
        control={<Checkbox className={classes.checkbox} onChange={handleChange} name="sending" />}
        label="Разрешаю отправлять на указанную электронную почту сообщения: о результатах выполненных мною заданий, об изменниях на сайте, которые могут быть мне полезны."
        labelPlacement="end"
        className={classes.label}
      /> */}

      <ErrorBox
        field  = 'permissions'
        errors = {errors}
        sx     = {{ root: { mt: 1 } }}
      />
    </Box>
  );
});
