import { FC, memo, useCallback, useState, useEffect } from 'react';
import { useDashboardView, ViewItem } from 'entities/dashboard-view';
import { ConfiguratorTextTitle, RowWrapper } from 'shared/ui/configurators-components';
import { Checkbox } from '@mui/material';



interface Props {
  index        : number // Index charts in settings.charts
  selectedItem : ViewItem | undefined
}

/** Отображение линии тренда */
export const ChartTrendCheckbox: FC<Props> = memo(({ index, selectedItem }) => {
  const { changeOneChartsItem } = useDashboardView();
  const [checked, setChecked] = useState(() => Boolean(selectedItem?.settings?.charts?.[index]?.isTrend));

  useEffect(() => {
    setChecked(Boolean(selectedItem?.settings?.charts?.[index]?.isTrend));
  }, [selectedItem]);
  

  const handleToggle = useCallback(() => {
    changeOneChartsItem({
      field : 'isTrend',
      value : ! Boolean(selectedItem?.settings?.charts?.[index]?.isTrend),
      index
    });
  }, [selectedItem, changeOneChartsItem]);


  return (
    <RowWrapper>
      <ConfiguratorTextTitle bold title='Is trend' toolTitle='Отображение линии тренда' />
      <Checkbox
        size       = 'small'
        checked    = {checked}
        inputProps = {{ 'aria-label': 'isTrend' }}
        onChange   = {handleToggle}
      />
    </RowWrapper>
  )
});
