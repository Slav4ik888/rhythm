import { FC, memo, useCallback } from 'react';
import { useDashboardView } from 'entities/dashboard-view';
import { CopyStylesViewItemComponent } from './component';
import { useUI } from 'entities/ui';



interface Props {
}

/**
 * Копирование стилей текущего элемента.
 * Для этого его активируем, а затем тыкаем на элемент в который нужно вставить
 */
export const CopyStylesViewItemBtn: FC<Props> = memo(({ }) => {
  const { setWarningMessage } = useUI();
  const { isUnsaved, selectedId, activatedCopied, setActiveCopied, clearActivatedCopied } = useDashboardView();

  const handleToggle = useCallback(() => {
    if (activatedCopied) clearActivatedCopied()
    else if (isUnsaved) setWarningMessage('Вначале сохраните изменения')
    else setActiveCopied({ type: 'copyStyles', id: selectedId })
  }, [isUnsaved, selectedId, activatedCopied, setActiveCopied, clearActivatedCopied]);


  return (
    <CopyStylesViewItemComponent
      selectedId  = {selectedId}
      activatedId = {activatedCopied?.id}
      onToggle    = {handleToggle}
    />
  )
});
