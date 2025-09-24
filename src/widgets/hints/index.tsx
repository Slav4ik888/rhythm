import { memo } from 'react'
import { useHints } from 'entities/hints';
import { HintItemContainer } from './hint-item';



export const HintsContainer = memo(() => {
  const { entities, activeId } = useHints();

  return (
    <>
      <HintItemContainer
        // activeId={activeId}
      />

      {/* {
        Object.values(entities).map(hint => {
          const isActive = hint.id === activeId;
          const isUserHideHint = ''; // Пользователь отключил эту подсказку

          return (
            <HintItemContainer
              key={hint.id}
              hint={hint}
            />
          )
        })
      } */}
    </>
  )
})
