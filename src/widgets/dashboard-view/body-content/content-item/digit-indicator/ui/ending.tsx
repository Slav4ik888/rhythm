import { FC, memo } from 'react';
import { ViewItem, stylesToSx } from 'entities/dashboard-view';
import { Box, Typography } from '@mui/material';
import { f } from 'shared/styles';



const useStyles = (item: ViewItem, color: string) => {
  const root: any = {};

  if (item?.styles?.fontSize) root.fontSize = stylesToSx(item?.styles)?.fontSize;
  if (item?.styles?.lineHeight) root.lineHeight = stylesToSx(item?.styles)?.lineHeight;

  return {
    // root: {
    //   ...f(),
    //   ...root,
    //   color,
    // },
    reduction: {
      ...root,
      color,
      ml: 0.5
    },
    ending: {
      ...root,
      color,
      ml: 0.5
    },
  }
};


interface Props {
  item      : ViewItem
  reduction : string
  color     : string
}

/** Префикс */
export const ItemDigitIndicatorEnding: FC<Props> = memo(({ item, reduction, color }) => {
  const sx = useStyles(item, color);
  
  const endingType = item?.settings?.endingType;

  return (
    <>
      {
        reduction && <Typography component='span' sx={sx.reduction}>
          {reduction}
        </Typography>
      }
      {
        endingType && endingType !== '-'
          ? <Typography component='span' sx={sx.ending}>
              {endingType}
            </Typography>
          : null
      }
    </>
  )
});
