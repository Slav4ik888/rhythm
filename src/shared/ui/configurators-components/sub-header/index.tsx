import { Box, Typography } from '@mui/material';
import { CustomTheme, useTheme } from 'app/providers/theme';
import { f } from 'app/styles';
import { FC, memo, ReactNode } from 'react';
import { MDDivider } from 'shared/ui/mui-design-components';



const useStyles = (theme: CustomTheme) => ({
  root: {
    ...f('c'),
    width: '100%',
  },
  title: {
    ...f('-c-c'),
    fontSize : '1.3rem',
    color    : theme.palette.dark.main,
    my       : 3,
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
      {/* <MDDivider mt={1} mb={2} /> */}
      {
        children
      }
    </Box>
  )
});
