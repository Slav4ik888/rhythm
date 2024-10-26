import { FC, memo } from 'react';
import { IconButton } from '@mui/material';
import SettingsIcon from '@mui/icons-material/Settings';
import { useTheme, setIsOpenConfigurator, useUIConfiguratorController, CustomTheme } from 'app/providers/theme';
import { sxNavbarIconButton, sxNavbarIconsStyle } from 'shared/lib/styles/navbar';



const useStyles = (
  theme             : CustomTheme,
  navbarTransparent : boolean,
  light             : boolean | undefined
) => ({
  button : sxNavbarIconButton(theme),
  icon   : sxNavbarIconsStyle(theme, navbarTransparent, light)
});


interface Props {
  light: boolean | undefined
}


export const OpenUIConfiguratorBtn: FC<Props> = memo(({ light }) => {
  const [configuratorState, dispatch] = useUIConfiguratorController();
  const sx = useStyles(useTheme(), configuratorState.navbarTransparent, light);

  const handleOpenConfigurator = () => setIsOpenConfigurator(dispatch, true);


  return (
    <IconButton
      disableRipple
      color   = "inherit"
      sx      = {sx.button}
      onClick = {handleOpenConfigurator}
    >
      <SettingsIcon
        fontSize = "small"
        sx       = {sx.icon}
      />
    </IconButton>
  )
});
