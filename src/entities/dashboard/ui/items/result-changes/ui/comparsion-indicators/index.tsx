import { FC, memo } from "react";
import { Box } from '@mui/material';
import { MDTypography } from 'shared/ui/mui-design-components';
import { addSpaceBetweenNumbers, getFixedFraction } from 'shared/helpers/numbers';
import { isNum } from 'shared/lib/validators';
import { ReportsLineChartConfig } from 'shared/ui/charts/line-charts/reports-line-chart2/config-type';




const useStyles = () => ({
  root: {
    display       : "flex",
    flexDirection : "column",
    alignItems    : "flex-end",
  },
});


interface Props {
  values  : number[] // 0 - lastValue, 1 - prevValue, 2 - nextValue
  config? : ReportsLineChartConfig
}


/** Показатели для сравнения */
export const ComparisonIndicators: FC<Props> = memo(({ values: v, config = {} }) => {
  const sx = useStyles();

  const values = v.map(item => {
    let fraction = item;
    if (isNum(item)) {
      fraction = getFixedFraction(item, config.resultChanges?.comparisonIndicators?.fractionDigits);
    }
    return addSpaceBetweenNumbers(fraction);
  });


  return (
    <Box sx={sx.root}>
      {
        values && values.map((v, i) => (
          <MDTypography
            key     = {i}
            variant = {i === 0 ? "h4" : "body2"}
          >
            {values[i]}
          </MDTypography>
        ))
      }
    </Box>
  );
});
