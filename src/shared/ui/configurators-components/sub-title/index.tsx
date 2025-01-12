import { FC, memo } from 'react';
import { Typography } from '@mui/material';
import { CustomTheme, useTheme } from 'app/providers/theme';
import { f } from 'shared/styles';


type Type = 'title' | 'subtitle'


const useStyles = (theme: CustomTheme, type: Type) => {
  const title = type === 'title';

  return {
    root: {
      ...f('-c'),
      justifyContent : title ? 'center' : 'flexStart',
      fontSize       : title ? '1.2rem' : '1.1rem',
      color          : theme.palette.dark.main,
      // textShadow : `0px 0px 3px ${theme.palette.dark.main}`,
    },
  }
};


interface Props {
  title: string
  type: Type
}

export const ConfiguratorSubTitle: FC<Props> = memo(({ title, type }) => {
  const sx = useStyles(useTheme(), type);

  return (
    <Typography sx={sx.root}>
      {title}
    </Typography>
  )
});
