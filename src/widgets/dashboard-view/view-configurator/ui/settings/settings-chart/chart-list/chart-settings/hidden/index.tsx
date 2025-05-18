import { FC, memo, useCallback, useState, useEffect } from 'react';
import { useDashboardView, ViewItem } from 'entities/dashboard-view';
import { ConfiguratorTextTitle, RowWrapper } from 'shared/ui/configurators-components';
import { Checkbox } from '@mui/material';
import { isPie } from 'entities/charts';



interface Props {
  index        : number // Index charts in settings.charts
  selectedItem : ViewItem | undefined
}

/** Скрыть / показать дугу|график */
export const ChartHidden: FC<Props> = memo(({ index, selectedItem }) => {
  const { changeOneDatasetsItem } = useDashboardView();
  const [checked, setChecked] = useState(() => Boolean(selectedItem?.settings?.charts?.[index]?.datasets?.hidden));

  useEffect(() => {
    setChecked(Boolean(selectedItem?.settings?.charts?.[index]?.datasets?.hidden));
  }, [selectedItem]);
  

  const handleToggle = useCallback(() => {
    changeOneDatasetsItem({
      field : 'hidden',
      value : ! Boolean(selectedItem?.settings?.charts?.[index]?.datasets?.hidden),
      index
    });
  }, [selectedItem, changeOneDatasetsItem]);


  return (
    <RowWrapper>
      <ConfiguratorTextTitle bold title='hidden' toolTitle={`Скрыть / показать ${isPie(selectedItem)} ? 'дугу' : 'график'`} />
      <Checkbox
        size       = 'small'
        checked    = {checked}
        inputProps = {{ 'aria-label': 'hidden' }}
        onChange   = {handleToggle}
      />
    </RowWrapper>
  )
});
