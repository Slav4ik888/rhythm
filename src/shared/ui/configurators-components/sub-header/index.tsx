import { Box, Typography } from '@mui/material';
import { CustomTheme, useTheme } from 'app/providers/theme';
import { f } from 'shared/styles';
import { FC, memo, ReactNode } from 'react';



const useStyles = (theme: CustomTheme) => ({
  root: {
    ...f('c'),
    width: '100%',
  },
  title: {
    ...f('-c-c'),
    fontSize   : '1.3rem',
    color      : theme.palette.subHeader.main,
    textShadow : `0px 0px 3px ${theme.palette.subHeader.light}`,
    my         : 3,
  },
});


interface Props {
  title    : string
  children : ReactNode
}

export const ConfiguratorSubHeader: FC<Props> = memo(({ title, children }) => {
  const sx = useStyles(useTheme());


  return (
    <Box sx={sx.root}>
      <Typography sx={sx.title}>
        {title}
      </Typography>
      {
        children
      }
    </Box>
  )
});
