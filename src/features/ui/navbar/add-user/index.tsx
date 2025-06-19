import { FC, useCallback, useMemo, useState } from 'react';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import { AddUserMenu } from './menu';
import { NavbarIcon } from 'shared/ui/navbar';
import { useCompany, checkAccess } from 'entities/company';
import { useUser } from 'entities/user';



/**
 * Добавление пользователя в дашборд
 */
export const AddUserRoot: FC = () => {
  const { paramsCompany } = useCompany();
  const { email } = useUser();
  const [anchorPro, setAnchorPro] = useState<HTMLElement | null>(null);
  const notAccess = useMemo(() => ! checkAccess(paramsCompany, 'a.d.f', email, 'e'),
    [email, paramsCompany]);


  const handleAddUserOpen = useCallback((event: { currentTarget: HTMLElement }) => {
    if (notAccess) return;
    setAnchorPro(event.currentTarget);
  }, [notAccess]);

  const handleAddUserClose = () => setAnchorPro(null);


  return (
    <>
      <NavbarIcon
        toolTitle = 'Добавить пользователя'
        icon      = {PersonAddAlt1Icon}
        disabled  = {notAccess}
        onClick   = {handleAddUserOpen}
      />

      <AddUserMenu
        open          = {Boolean(anchorPro)}
        anchorEl      = {anchorPro}
        paramsCompany = {paramsCompany}
        onClose       = {handleAddUserClose}
      />
    </>
  );
};
