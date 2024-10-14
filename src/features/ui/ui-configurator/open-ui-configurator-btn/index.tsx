import { FC, memo } from 'react';
import { IconButton } from '@mui/material';
import SettingsIcon from '@mui/icons-material/Settings';
import {
  useTheme, setOpenConfigurator, useUIConfiguratorController, CustomTheme, UIConfiguratorProviderState
} from 'app/providers/theme';
import { sxNavbarIconButton, sxNavbarIconsStyle } from 'shared/lib/styles/navbar';



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


export const OpenUIConfiguratorBtn: FC<Props> = memo(({ light }) => {
  const [configuratorState, dispatch] = useUIConfiguratorController();
  const sx = useStyles(useTheme(), configuratorState, light);
  const { openConfigurator } = configuratorState;

  const handleToggleConfigurator = () => setOpenConfigurator(dispatch, ! openConfigurator);


  return (
    <IconButton
      disableRipple
      color   = "inherit"
      sx      = {sx.button}
      onClick = {handleToggleConfigurator}
    >
      <SettingsIcon
        fontSize = "small"
        sx       = {sx.icon}
      />
    </IconButton>
  )
});
