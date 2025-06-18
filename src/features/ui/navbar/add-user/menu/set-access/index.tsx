import { FC, memo, useMemo } from 'react';
import FormControl from '@mui/material/FormControl';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import { f, pxToRem } from 'shared/styles';
import { AccessLevel, CompanyMember } from 'entities/company';
import { Errors } from 'shared/lib/validators';
import { Title } from '../title';
import { Actions } from '../actions';
import Box from '@mui/material/Box';
import { CustomTheme } from 'app/providers/theme';



const radioLabelStyle = {
  '& .MuiFormControlLabel-label': {
    fontSize: pxToRem(16),
    mr: 0,
  },
  '& .MuiRadio-root': {
    p: 0.4
  }
};

interface Props {
  loading              : boolean
  usersAccessDashboard : CompanyMember[]
  email                : string
  errors               : Errors | undefined
  accessLevel          : AccessLevel
  onChange             : (e: any) => void
  onClose              : () => void
  onSubmit             : () => void
}


export const SetAccessContainer: FC<Props> = memo(({
  email, loading, accessLevel, errors, usersAccessDashboard, onChange, onClose, onSubmit
}) => {
  const isEmailPresent = useMemo(() => Boolean(usersAccessDashboard.find(access => access.email === email)),
    [email, usersAccessDashboard]);

  return (
    <Box
      sx={(theme) => ({
        ...f('c'),
        gap          : 2,
        background   : (theme as CustomTheme).palette.background.paperLight,
        borderRadius : pxToRem(8),
        width        : '100%',
        p            : 2
      })}
    >
      <Title label='Укажите уровень доступа' />

      <FormControl sx={{ width: '100%', pl: pxToRem(48) }}>
        <RadioGroup
          name     = 'accessLevel-toggle'
          value    = {accessLevel}
          onChange = {onChange}
        >
          <FormControlLabel
            label   = 'Просмотр'
            value   = 'view'
            control = {<Radio />}
            sx      = {radioLabelStyle}
          />
          <FormControlLabel
            label   = 'Редактирование'
            value   = 'edit'
            control = {<Radio />}
            sx      = {radioLabelStyle}
          />
          {
            isEmailPresent && (
              <FormControlLabel
                label   = 'Закрыть доступ'
                value   = 'none'
                control = {<Radio />}
                sx      = {radioLabelStyle}
              />
            )
          }
        </RadioGroup>
      </FormControl>

      <Actions
        email          = {email}
        loading        = {loading}
        errors         = {errors}
        accessLevel    = {accessLevel}
        isEmailPresent = {isEmailPresent}
        onClose        = {onClose}
        onSubmit       = {onSubmit}
      />
    </Box>
  )
});
