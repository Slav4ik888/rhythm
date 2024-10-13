import { FC, memo } from 'react';
import { IconButton } from '@mui/material';
import SettingsIcon from '@mui/icons-material/Settings';
import { useSelector } from 'react-redux';
import { selectCompanyId } from 'entities/companies';
import { setOpenConfigurator, useUIConfiguratorController, pxToRem } from 'app/providers/theme';



const useStyles = () => ({
  root: {
    position: 'relative',
    display: 'flex',
    width: 120,
    mr: 1
  },
  select: {
    visibility: 'hidden',
    opacity: 0,
    height: pxToRem(38)
  }
});



export const OpenUIConfiguratorBtn: FC = memo(() => {
  const sx = useStyles();
  const companyId = useSelector(selectCompanyId);
  const [configuratorState, dispatch] = useUIConfiguratorController();
  const { isOpenConfigurator } = configuratorState;

  const handleToggleConfigurator = () => setOpenConfigurator(dispatch, ! isOpenConfigurator);


  return (
    <IconButton
      disableRipple
      color   = "inherit"
      sx      = {navbarIconButton}
      onClick = {handleToggleConfigurator}
    >
      <SettingsIcon sx={iconsStyle} fontSize="small" />
    </IconButton>
  )
});
