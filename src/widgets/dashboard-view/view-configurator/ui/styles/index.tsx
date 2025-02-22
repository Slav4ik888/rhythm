import { FC, memo, useCallback } from 'react';
import { useDashboardView, ViewItemStylesField } from 'entities/dashboard-view';
import { Dimensions } from './dimensions';
import { Indents } from './indents';
import { Borders } from './borders';
import { Background } from './background';
import { Alignment } from './alignment';
import { CardLabel } from './label';



/** Вкладка Styles */
export const ViewItemStylesConfigurator: FC = memo(() => {
  const { selectedItem, selectedId, entities, changeOneStyleField } = useDashboardView();

  /** Сохраняем изменения стилей элементов в store */
  const handleChange = useCallback((field: ViewItemStylesField, value: number | string) => {
    if (entities[selectedId]?.styles?.[field] !== value && selectedId)
      changeOneStyleField({ selectedId, field, value });
  }, [selectedId, entities, changeOneStyleField]);


  return (
    <>
      <CardLabel  onChange={handleChange} />
      <Background onChange={handleChange} />
      <Alignment  onChange={handleChange} type={selectedItem.type} />
      <Dimensions onChange={handleChange} />
      <Indents />
      <Borders    onChange={handleChange} />
    </>
  )
});
