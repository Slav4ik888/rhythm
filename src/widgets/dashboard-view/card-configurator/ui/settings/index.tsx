import { FC, memo, useCallback } from 'react';
import { useDashboardView, CardItemSettingsField } from 'entities/dashboard-view';
import { SelectKod } from './select-kod';
import { SelectChartType } from './select-chart-type';
import { SelectChartLabel } from './select-chart-label';



/** Вкладка Settings */
export const CardItemSettingsConfigurator: FC = memo(() => {
  const { selectedId, selectedItem, entities, changeOneSettingsField } = useDashboardView();

  /** Сохраняем изменения settings элементов в store */
  const handleChange = useCallback((field: CardItemSettingsField, value: any) => {
    changeOneSettingsField({ field, value });
  }, [selectedId, entities, changeOneSettingsField]);


  return (
    <>
      {/* TODO: возможность добавлять графики */}
      <SelectKod index={0} item={selectedItem} onChange={handleChange} />
      {/* Выбрать период дат: общий или уникальный */}

      {/* Настройки графика */}
      <SelectChartType index={0} item={selectedItem} onChange={handleChange} />
      <SelectChartLabel index={0} item={selectedItem} onChange={handleChange} />

      {/*   - Настройки осей */}
    </>
  )
});
``
