import { FC, memo, useCallback } from 'react';
import { useDashboardViewActions, ViewItemStylesField } from 'entities/dashboard-view';
import { Dimensions } from './dimensions';
import { Indents } from './indents';
import { Borders } from './borders';
import { Background } from './background';
import { Alignment } from './alignment';
import { CardLabel } from './label';
import { StyleControl } from './style-control';



/** Вкладка Styles */
export const ViewItemStylesConfigurator: FC = memo(() => {
  const { selectedItem, selectedId, entities, changeOneStyleField } = useDashboardViewActions();

  /** Сохраняем изменения стилей элементов в store */
  const handleChange = useCallback((field: ViewItemStylesField, value: number | string) => {
    if (entities[selectedId]?.styles?.[field] !== value && selectedId)
      changeOneStyleField({ selectedId, field, value });
  }, [selectedId, entities, changeOneStyleField]);


  return (
    <>
      <CardLabel  selectedItem={selectedItem} onChange={handleChange} />
      <Background selectedItem={selectedItem} onChange={handleChange} />
      <Alignment  selectedItem={selectedItem} onChange={handleChange} />
      <Dimensions selectedItem={selectedItem} onChange={handleChange} />
      <Indents    selectedItem={selectedItem} />
      <Borders    selectedItem={selectedItem} onChange={handleChange} />
      <StyleControl />
    </>
  )
});
