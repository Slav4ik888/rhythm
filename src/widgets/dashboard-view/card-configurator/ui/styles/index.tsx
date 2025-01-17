import { FC, memo, useCallback } from 'react';
import { useDashboardView, ItemStylesField } from 'entities/dashboard-view';
import { Dimensions } from './dimensions';
import { Indents } from './indents';
import { Borders } from './borders';
import { Background } from './background';
import { Alignment } from './alignment';
import { CardLabel } from './label';



/** Вкладка Styles */
export const CardItemStylesConfigurator: FC = memo(() => {
  const { selectedId, entities, changeOneStyleField } = useDashboardView();

  /** Сохраняем изменения стилей элементов в store */
  const handleChange = useCallback((field: ItemStylesField, value: number | string) => {
    console.log('handleChange: ', entities[selectedId]?.styles?.[field], value);
    if (entities[selectedId]?.styles?.[field] !== value && selectedId)
      changeOneStyleField({ selectedId, field, value });
  }, [selectedId, entities, changeOneStyleField]);


  return (
    <>
      <CardLabel onChange={handleChange} />
      <Background onChange={handleChange} />
      <Alignment onChange={handleChange} />
      <Dimensions onChange={handleChange} />
      <Indents />
      <Borders onChange={handleChange} />
    </>
  )
});
