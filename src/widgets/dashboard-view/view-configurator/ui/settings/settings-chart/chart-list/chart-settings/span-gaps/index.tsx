import { FC, memo, useCallback, useState, useEffect } from 'react';
import { useDashboardView, ViewItem } from 'entities/dashboard-view';
import { ConfiguratorTextTitle, RowWrapper } from 'shared/ui/configurators-components';
import { Checkbox } from '@mui/material';



interface Props {
  index        : number // Index charts in settings.charts
  selectedItem : ViewItem | undefined
}

/** Разрыв линии при отсутствии данных */
export const ChartSpanGaps: FC<Props> = memo(({ index, selectedItem }) => {
  const { changeOneDatasetsItem } = useDashboardView();
  const [checked, setChecked] = useState(() => Boolean(selectedItem?.settings?.charts?.[index]?.datasets?.spanGaps));

  useEffect(() => {
    setChecked(Boolean(selectedItem?.settings?.charts?.[index]?.datasets?.spanGaps));
  }, [selectedItem]);
  

  const handleToggle = useCallback(() => {
    changeOneDatasetsItem({
      field : 'spanGaps',
      value : ! Boolean(selectedItem?.settings?.charts?.[index]?.datasets?.spanGaps),
      index
    });
  }, [selectedItem, changeOneDatasetsItem]);


  return (
    <RowWrapper>
      <ConfiguratorTextTitle bold title='SpanGaps' toolTitle='Разрыв линии при отсутствии данных' />
      <Checkbox
        size       = 'small'
        checked    = {checked}
        inputProps = {{ 'aria-label': 'spanGaps' }}
        onChange   = {handleToggle}
      />
    </RowWrapper>
  )
});
