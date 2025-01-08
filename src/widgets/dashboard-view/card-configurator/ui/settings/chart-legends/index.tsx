import { FC, memo, useCallback, useEffect, useState } from 'react';
import { useDashboardView } from 'entities/dashboard-view';
import { ConfiguratorTextTitle, RowWrapper } from 'shared/ui/configurators-components';
import { updateObject } from 'shared/helpers/objects';
import { Tooltip } from 'shared/ui/tooltip';
import { Checkbox } from '@mui/material';



/** Отображать легенду на графиках или нет */
export const ChartLegends: FC = memo(() => {
  const { selectedItem, changeOneSettingsField } = useDashboardView();
  const [checked, setChecked] = useState(Boolean(selectedItem.settings?.chartOptions?.plugins?.legend?.display));


  useEffect(() => {
    setChecked(Boolean(selectedItem.settings?.chartOptions?.plugins?.legend?.display));
  },[selectedItem]);


  const handleToggle = useCallback(() => {
    if (Boolean(selectedItem.settings?.chartOptions?.plugins?.legend?.display)) {
      changeOneSettingsField({
        field: 'chartOptions',
        value: updateObject(
          selectedItem.settings?.chartOptions || {},
          { plugins: { legend: { display: false } } }
        )
      });
    }
    else {
      changeOneSettingsField({
        field: 'chartOptions',
        value: updateObject(
          selectedItem.settings?.chartOptions || {},
          { plugins: { legend: { display: true } } }
        )
      });
      setChecked(true);
    }
  }, [selectedItem, changeOneSettingsField]);

  const toolTitle = 'Выберите метку для графика';


  return (
    <RowWrapper>
      <ConfiguratorTextTitle bold title='Chart label' toolTitle={toolTitle} />
      
      <Tooltip title = {toolTitle}>
        <Checkbox
          size       = 'small'
          checked    = {checked}
          inputProps = {{ 'aria-label': 'Chart label' }}
          onChange   = {handleToggle}
        />
      </Tooltip>
    </RowWrapper>
  )
});
