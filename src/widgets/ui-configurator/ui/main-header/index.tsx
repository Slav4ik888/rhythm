import { FC, memo } from 'react';
import { CustomTheme, useTheme, getTypography } from 'app/providers/theme';
import CloseIcon from '@mui/icons-material/Close';
import { MDBox, MDTypography } from 'shared/ui/mui-design-components';
import { IconButton } from '@mui/material';
import { SidebarDivider } from 'shared/ui/sidebar-divider';



const useStyles = (theme: CustomTheme) => {
  const { dark, white, mode } = theme.palette;
  const darkMode = mode === 'dark';
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


interface Props {
  onClose: () => void
}

export const UIConfiguratorMainHeader: FC<Props> = memo(({ onClose }) => {
  const sx = useStyles(useTheme());


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
          onClick = {onClose}
        >
          <CloseIcon sx={sx.icon} fontSize='small' />
        </IconButton>
      </MDBox>

      <SidebarDivider />
    </>
  )
});
