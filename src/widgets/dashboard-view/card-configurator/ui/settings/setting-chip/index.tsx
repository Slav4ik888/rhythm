import { FC, memo } from 'react';
import { InvertedData } from '../inverted-data';
import { SelectByField } from '../select-by-field';
import { useDashboardData } from 'entities/dashboard-data';
import { SelectChipType } from './select-chip';
import { SetPeriodColors } from './set-period-colors';
import { useDashboardView } from 'entities/dashboard-view';



/** Вкладка Settings for Chip */
export const CardItemChipSettingsConfigurator: FC = memo(() => {
  const { kods } = useDashboardData();
  const { selectedItem } = useDashboardView();
  

  return (
    <>
      {/* GLOBAL SETTINGS */}
      <InvertedData />

      {/* CHIP SETTINGS */}
      <SelectByField
        field     = 'kod'
        title     = 'Код'
        toolTitle = 'Укажите код статистики для графика'
        array     = {kods}
      />
      <SelectChipType />

      {
        selectedItem.settings?.chipType === 'period'
          ? < SetPeriodColors />
          : null
      }
    </>
  )
});
