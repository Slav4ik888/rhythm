import { FC, memo } from 'react';
import { InvertedData } from '../inverted-data';
import { SelectByField } from '../select-by-field';
import { arrayChipType } from 'entities/dashboard-view';
import { useDashboardData } from 'entities/dashboard-data';



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
      <SelectByField
        field     = 'chipType'
        title     = 'ChipType'
        toolTitle = 'Выберите тип чипа'
        array     = {arrayChipType}
      />
    </>
  )
});
