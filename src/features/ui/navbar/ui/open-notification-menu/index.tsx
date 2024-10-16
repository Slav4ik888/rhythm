import { FC, memo, useState } from 'react';
import { IconButton, Menu, Icon } from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications';
import {
  useTheme, useUIConfiguratorController, CustomTheme, UIConfiguratorProviderState
} from 'app/providers/theme';
import { sxNavbarIconButton, sxNavbarIconsStyle } from '../../../../../shared/lib/styles/navbar';
import NotificationItem from "shared/ui/items/notification-item";



const useStyles = (
  theme             : CustomTheme,
  configuratorState : UIConfiguratorProviderState,
  light             : boolean | undefined
) => ({
  button : sxNavbarIconButton(theme),
  icon   : sxNavbarIconsStyle(theme, configuratorState, light)
});


interface Props {
  light: boolean | undefined
}


export const OpenNotificationMenuBtn: FC<Props> = memo(({ light }) => {
  const [configuratorState] = useUIConfiguratorController();
  const sx = useStyles(useTheme(), configuratorState, light);
  const { openConfigurator } = configuratorState;
  const [openMenu, setOpenMenu] = useState<Element | null>(null);

  const handleOpenMenu = (event: any) => setOpenMenu(event.currentTarget);
  const handleCloseMenu = () => setOpenMenu(null);


  return (
    <>
      <IconButton
        disableRipple
        color         = "inherit"
        aria-controls = "notification-menu"
        aria-haspopup = "true"
        sx            = {sx.button}
        onClick       = {handleOpenMenu}
      >
        <NotificationsIcon sx={sx.icon} fontSize="small" />
      </IconButton>

      <Menu
        anchorEl={openMenu}
        // anchorReference={null}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        open={Boolean(openMenu)}
        onClose={handleCloseMenu}
        sx={{ mt: 2 }}
      >
        <NotificationItem icon={<Icon>email</Icon>} title="Check new messages" />
        <NotificationItem icon={<Icon>podcasts</Icon>} title="Manage Podcast sessions" />
        <NotificationItem icon={<Icon>shopping_cart</Icon>} title="Payment successfully completed" />
      </Menu>
    </>
  )
});
