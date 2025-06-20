import { FC, useCallback, useState } from 'react';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import { AddUserContainer } from './container';
import { NavbarIcon } from 'shared/ui/navbar';



/**
 * Добавление пользователя в дашборд
 */
export const AddUserRoot: FC = () => {
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

      <AddUserContainer
        open          = {Boolean(anchorPro)}
        anchorEl      = {anchorPro}
        onClose       = {handleAddUserClose}
      />
    </>
  );
};
