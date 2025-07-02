import { FC, memo, useCallback } from 'react';
import { useDashboardViewActions } from 'entities/dashboard-view';
import { Toward, TowardType } from 'shared/ui/configurators-components/toward';
import { getSortedChartsByToward } from '../model/utils/get-sorted-charts-by-toward';



interface Props {
  index: number // Index charts in settings.charts
}

/**
 * Перемещение chart (изменение order) между имеющимися
 */
export const MoveChartUpdownward: FC<Props> = memo(({ index }) => {
  const { selectedItem, changeOneSettingsField } = useDashboardViewActions();

  const handleClick = useCallback((type: TowardType) => {
    changeOneSettingsField({
      field: 'charts',
      value: getSortedChartsByToward(type, selectedItem.settings?.charts, index)
    });
  },
    [index, selectedItem.settings?.charts, changeOneSettingsField]
  );

  return (
    <>
      <Toward type='up'   onClick={handleClick} />
      <Toward type='down' onClick={handleClick} />
    </>
  )
});
