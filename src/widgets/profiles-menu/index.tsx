import { FC, useState } from 'react';
import IconButton from '@mui/material/IconButton';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { ProfilesMenu } from './profiles-menu';
import { SxNavbarIcon } from 'widgets/navbar';



interface Props {
  sx: SxNavbarIcon
}

/**
 * Widjet ProfilesMenu
 * Кнопка входа в личные кабинеты активация открытия / закрытия
 */
export const ProfilesMenuRoot: FC<Props> = ({ sx }) => {
  const [anchorPro, setAnchorPro] = useState<HTMLElement | null>(null);
  const isProfilesOpen = Boolean(anchorPro);
  const menuId         = 'profile-menu';
  
  const handleProfilesMenuOpen = (event: { currentTarget: HTMLElement }) => setAnchorPro(event.currentTarget);
  const handleProfilesMenuClose = () => setAnchorPro(null);


  return (
    <>
      <IconButton
        disableRipple
        aria-label    = 'account of current user'
        aria-controls = {menuId}
        aria-haspopup = 'true'
        edge          = 'end' 
        sx            = {sx.button} 
        onClick       = {handleProfilesMenuOpen}
      >
        <AccountCircle
          fontSize='small'
          sx={sx.icon}
        />
      </IconButton>

      <ProfilesMenu
        open     = {isProfilesOpen}
        menuId   = {menuId}
        anchorEl = {anchorPro}
        onClose  = {handleProfilesMenuClose}
      />
    </>
  );
};
