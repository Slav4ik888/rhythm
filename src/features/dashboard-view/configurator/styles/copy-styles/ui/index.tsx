import { FC, memo, useCallback } from 'react';
import { useDashboardView } from 'entities/dashboard-view';
import { CopyStylesViewItemComponent } from './component';



interface Props {
}

/**
 * Копирование стилей текущего элемента.
 * Для этого его активируем, а затем тыкаем на элемент в который нужно вставить
 */
export const CopyStylesViewItemBtn: FC<Props> = memo(({ }) => {
  const { selectedId, activatedCopied, setActiveCopied, clearActivatedCopied } = useDashboardView();

  const handleToggle = useCallback(() => {
    if (activatedCopied) clearActivatedCopied()
    else setActiveCopied({ type: 'copyStyles', id: selectedId })
  }, [selectedId, activatedCopied, setActiveCopied, clearActivatedCopied]);


  return (
    <CopyStylesViewItemComponent
      selectedId  = {selectedId}
      activatedId = {activatedCopied?.id}
      onToggle    = {handleToggle}
    />
  )
});
