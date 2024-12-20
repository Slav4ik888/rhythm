import { FC, memo } from 'react';
import { CustomTheme, useTheme, getTypography } from 'app/providers/theme';
import CloseIcon from '@mui/icons-material/Close';
import { MDDivider } from 'shared/ui/mui-design-components';
import { Box, IconButton, Typography } from '@mui/material';
import { f } from 'app/styles';



const useStyles = (theme: CustomTheme) => {
  const { dark, white, mode } = theme.palette;
  const darkMode = mode === 'dark';
  const { size } = getTypography(theme);

  return {
    root: {
      ...f('--fe'),
      pt : 4,
      pb : 0.5,
      mb : 2,
    },
    title: {
      fontSize    : size.xl, // `${size.lg} !important`,
      color       : darkMode ? white.main : dark.main,
      textAlign   : 'center',
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

export const ConfiguratorMainHeader: FC<Props> = memo(({ onClose }) => {
  const sx = useStyles(useTheme());


  return (
    <>
      <Box sx={sx.root}>
        <Box width='100%'>
          <Typography sx={sx.title}>
            Настройки элемента
          </Typography>
          {/* <Typography variant='body2' color='text'>
            See our dashboard options.
          </Typography> */}
        </Box>

        <IconButton
          color   = 'inherit'
          onClick = {onClose}
        >
          <CloseIcon sx={sx.icon} fontSize='small' />
        </IconButton>
      </Box>
      <MDDivider />
    </>
  )
});
