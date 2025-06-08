import { FC, memo } from 'react';
import { CustomTheme, useTheme } from 'app/providers/theme';
import CloseIcon from '@mui/icons-material/Close';
import { MDDivider } from '../../mui-design-components';
import { Box, IconButton, Typography } from '@mui/material';
import { f, getTypography } from '../../../styles';



const useStyles = (theme: CustomTheme) => {
  const {  configurator } = theme.palette;
  const { size } = getTypography(theme);

  return {
    root: {
      ...f('-fs-sb'),
      pt : 4,
      pb : 0.5,
      mb : 4,
    },
    titleBox: {
      ...f('c-fs'),
      width: '100%',
    },
    title: {
      fontSize    : size['2xl'], // `${size.lg} !important`,
      color       : configurator.title.headerColor,
      mb          : 1
    },
    subtitle: {
      fontSize    : size.md,
      color       : configurator.title.headerSubtitle,
    },
    icon: {
      fontSize    : `${size.lg} !important`,
      color       : configurator.title.headerIcon,
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
        <Box sx={sx.titleBox}>
          <Typography sx={sx.title}>
            Настройки интерфейса
          </Typography>
          <Typography sx={sx.subtitle}>
            Подберите для себя удобные опции.
          </Typography>
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
