import { FC, memo, useCallback, useEffect, useState } from 'react';
import { useDashboardView } from 'entities/dashboard-view';
import { ConfiguratorTextTitle, RowWrapper } from 'shared/ui/configurators-components';
import { getValueByScheme, setValueByScheme, updateObject } from 'shared/helpers/objects';
import { Tooltip } from 'shared/ui/tooltip';
import { Checkbox } from '@mui/material';



interface Props {
  scheme    : string
  title     : string
  toolTitle : string
}

/**
 * TODO: изменить не только для chartOptions а в selectedItem.settings
 * TODO: применить в unchangedBlack isLeft
 * По схеме сохраняет изменени flags в selectedItem.settings?.chartOptions
 */
export const ChartFlagByScheme: FC<Props> = memo(({ scheme, title, toolTitle }) => {
  const { selectedItem, changeOneSettingsField } = useDashboardView();
  const [checked, setChecked] = useState(() => Boolean(getValueByScheme(selectedItem, scheme)));

  useEffect(() => {
    setChecked(Boolean(getValueByScheme(selectedItem, scheme)));
  },[selectedItem]);


  const handleToggle = useCallback(() => {
    const result = {};
    const chartOptionsScheme = scheme.split('.').slice(2).join('.'); // Убираем вступление
    const resultValue = ! Boolean(getValueByScheme(selectedItem, scheme));
    setValueByScheme(result, chartOptionsScheme, resultValue);

    changeOneSettingsField({
      field: 'chartOptions',
      value: updateObject(
        selectedItem.settings?.chartOptions || {},
        result
      )
    });
  }, [selectedItem, changeOneSettingsField]);


  return (
    <RowWrapper>
      <ConfiguratorTextTitle bold title={title} toolTitle={toolTitle} />
      
      <Tooltip title = {toolTitle}>
        <Checkbox
          size       = 'small'
          checked    = {checked}
          inputProps = {{ 'aria-label': title }}
          onChange   = {handleToggle}
        />
      </Tooltip>
    </RowWrapper>
  )
});
