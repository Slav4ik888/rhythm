import { FC, useState } from 'react';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import { AddUserMenu } from './menu';
import { NavbarIcon } from 'shared/ui/navbar';



/**
 * Добавление пользователя в дашборд
 */
export const AddUserRoot: FC = () => {
  const [anchorPro, setAnchorPro] = useState<HTMLElement | null>(null);
  const isProfilesOpen = Boolean(anchorPro);

  const handleAddUserOpen = (event: { currentTarget: HTMLElement }) => setAnchorPro(event.currentTarget);
  const handleAddUserClose = () => setAnchorPro(null);


  return (
    <>
      <NavbarIcon
        toolTitle = 'Добавить пользователя'
        icon      = {PersonAddAlt1Icon}
        onClick   = {handleAddUserOpen}
      />

      <AddUserMenu
        open     = {isProfilesOpen}
        anchorEl = {anchorPro}
        onClose  = {handleAddUserClose}
      />
    </>
  );
};
