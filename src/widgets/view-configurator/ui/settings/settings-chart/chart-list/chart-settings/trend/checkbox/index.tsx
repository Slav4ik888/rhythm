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
  const isTrend = Boolean(selectedItem?.settings?.charts?.[index]?.isTrend);
  const { changeOneChartsItem } = useDashboardView();
  const [checked, setChecked] = useState(() => isTrend);

  useEffect(() => {
    setChecked(isTrend);
  }, [index, isTrend]);


  const handleToggle = useCallback(() => {
    changeOneChartsItem({
      field : 'isTrend',
      value : ! isTrend,
      index
    });
  }, [index, isTrend, changeOneChartsItem]);


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
