import { FC, memo, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { useUI } from 'entities/ui';
import { f, pxToRem } from 'shared/styles';
import { AccessLevel, useCompany } from 'entities/company';
import Box from '@mui/material/Box';
import { Errors, isNotEmail } from 'shared/lib/validators';
import { copyToClipboard } from 'shared/lib/clipboard';
import { UsersWithAccessContainer } from './users-with-acces';
import { EmailContainer } from './email';
import { SetAccessContainer } from './set-access';
import Popover from '@mui/material/Popover';



interface Props {
  open     : boolean
  anchorEl : HTMLElement | null
  onClose  : () => void
}


export const AddUserMenu: FC<Props> = memo(({ open, anchorEl, onClose }) => {
  const { paramsCompany } = useCompany();
  const usersAccessDashboard = useMemo(() => {
    if (! paramsCompany || ! paramsCompany.members) return [];
    const allAccess = Object
      .values(paramsCompany?.members)
      .filter(member => member.access?.dashboard?.allFields === 'view'
        || member.access?.dashboard?.allFields === 'edit');

    return allAccess
  }, [paramsCompany]);
  console.log('usersAccessDashboard: ', usersAccessDashboard);

  const emailRef = useRef<HTMLInputElement | null>(null);
  const { loading, setErrorStatus } = useUI();
  const [errors, setErrors] = useState<Errors | undefined>(undefined);
  const [email, setEmail] = useState('');
  const [accessLevel, setAccessLevel] = useState<AccessLevel>('view');


  useEffect(() => {
    setEmail('');
    setErrors(undefined);
    setAccessLevel('view');
    if (emailRef && emailRef.current && open) emailRef.current.value = '';
  }, [open, setEmail, setErrors, setAccessLevel]);


  const handleChange = useCallback((e: any) => {
    console.log('e.target.value: ', e.target.value);
    if (isNotEmail(e.target.value)) setErrors({ email: 'Некорректный email' });
    else setErrors(undefined);
    setEmail(e.target.value);
  }, [setErrors, setEmail]);


  const handleSelectAccess = useCallback((e: any) => {
    setAccessLevel(e.target.value as AccessLevel);
  }, [setAccessLevel]);


  const handleEmailClick = useCallback((email: string) => {
    console.log('email: ', email);
    setEmail(email);
    if (emailRef?.current) emailRef.current.value = email;
  }, [setEmail]);


  const handleSubmit = useCallback(() => {
    const access = {
      email,
      accessLevel,
    };

    console.log('handleSubmit:', access);
    copyToClipboard(window.location.href);
  }, [email, accessLevel]);


  return (
    <Popover
      open            = {open}
      anchorEl        = {anchorEl}
      anchorOrigin    = {{ vertical: 'bottom', horizontal: 'left' }}
      transformOrigin = {{ vertical: 'top',    horizontal: 'right' }}
      onClose         = {onClose}
    >
      <Box sx={{ ...f('c'), gap: 2, width: pxToRem(400), m:2, p: 2 }}>
        <EmailContainer
          // @ts-ignore
          ref      = {emailRef}
          errors   = {errors}
          onChange = {handleChange}
        />
        {
          email && Boolean(! errors) && <SetAccessContainer
            accessLevel          = {accessLevel}
            email                = {email}
            loading              = {loading}
            errors               = {errors}
            usersAccessDashboard = {usersAccessDashboard}
            onClose              = {onClose}
            onSubmit             = {handleSubmit}
            onChange             = {handleSelectAccess}
          />
        }
        <UsersWithAccessContainer
          usersAccessDashboard = {usersAccessDashboard}
          onEmailClick         = {handleEmailClick}
        />
      </Box>
    </Popover>
  )
});
