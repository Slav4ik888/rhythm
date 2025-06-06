import { FC, memo, useState } from 'react';
import { IconButton, Menu, Icon } from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { NotificationItem } from 'shared/ui/items';
import { SxNavbarIcon } from 'widgets/navbar';



interface Props {
  sx: SxNavbarIcon
}

export const OpenNotificationMenuBtn: FC<Props> = memo(({ sx }) => {
  const [openMenu, setOpenMenu] = useState<Element | null>(null);

  const handleOpenMenu = (event: any) => { }; // setOpenMenu(event.currentTarget);
  const handleCloseMenu = () => setOpenMenu(null);


  return (
    <>
      <IconButton
        disableRipple
        color         = 'inherit'
        aria-controls = 'notification-menu'
        aria-haspopup = 'true'
        sx            = {sx.button}
        onClick       = {handleOpenMenu}
      >
        <NotificationsIcon sx={sx.icon} fontSize='small' />
      </IconButton>

      <Menu
        anchorEl={openMenu}
        // anchorReference={null}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        open={Boolean(openMenu)}
        onClose={handleCloseMenu}
        sx={{ mt: 2 }}
      >
        <NotificationItem icon={<Icon>email</Icon>} title='Check new messages' />
        <NotificationItem icon={<Icon>podcasts</Icon>} title='Manage Podcast sessions' />
        <NotificationItem icon={<Icon>shopping_cart</Icon>} title='Payment successfully completed' />
      </Menu>
    </>
  )
});
