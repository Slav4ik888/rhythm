import { FC, memo, useCallback } from 'react';
import { ActivatedCopiedType, useDashboardView } from 'entities/dashboard-view';
import { CopyViewItemComponent } from './component';



interface Props {
  type: ActivatedCopiedType
}

/**
 * Копирование текущего элемента.
 * Для этого его активируем, а затем тыкаем на элемент в который нужно вставить
 */
export const CopyViewItem: FC<Props> = memo(({ type }) => {
  const { selectedId, activatedCopied, setActiveCopied, clearActivatedCopied } = useDashboardView();

  const handleToggle = useCallback(() => {
    if (activatedCopied) clearActivatedCopied()
    else setActiveCopied({ type, id: selectedId })
  }, [type, selectedId, activatedCopied, setActiveCopied, clearActivatedCopied]);


  return (
    <CopyViewItemComponent
      type        = {type}
      selectedId  = {selectedId}
      activatedId = {activatedCopied?.id}
      onToggle    = {handleToggle}
    />
  )
});
