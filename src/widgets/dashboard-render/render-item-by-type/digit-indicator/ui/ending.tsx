import { FC, memo } from 'react';
import { ViewItem, stylesToSx } from 'entities/dashboard-view';
import Typography from '@mui/material/Typography';
import { isNotUndefined as is } from 'shared/lib/validators';



const useStyles = (item: ViewItem, color: string) => {
  const root: any = {};

  // TODO: разделить стили отдельно reduction отдельно ending

  // Font size
  if (is(item?.styles?.dirFontSize) || is(item?.styles?.fontSize)) {
    root.fontSize = is(item?.styles?.dirFontSize)
      ? stylesToSx(item?.styles)?.dirFontSize
      : stylesToSx(item?.styles)?.fontSize;
  }
  // Font weight
  if (is(item?.styles?.dirFontWeight) || is(item?.styles?.fontWeight)) {
    root.fontWeight = is(item?.styles?.dirFontWeight)
      ? item?.styles?.dirFontWeight
      : item?.styles?.fontWeight;
  }
  // Line height
  if (item?.styles?.lineHeight) root.lineHeight = stylesToSx(item?.styles)?.lineHeight;

  return {
    cursor: 'default',
    ...root,
    color,
    ml: 0.5,
  }
};


interface Props {
  item      : ViewItem
  color     : string
}

/** Префикс */
export const ItemDigitIndicatorEnding: FC<Props> = memo(({ item, color }) => {
  const sx = useStyles(item, color);

  return (
    <Typography component='span' sx={sx}>
      {item?.settings?.endingType}
    </Typography>
  )
});
