import { FC, memo, useCallback } from 'react';
import { DeleteButton } from 'shared/ui/buttons/delete-button';
import { useDashboardView } from 'entities/dashboard-view';
import { Box } from '@mui/material';
import { f } from 'shared/styles';
import { getArrWithoutItemByIndex } from 'shared/helpers/arrays';



const useStyles = () => ({
  row: {
    ...f('-c-fe'),
    my: 2,
  },
  button: {
    root: {
      color    : '#000000',
      fontSize : '0.7rem',
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
  }, [selectedItem, changeOneSettingsField]);


  return (
    <Box sx={sx.row}>
      <DeleteButton
        toolTitle = 'Удалить график'
        sx        = {sx.button}
        onDel     = {handleClick}
      />
    </Box>
  )
});
