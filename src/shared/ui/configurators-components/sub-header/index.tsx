import { Box } from '@mui/material';
import { CustomTheme, useTheme } from 'app/providers/theme';
import { f } from 'shared/styles';
import { FC, memo, ReactNode } from 'react';
import { ConfiguratorTitle } from '../sub-title';



const useStyles = (theme: CustomTheme) => ({
  root: {
    ...f('c'),
    width: '100%',
    pt: 2,
    pr: 2,
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
      <ConfiguratorTitle title={title} type='title1' />
      {
        children
      }
    </Box>
  )
});
