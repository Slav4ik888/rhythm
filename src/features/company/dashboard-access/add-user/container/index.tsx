import { FC, memo, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { f, pxToRem } from 'shared/styles';
import { AccessLevel, useCompany } from 'entities/company';
import Box from '@mui/material/Box';
import { Errors, isNotEmail } from 'shared/lib/validators';
import { UsersWithAccessContainer } from './users-with-acces';
import { SelectedEmailContainer } from './selected-email';
import Popover from '@mui/material/Popover';
import { Actions } from './actions';
import { Title } from './title';
import { isOwner } from 'entities/company/model/utils';



interface Props {
  open     : boolean
  anchorEl : HTMLElement | null
  onClose  : () => void
}


export const AddUserContainer: FC<Props> = memo(({ open, anchorEl, onClose }) => {
  const { paramsCompany, usersAccessDashboard, clearErrors } = useCompany();
  const selectedEmailRef = useRef<HTMLInputElement | null>(null);
  const [errors, setErrors] = useState<Errors | undefined>(undefined);
  const [selectedEmail, setSelectedEmail] = useState('');
  const [selectedAccessLevel, setAccessLevel] = useState<AccessLevel>('v');

  const existingEmail = useMemo(() => usersAccessDashboard.find(access => access.e === selectedEmail),
    [usersAccessDashboard, selectedEmail]);


  useEffect(() => {
    setSelectedEmail('');
    clearErrors(); // In Company
    setErrors(undefined);
    setAccessLevel('v');
    if (selectedEmailRef && selectedEmailRef.current && open) selectedEmailRef.current.value = '';
  }, [open, clearErrors]);


  const handleChange = useCallback((e: any) => {
    const value = String(e.target.value).toLowerCase();

    if (isNotEmail(value)) {
      setErrors({ email: 'Некорректный email' });
    }
    else if (isOwner(paramsCompany, value)) {
      setErrors({ email: 'Нельзя изменить права владельца аккаунта компании' });
    }
    else {
      setErrors(undefined);
    }
    setSelectedEmail(value);
  }, [paramsCompany, setSelectedEmail]);


  const handleEmailClick = useCallback((email: string) => {
    setSelectedEmail(email);
    if (selectedEmailRef?.current) selectedEmailRef.current.value = email;
  }, [setSelectedEmail]);


  return (
    <Popover
      open            = {open}
      anchorEl        = {anchorEl}
      anchorOrigin    = {{ vertical: 'bottom', horizontal: 'left' }}
      transformOrigin = {{ vertical: 'top',    horizontal: 'right' }}
      onClose         = {onClose}
    >
      <Box sx={{ ...f('c'), gap: 2, width: pxToRem(400), m:2, mx: 4 }}>
        <Title label='Настройка доступа' variant='h6' />
        <SelectedEmailContainer
          // @ts-ignore
          ref                 = {selectedEmailRef}
          errors              = {errors}
          selectedAccessLevel = {selectedAccessLevel}
          selectedEmail       = {selectedEmail}
          existingEmail       = {existingEmail}
          onSetAccessLevel    = {setAccessLevel}
          onChange            = {handleChange}
        />
        <UsersWithAccessContainer onEmailClick={handleEmailClick} />
        <Actions
          selectedEmail       = {selectedEmail}
          existingEmail       = {existingEmail}
          selectedAccessLevel = {selectedAccessLevel}
          onClose             = {onClose}
        />
      </Box>
    </Popover>
  )
});
