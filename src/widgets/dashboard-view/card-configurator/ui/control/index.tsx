import { FC, memo } from 'react';
import { CardMain } from './id';
import { DangerZone } from './danger-zone';



/** Вкладка Control */
export const CardItemControlConfigurator: FC = memo(() => {

  return (
    <>
      <CardMain />
      {/* DisplayShow - показать/скрыть элемент, "скрытый" - показывается только в режиме редактирования */}
      <DangerZone />
    </>
  )
});
