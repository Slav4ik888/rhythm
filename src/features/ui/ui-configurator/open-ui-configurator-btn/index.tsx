import { FC, memo } from 'react';
import SettingsIcon from '@mui/icons-material/Settings';
import { setIsOpenConfigurator, useUIConfiguratorController } from 'app/providers/theme';
import { NavbarIcon } from 'shared/ui/navbar';



export const OpenUIConfiguratorBtn: FC = memo(() => {
  const [_, dispatch] = useUIConfiguratorController();

  const handleOpenConfigurator = () => setIsOpenConfigurator(dispatch, true);

  return (
    <NavbarIcon
      toolTitle = 'Настройки интерфейса'
      icon      = {SettingsIcon}
      onClick   = {handleOpenConfigurator}
    />
  )
});
