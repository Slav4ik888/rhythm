import { FC, memo, useCallback } from 'react';
import { DeleteButton } from 'shared/ui/buttons/delete-button';
import { useDashboardView } from 'entities/dashboard-view';
import { f } from 'shared/styles';
import { getArrWithoutItemByIndex } from 'shared/helpers/arrays';



const useStyles = () => ({
  button: {
    root: {
      color    : '#000000',
      fontSize : '0.7rem',
      mr       : 2,
    }
  }
});


interface Props {
  index: number // Index charts in settings.charts
}

/** DelChart from the charts */
export const DelChart: FC<Props> = memo(({ index }) => {
  const sx = useStyles();
  const { selectedItem, changeOneSettingsField } = useDashboardView();


  const handleClick = useCallback(() => {
    const value = getArrWithoutItemByIndex(selectedItem.settings?.charts, index);

    changeOneSettingsField({ field: 'charts', value });
  }, [index, selectedItem, changeOneSettingsField]);


  return (
    <DeleteButton
      toolTitle = 'Удалить график'
      sx        = {sx.button}
      onDel     = {handleClick}
    />
  )
});
