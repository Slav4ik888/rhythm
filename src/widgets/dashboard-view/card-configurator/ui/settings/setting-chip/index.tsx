import { FC, memo } from 'react';
import { InvertedData } from '../inverted-data';
import { SelectByField } from '../select-by-field';
import { useDashboardData } from 'entities/dashboard-data';
import { SelectChipType } from './select-chip';



/** Вкладка Settings for Chip */
export const CardItemChipSettingsConfigurator: FC = memo(() => {
  const { kods } = useDashboardData();
  
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
    </>
  )
});
