import { FC, memo, ReactNode } from 'react';
import Box from '@mui/material/Box';
import { CustomTheme, useTheme } from 'app/providers/theme';
import { f } from 'shared/styles';
import { ConfiguratorTitle } from '../sub-title';



const useStyles = (theme: CustomTheme) => ({
  root: {
    ...f('c'),
    width        : '100%',
    border       : `1px solid ${theme.palette.dark.main}`,
    borderRadius : '8px',
    my           : 1,
    pl           : 1,
    pr           : 2
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
      <ConfiguratorTitle title={title} type='title2' />
      {
        children
      }
    </Box>
  )
});
