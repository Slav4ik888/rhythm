import { FC, memo } from 'react';
import { InvertedData } from '../inverted-data';
import { useDashboardView } from 'entities/dashboard-view';
import { SelectKod } from '../select-kod';



/** Вкладка Settings for GrowthIcon */
export const CardItemGrowthIconSettingsConfigurator: FC = memo(() => {
  const { selectedItem } = useDashboardView();
  

  return (
    <>
      {/* GLOBAL SETTINGS */}
      <InvertedData />

      {/* GROWTH ICON SETTINGS */}
      <SelectKod />

      {/* unchangedBlack  : boolean | undefined  // При отсутствии изменений в результатах красить чёрным цветом
      isLeft          : boolean | undefined  // При отсутствии изменений чёрный треугольник повернуть влево
      scaleValue      : number  | undefined */}
      {/* selectedItem.settings?.unchangedBlack === 'period'
      selectedItem.settings?.isLeft === 'company'
      selectedItem.settings?.scaleValue === 'product' */}
    </>
  )
});
