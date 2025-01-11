import { FC, memo, ReactNode } from 'react';
import { Box } from '@mui/material';
import { CustomTheme, useTheme } from 'app/providers/theme';
import { f } from 'shared/styles';
import { ConfiguratorSubTitle } from '../sub-title';



const useStyles = (theme: CustomTheme) => ({
  root: {
    ...f('c'),
    width        : '100%',
    border       : `1px solid ${theme.palette.dark.main}`,
    borderRadius : '8px',
    my           : 1,
    p            : 1,
  }
});


interface Props {
  title    : string
  children : ReactNode
}

export const ConfiguratorSubBoxWrapper: FC<Props> = memo(({ title, children }) => {
  const sx = useStyles(useTheme());


  return (
    <Box sx={sx.root}>
      <ConfiguratorSubTitle title={title} type='title' />
      {
        children
      }
    </Box>
  )
});
