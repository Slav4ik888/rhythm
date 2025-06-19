import { FC, memo, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { useUI } from 'entities/ui';
import { f, pxToRem } from 'shared/styles';
import { AccessLevel, CompanyMember, ParamsCompany } from 'entities/company';
import Box from '@mui/material/Box';
import { Errors, isNotEmail } from 'shared/lib/validators';
import { UsersWithAccessContainer } from './users-with-acces';
import { SelectedEmailContainer } from './selected-email';
import Popover from '@mui/material/Popover';
import { Actions } from './actions';
import { Title } from './title';
import { setValueByScheme } from 'shared/helpers/objects';



interface Props {
  open          : boolean
  anchorEl      : HTMLElement | null
  paramsCompany : ParamsCompany
  onClose       : () => void
}


export const AddUserMenu: FC<Props> = memo(({ open, anchorEl, paramsCompany, onClose }) => {
  const usersAccessDashboard = useMemo(() => {
    if (! paramsCompany || ! paramsCompany.members) return [];
    const allAccess = Object
      .values(paramsCompany?.members)
      .filter(member => member.a?.d?.f === 'v' || member.a?.d?.f === 'e');

    return allAccess
  }, [paramsCompany]);
  console.log('usersAccessDashboard: ', usersAccessDashboard);

  const selectedEmailRef = useRef<HTMLInputElement | null>(null);
  const { loading } = useUI();
  const [errors, setErrors] = useState<Errors | undefined>(undefined);
  const [selectedEmail, setSelectedEmail] = useState('');
  const [selectedAccessLevel, setAccessLevel] = useState<AccessLevel>('v');

  const existingEmail = useMemo(() => usersAccessDashboard.find(access => access.e === selectedEmail),
    [usersAccessDashboard, selectedEmail]);

  useEffect(() => {
    setSelectedEmail('');
    setErrors(undefined);
    setAccessLevel('v');
    if (selectedEmailRef && selectedEmailRef.current && open) selectedEmailRef.current.value = '';
  }, [open]);


  const handleChange = useCallback((e: any) => {
    if (isNotEmail(e.target.value)) setErrors({ email: 'Некорректный email' });
    else setErrors(undefined);
    setSelectedEmail(e.target.value);
  }, [setErrors, setSelectedEmail]);


  const handleEmailClick = useCallback((email: string) => {
    setSelectedEmail(email);
    if (selectedEmailRef?.current) selectedEmailRef.current.value = email;
  }, [setSelectedEmail]);


  const handleSubmit = useCallback(() => {
    console.log('handleSubmit:');
    console.log('existingEmail:', existingEmail);

    const access = {
      ...(existingEmail ? existingEmail.a : {}),
      e: selectedEmail,
    } as CompanyMember;

    setValueByScheme(access, 'a.d.aF', selectedAccessLevel);

    console.log('access:', access);
  }, [selectedEmail, selectedAccessLevel, existingEmail]);


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
        <UsersWithAccessContainer
          usersAccessDashboard = {usersAccessDashboard}
          onEmailClick         = {handleEmailClick}
        />
        <Actions
          selectedEmail = {selectedEmail}
          loading       = {loading}
          errors        = {errors}
          onSubmit      = {handleSubmit}
        />
      </Box>
    </Popover>
  )
});
