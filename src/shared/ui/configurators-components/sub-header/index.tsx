import { Box } from '@mui/material';
import { f } from 'app/styles';
import { FC, memo } from 'react';
import { MDTypography } from 'shared/ui/mui-design-components';



const useStyles = () => ({
  root: {
    ...f('-c-c'),
    width : '100%',
    py    : 2,
    pb    : 0.5,
    mt    : 1,
  },
});


interface Props {
  title: string
}

export const ConfiguratorSubHeader: FC<Props> = memo(({ title }) => {
  const sx = useStyles();


  return (
    <Box sx={sx.root}>
      <MDTypography
        color      = 'black'
        variant    = 'subtitle1'
        fontWeight = 'bold'
      >
        {title}
      </MDTypography>
    </Box>
  )
});
