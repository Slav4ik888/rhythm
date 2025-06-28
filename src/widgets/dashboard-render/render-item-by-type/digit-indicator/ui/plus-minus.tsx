import { FC, memo } from 'react';
import { ViewItem, stylesToSx } from 'entities/dashboard-view';
import Typography from '@mui/material/Typography';
import { Increased } from 'entities/dashboard-data';



const useStyles = (item: ViewItem, color: string) => {
  const root: any = {};

  // Не все стили, тк ширина и подобное нужно только для главного элемента
  if (item?.styles?.fontSize)   root.fontSize   = stylesToSx(item?.styles)?.fontSize;
  if (item?.styles?.lineHeight) root.lineHeight = stylesToSx(item?.styles)?.lineHeight;

  return {
    root: {
      cursor: 'default',
      ...root,
      color,
    },
  }
};


interface Props {
  item      : ViewItem
  increased : Increased
  color     : string
}

/**
 * Знак + или -
 */
export const ItemDigitIndicatorPlusMinus: FC<Props> = memo(({ item, increased, color }) => {
  const sx = useStyles(item, color);

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
