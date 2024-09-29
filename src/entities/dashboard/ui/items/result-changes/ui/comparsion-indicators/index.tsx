import { FC, memo } from "react";
import { Box } from '@mui/material';
import { MDTypography } from 'shared/ui/mui-design-components';
import { addSpaceBetweenNumbers, getFixedFraction, getReducedWithPrefix } from 'shared/helpers/numbers';
import { isNum } from 'shared/lib/validators';
import { ReportsLineChartConfig } from 'entities/dashboard';





const useStyles = () => ({
  root: {
    display       : "flex",
    flexDirection : "column",
    alignItems    : "flex-end",
  },
});


interface Value {
  value  : string
  prefix : string
}

interface Props {
  values  : number[] // 0 - lastValue, 1 - prevValue, 2 - nextValue
  config? : ReportsLineChartConfig
}


/** Показатели для сравнения */
export const ComparisonIndicators: FC<Props> = memo(({ values: v, config = {} }) => {
  const sx = useStyles();

  const values: Value[] = v.map(startValue => {
    // Убираем разряды и определяем префикс
    let resultValue: any = startValue;
    let prefix = '';

    if (config.resultChanges?.comparisonIndicators?.reduce) {
      const { value: v, prefix: p = '' } = getReducedWithPrefix(startValue);
      resultValue = v;
      prefix = p;
    }

    // Обрабатываем десятичные
    if (isNum(resultValue)) {
      resultValue = getFixedFraction(resultValue, {
        fractionDigits : config.resultChanges?.comparisonIndicators?.fractionDigits,
        addZero        : config.resultChanges?.comparisonIndicators?.addZero
      })
    }
    
    return {
      prefix,
      value: addSpaceBetweenNumbers(resultValue as number)
    }
  });


  return (
    <Box sx={sx.root}>
      {
        values && values.map((v, i) => (
          <MDTypography
            key     = {i}
            variant = {i === 0 ? "h4" : "body2"}
          >
            {values[i].value}{values[i].prefix && (" " + values[i].prefix)}
          </MDTypography>
        ))
      }
    </Box>
  );
});
