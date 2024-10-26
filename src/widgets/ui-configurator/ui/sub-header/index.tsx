import { FC, memo } from 'react';
import { MDBox, MDTypography } from 'shared/ui/mui-design-components';



const useStyles = () => ({
  root: {
    display        : 'flex',
    alignItems     : 'center',
    justifyContent : 'center',
    width          : '100%',
    py             : 2,
    pb             : 0.5,
    mt             : 1,
  },
});


interface Props {
  title: string
}

export const UIConfiguratorSubHeader: FC<Props> = memo(({ title }) => {
  const sx = useStyles();


  return (
    <MDBox sx={sx.root}>
      <MDTypography
        color      = 'black'
        variant    = 'subtitle1'
        fontWeight = 'bold'
      >
        {title}
      </MDTypography>
    </MDBox>
  )
});
