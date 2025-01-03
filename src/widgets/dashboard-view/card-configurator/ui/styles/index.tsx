import { FC, memo, useCallback } from 'react';
import { useDashboardView, ItemStylesField } from 'entities/dashboard-view';
import { Dimensions } from './dimensions';
import { Indents } from './indents';
import { Borders } from './borders';
import { Background } from './background';
import { CardId } from './id';
import { Alignment } from './alignment';
import { DangerZone } from './danger-zone';
import { CardLabel } from './label';



export const CardItemStylesConfigurator: FC = memo(() => {
  const { selectedId, entities, changeOneStyleField } = useDashboardView();

  /** Сохраняем изменения стилей элементов в store */
  const handleChange = useCallback((field: ItemStylesField, value: number | string) => {
    if (entities[selectedId]?.styles?.[field] !== value && selectedId)
      changeOneStyleField({ selectedId, field, value });
  }, [selectedId, entities, changeOneStyleField]);


  return (
    <>
      <CardId />
      <CardLabel onChange={handleChange} />
      <Background onChange={handleChange} />
      {/* DisplayShow - показать/скрыть элемент, "скрытый" - показывается только в режиме редактирования */}
      <Alignment onChange={handleChange} />
      <Dimensions onChange={handleChange} />
      <Indents />
      <Borders onChange={handleChange} />

      {/* <SubHeader title='Управление'/> */}
      <DangerZone />
    </>
  )
});
