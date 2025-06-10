import { FC, memo } from 'react';
import { CustomTheme, useTheme } from 'app/providers/theme';
import CloseIcon from '@mui/icons-material/Close';
import { MDDivider } from '../../mui-design-components';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import { f, getTypography } from '../../../styles';



const useStyles = (theme: CustomTheme) => {
  const {  configurator } = theme.palette;
  const { size } = getTypography(theme);

  return {
    root: {
      ...f('-fs-sb'),
      pb : 0.5,
      mb : 3,
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
  ui?     : boolean
  view?   : boolean
  onClose : () => void
}

export const ConfiguratorMainHeader: FC<Props> = memo(({ ui, view, onClose }) => {
  const sx = useStyles(useTheme());


  if (! ui && ! view) return null;

  return (
    <>
      <Box sx={sx.root}>
        <Box sx={sx.titleBox}>
          <Typography sx={sx.title}>
            {`Настройк${ui ? 'и интерфейса' : 'а элементов'}`}
          </Typography>
          {
            ui && (
              <Typography sx={sx.subtitle}>
                Подберите для себя удобные опции.
              </Typography>
            )
          }
        </Box>

        <IconButton color='inherit' onClick={onClose}>
          <CloseIcon sx={sx.icon} fontSize='small' />
        </IconButton>
      </Box>
      <MDDivider />
    </>
  )
});
