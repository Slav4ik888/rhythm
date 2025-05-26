import { FC, memo } from 'react';
import { Chip } from '@mui/material';
import { ChipType, useDashboardView } from 'entities/dashboard-view';
import { isNotUndefined, isUndefined } from 'shared/lib/validators';
import { getConditionKod } from 'entities/condition-type';



const useStyles = () => ({
  root: {
    height : '24px',
    cursor : 'default'
  }
});

interface Props {
  showItemKod? : boolean // Показать код Item даже если isGlobal отсутствует
  index?       : number // For charts
  type?        : ChipType
}

/** Код в зависимости используется ли isGlobalKod или нет */
export const GetFromGlobalKod: FC<Props> = memo(({ index, showItemKod, type }) => {
  const { selectedItem, fromGlobalKod: kod } = useDashboardView();
  const sx = useStyles();

  if (! kod ||
    (isUndefined(index) && ! selectedItem?.settings?.fromGlobalKod && ! showItemKod) || // Not chart
    (isNotUndefined(index) && ! selectedItem?.settings?.charts?.[index as number]?.fromGlobalKod && ! showItemKod) // Chart
  ) return null;

  return (
    <Chip
      label = {getConditionKod(type, kod)}
      sx    = {sx.root}
    />
  )
});
