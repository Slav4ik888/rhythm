import { FC, useState } from 'react';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { ProfilesMenu } from './menu';
import { NavbarIcon } from 'shared/ui/navbar';



/**
 * Widjet ProfilesMenu
 * Кнопка входа в личные кабинеты активация открытия / закрытия
 */
export const ProfilesMenuRoot: FC = () => {
  const [anchorPro, setAnchorPro] = useState<HTMLElement | null>(null);
  const isProfilesOpen = Boolean(anchorPro);

  const handleProfilesMenuOpen = (event: { currentTarget: HTMLElement }) => setAnchorPro(event.currentTarget);
  const handleProfilesMenuClose = () => setAnchorPro(null);


  return (
    <>
      <NavbarIcon
        toolTitle = ''
        icon      = {AccountCircle}
        onClick   = {handleProfilesMenuOpen}
      />

      <ProfilesMenu
        open     = {isProfilesOpen}
        anchorEl = {anchorPro}
        onClose  = {handleProfilesMenuClose}
      />
    </>
  );
};
