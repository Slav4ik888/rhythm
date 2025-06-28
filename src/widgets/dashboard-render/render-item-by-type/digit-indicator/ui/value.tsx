import { FC, memo, useMemo } from 'react';
import { ViewItem, stylesToSx } from 'entities/dashboard-view';
import Typography from '@mui/material/Typography';
import { isUndefined } from 'shared/lib/validators';
import { Tooltip } from 'shared/ui/tooltip';



const useStyles = (item: ViewItem, color: string) => {
  const root: any = stylesToSx(item?.styles) || {};

  return {
    root: {
      cursor: 'default',
      ...root,
      color,
    },
  }
};


interface Props {
  item  : ViewItem
  value : string
  color : string
}


/** Число */
export const ItemDigitIndicatorValue: FC<Props> = memo(({ item, value, color }) => {
  const sx = useStyles(item, color);

  const toolTitle = useMemo(() => {
    if (isUndefined(item?.settings?.kod)) return 'Не выбран код статистики';
    if (value === '-') return 'Отсутствует значение статистики';
    return '';
  }, [item?.settings?.kod, value]);


  return (
    <Tooltip title={toolTitle}>
      <Typography component='span' sx={sx.root}>
        {
          value
        }
      </Typography>
    </Tooltip>
  )
});
