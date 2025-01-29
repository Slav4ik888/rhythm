import { FC, memo } from 'react';
import { CardItem, stylesToSx } from 'entities/dashboard-view';
import { Typography } from '@mui/material';
import { isUndefined } from 'shared/lib/validators';



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
  item  : CardItem
  value : string
  color : string
}

/** Число */
export const ItemDigitIndicatorValue: FC<Props> = memo(({ item, value, color }) => {
  const sx = useStyles(item, color);

  

  if (isUndefined(value)) return null

  return (
    <Typography sx={sx.root}>
      {
        value
      }
    </Typography>
  )
});
