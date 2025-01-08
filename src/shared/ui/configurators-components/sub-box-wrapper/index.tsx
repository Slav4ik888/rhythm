import { Box, Typography } from '@mui/material';
import { CustomTheme, useTheme } from 'app/providers/theme';
import { f } from 'shared/styles';
import { FC, memo, ReactNode } from 'react';



const useStyles = (theme: CustomTheme) => ({
  root: {
    ...f('c'),
    width        : '100%',
    border       : `1px solid ${theme.palette.dark.main}`,
    borderRadius : '8px',
    my           : 1,
    p            : 1,
  },
  title: {
    ...f('-c-c'),
    fontSize   : '1.1rem',
    color      : theme.palette.dark.main,
    textShadow : `0px 0px 3px ${theme.palette.dark.main}`,
  },
});


interface Props {
  title    : string
  children : ReactNode
}

export const ConfiguratorSubBoxWrapper: FC<Props> = memo(({ title, children }) => {
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
