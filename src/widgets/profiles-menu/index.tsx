import { FC, useState } from 'react';
import IconButton from '@mui/material/IconButton';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { ProfilesMenu } from './profiles-menu';
import { sxNavbarIconButton, sxNavbarIconsStyle } from 'shared/lib/styles/navbar';
import { CustomTheme, useUIConfiguratorController } from 'app/providers/theme';



interface Props {
  light?  : boolean
}

/**
 * Widjet ProfilesMenu
 * Кнопка входа в личные кабинеты активация открытия / закрытия
 */
export const ProfilesMenuRoot: FC<Props> = ({ light }) => {
  const [configuratorState] = useUIConfiguratorController();
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
        // color         = 'inherit'
        edge          = 'end' 
        sx            = {(theme) => sxNavbarIconButton(theme as CustomTheme)} 
        onClick       = {handleProfilesMenuOpen}
      >
        <AccountCircle
          fontSize='small'
          sx={(theme) => sxNavbarIconsStyle(theme as CustomTheme, configuratorState.navbarTransparent, light)}
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
