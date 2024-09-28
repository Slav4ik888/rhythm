import { FC, memo } from "react";
import { Box } from '@mui/material';
import { MDTypography } from 'shared/ui/mui-design-components';
import { addSpaceBetweenNumbers, getFixedFraction } from 'shared/helpers/numbers';
import { isNum } from 'shared/lib/validators';
import { ReportsLineChartConfig } from 'entities/dashboard';





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
    let fraction = item as unknown as string;

    if (isNum(item)) {
      fraction = getFixedFraction(item, {
        fractionDigits : config.resultChanges?.comparisonIndicators?.fractionDigits,
        addZero        : config.resultChanges?.comparisonIndicators?.addZero
      });
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
