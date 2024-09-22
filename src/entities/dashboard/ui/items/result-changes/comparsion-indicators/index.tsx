import { FC, memo } from "react";
import { Box } from '@mui/material';
import { MDTypography } from 'shared/ui/mui-design-components';



const useStyles = () => ({
  root: {
    display        : "flex",
    flexDirection  : "column",
    // justifyContent : "center",
    // alignItems: "center",
  },
});


interface Props {
  lastValue: number
  prevValue: number
}


/** Показатели для сравнения */
export const ComparisonIndicators: FC<Props> = memo(({ lastValue, prevValue }) => {
  const sx = useStyles();


  return (
    <Box sx={sx.root}>
      {/* <LastValue /> */}
      <MDTypography variant="h3">{lastValue}</MDTypography>
      {/* <Prev /> */}
      <MDTypography variant="h4">{prevValue}</MDTypography>
    </Box>
  );
});
