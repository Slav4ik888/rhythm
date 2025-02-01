import { FC, memo } from 'react';
import { CardItem, stylesToSx } from 'entities/dashboard-view';
import { Box, Typography } from '@mui/material';
import { Increased } from 'entities/dashboard-data';



const useStyles = (item: CardItem, color: string) => {
  const root: any = {};

  if (item?.styles?.fontSize) root.fontSize = stylesToSx(item?.styles)?.fontSize;
  if (item?.styles?.lineHeight) root.lineHeight = stylesToSx(item?.styles)?.lineHeight;

  return {
    root: {
      ...root,
      color,
    },
  }
};


interface Props {
  item      : CardItem
  increased : Increased
  color     : string
}

/**
 * Знак + или -
 */
export const ItemDigitIndicatorPlusMinus: FC<Props> = memo(({ item, increased, color }) => {
  const sx = useStyles(item, color);

  if (! item?.settings?.plusMinus) return null

  // если значения отрицательные то падение статистики будет без '-' и надо его добавить
  const char = increased === 1
    ? '+'
    : increased === -1
      ? '-'
      : '';

  return (
    <Typography component='span' sx={sx.root}>
      {
        char
      }
    </Typography>
  )
});
