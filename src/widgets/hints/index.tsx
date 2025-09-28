import { FC, memo, useEffect, useCallback, useMemo } from 'react'
import { useHints, HINTS } from 'entities/hints';
import { HintContainer } from './hint-item';



export const HintsContainer: FC = memo(() => {
  const { hintsQueue, currentHint, shownNextHint, closeCurrentHint } = useHints();

  const hint = useMemo(() => HINTS.find(hint => hint.id === currentHint),
    [currentHint]
  );

  // Автоматически показываем первую подсказку при монтировании
  useEffect(() => {
    if (hintsQueue?.length > 0 && ! currentHint) {
      shownNextHint();
    }
  },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  const handleCloseHint = useCallback(() => {
    closeCurrentHint();
  },
    [closeCurrentHint]
  );

  const handleDontShowAgain = useCallback(() => {

  },
    []
  );


  return (
    <>
      {
        currentHint && hint && <HintContainer
          hint            = {hint}
          leftHints       = {hintsQueue.length}
          onCloseHint     = {handleCloseHint}
          onDontShowAgain = {handleDontShowAgain}
        />
      }
    </>
  )
})
