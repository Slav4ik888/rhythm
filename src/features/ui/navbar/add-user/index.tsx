import { FC, useCallback, useState } from 'react';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import { AddUserMenu } from './menu';
import { NavbarIcon } from 'shared/ui/navbar';
import { useCompany } from 'entities/company';



/**
 * Добавление пользователя в дашборд
 */
export const AddUserRoot: FC = () => {
  const { paramsCompany } = useCompany();
  const [anchorPro, setAnchorPro] = useState<HTMLElement | null>(null);

  const handleAddUserOpen = useCallback((event: { currentTarget: HTMLElement }) => {
    setAnchorPro(event.currentTarget);
  }, []);

  const handleAddUserClose = () => setAnchorPro(null);


  return (
    <>
      <NavbarIcon
        toolTitle = 'Добавить пользователя'
        icon      = {PersonAddAlt1Icon}
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
