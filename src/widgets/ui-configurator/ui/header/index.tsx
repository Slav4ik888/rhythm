import { memo } from 'react';
import {
  CustomTheme, setIsOpenConfigurator, useTheme, useUIConfiguratorController,
  UIConfiguratorProviderState, getTypography
} from 'app/providers/theme';
import CloseIcon from '@mui/icons-material/Close';
import { MDBox, MDTypography } from 'shared/ui/mui-design-components';
import { IconButton } from '@mui/material';
import { SidenavDivider } from 'shared/ui/sidenav-divider';



const useStyles = (
  theme           : CustomTheme,
  configuratorState: UIConfiguratorProviderState,
) => {
  const { dark, white } = theme.palette;
  const darkMode = configuratorState.mode === 'dark';
  const { size } = getTypography(theme);

  return {
    root: {
      display        : 'flex',
      justifyContent : 'flex-end',
      // alignItems     : 'baseline',
      pt             : 4,
      pb             : 0.5,
      mb             : 2,
    },
    icon: {
      fontSize    : `${size.lg} !important`,
      color       : darkMode ? white.main : dark.main,
      stroke      : 'currentColor',
      strokeWidth : '1px',
      cursor      : 'pointer',
      // transform   : 'translateY(5px)', // Сдвинуть вниз
    }
  }
};


export const UIConfiguratorHeader = memo(() => {
  const [configuratorState, dispatch] = useUIConfiguratorController();
  const sx = useStyles(useTheme(), configuratorState);

  const handleClose = () => setIsOpenConfigurator(dispatch, false);


  return (
    <>
      <MDBox sx={sx.root}>
        <MDBox width='100%'>
          <MDTypography
            color      = 'black'
            variant    = 'h6'
            fontWeight = 'bold'
            textAlign  = 'center'
          >
            Настройки интерфейса
          </MDTypography>
          {/* <MDTypography variant='body2' color='text'>
            See our dashboard options.
          </MDTypography> */}
        </MDBox>

        <IconButton
          color   = 'inherit'
          onClick = {handleClose}
        >
          <CloseIcon sx={sx.icon} fontSize='small' />
        </IconButton>
      </MDBox>

      <SidenavDivider />
    </>
  )
});
