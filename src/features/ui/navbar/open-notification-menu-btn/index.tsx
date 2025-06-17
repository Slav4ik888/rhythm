import { FC, memo, useState } from 'react';
import Menu from '@mui/material/Menu';
import Icon from '@mui/material/Icon';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { NotificationItem } from 'shared/ui/items';
import { NavbarIcon } from 'shared/ui/navbar';



export const OpenNotificationMenuBtn: FC = memo(() => {
  const [openMenu, setOpenMenu] = useState<Element | null>(null);

  const handleOpenMenu = (event: any) => { }; // setOpenMenu(event.currentTarget);
  const handleCloseMenu = () => setOpenMenu(null);


  return (
    <>
      <NavbarIcon
        toolTitle = 'Центр уведомлений'
        icon      = {NotificationsIcon}
        onClick   = {handleOpenMenu}
      />

      <Menu
        anchorEl = {openMenu}
        // anchorReference={null}
        anchorOrigin = {{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        open    = {Boolean(openMenu)}
        onClose = {handleCloseMenu}
        sx      = {{ mt: 2 }}
      >
        <NotificationItem icon={<Icon>email</Icon>} title='Check new messages' />
        <NotificationItem icon={<Icon>podcasts</Icon>} title='Manage Podcast sessions' />
        <NotificationItem icon={<Icon>shopping_cart</Icon>} title='Payment successfully completed' />
      </Menu>
    </>
  )
});
