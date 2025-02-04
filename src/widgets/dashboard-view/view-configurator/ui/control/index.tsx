import { FC, memo } from 'react';
import { ViewMain } from './view-main';
import { DangerZone } from './danger-zone';



/** Вкладка Control */
export const ViewItemControlConfigurator: FC = memo(() => {

  return (
    <>
      <ViewMain />
      {/* DisplayShow - показать/скрыть элемент, "скрытый" - показывается только в режиме редактирования */}
      <DangerZone />
    </>
  )
});
