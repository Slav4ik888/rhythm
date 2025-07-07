import { FC, memo } from 'react';
import Typography from '@mui/material/Typography';
import { Increased } from 'entities/dashboard-data';
import { getStyles } from './styles';



interface Props {
  fontSize   : number | undefined
  lineHeight : number | undefined
  increased  : Increased
  color      : string
}

/**
 * Знак + или -
 */
export const ItemDigitIndicatorPlusMinus: FC<Props> = memo(({ increased, ...rest }) => {
  // если значения отрицательные то падение статистики будет без '-' и надо его добавить
  const char = increased === 1
    ? '+'
    : increased === -1
      ? '-'
      : '';

  return (
    <Typography component='span' sx={getStyles(rest)}>
      {
        char
      }
    </Typography>
  )
});
