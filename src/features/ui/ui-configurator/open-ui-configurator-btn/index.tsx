import { FC, memo } from 'react';
import { IconButton } from '@mui/material';
import SettingsIcon from '@mui/icons-material/Settings';
import { setIsOpenConfigurator, useUIConfiguratorController } from 'app/providers/theme';
import { SxNavbarIcon } from 'widgets/navbar';



interface Props {
  sx: SxNavbarIcon
}

export const OpenUIConfiguratorBtn: FC<Props> = memo(({ sx }) => {
  const [_, dispatch] = useUIConfiguratorController();

  const handleOpenConfigurator = () => setIsOpenConfigurator(dispatch, true);


  return (
    <IconButton
      disableRipple
      color   = 'inherit'
      sx      = {sx.button}
      onClick = {handleOpenConfigurator}
    >
      <SettingsIcon
        fontSize = 'small'
        sx       = {sx.icon}
      />
    </IconButton>
  )
});
