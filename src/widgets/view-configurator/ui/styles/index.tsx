import { FC, memo, useCallback } from 'react';
import { useDashboardViewActions, ViewItemStylesField } from 'entities/dashboard-view';
import { DimensionsBox } from './dimensions';
import { IndentsBox } from './indents';
import { BordersBox } from './borders';
import { BackgroundBox } from './background';
import { AlignmentBox } from './alignment';
import { TextBox } from './text';
import { StyleControl } from './style-control';
import { ActivePeriodBox } from './active-period-styles';



/** Вкладка Styles */
export const ViewItemStylesConfigurator: FC = memo(() => {
  const { selectedItem, selectedId, entities, changeOneStyleField } = useDashboardViewActions();

  /** Сохраняем изменения стилей элементов в store */
  const handleChange = useCallback((field: ViewItemStylesField, value: number | string) => {
    if (entities[selectedId]?.styles?.[field] !== value && selectedId)
      changeOneStyleField({ selectedId, field, value });
  },
    [selectedId, entities, changeOneStyleField]
  );


  return (
    <>
      {
        ['text', 'period', 'digitIndicator', 'list']
          .includes(selectedItem?.type) && <TextBox selectedItem={selectedItem} onChange={handleChange} />
      }
      <BackgroundBox selectedItem={selectedItem} onChange={handleChange} />
      <AlignmentBox  selectedItem={selectedItem} onChange={handleChange} />
      <DimensionsBox selectedItem={selectedItem} onChange={handleChange} />
      <IndentsBox    selectedItem={selectedItem} />
      <BordersBox    selectedItem={selectedItem} onChange={handleChange} />

      {
        selectedItem?.type === 'period' && <ActivePeriodBox selectedItem={selectedItem} onChange={handleChange} />
      }
      <StyleControl />
    </>
  )
});
