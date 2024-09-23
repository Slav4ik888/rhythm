import { FC, memo } from "react";
import { Box } from '@mui/material';
import { MDTypography } from 'shared/ui/mui-design-components';
import { addSpaceBetweenNumbers, getFixedFraction } from 'shared/helpers/numbers';
import { isNum } from 'shared/lib/validators';



export interface ComparisonIndicatorsConfig {
  valuesCount?    : number // Сколько значений показывать
  fractionDigits? : number // Количество знаков после запятой
}


const useStyles = () => ({
  root: {
    display        : "flex",
    flexDirection  : "column",
    // justifyContent : "center",
    // alignItems: "center",
  },
});


interface Props {
  values  : number[] // 0 - lastValue, 1 - prevValue, 2 - nextValue
  config? : ComparisonIndicatorsConfig
}


/** Показатели для сравнения */
export const ComparisonIndicators: FC<Props> = memo(({ values: v, config = {} }) => {
  const sx = useStyles();

  const values = v.map(item => {
    let fraction = item;
    if (isNum(item)) {
      fraction = getFixedFraction(item, config.fractionDigits);
    }
    return addSpaceBetweenNumbers(fraction);
  });

  return (
    <Box sx={sx.root}>
      {
        values && values.map((v, i) => (
          <MDTypography
            key     = {i}
            variant = {i === 0 ? "h3" : "h5"}
          >
            {values[i]}
          </MDTypography>
        ))
      }
    </Box>
  );
});
