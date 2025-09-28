import { FC, memo, useEffect, useCallback, useMemo } from 'react'
import { useHints } from 'entities/hints';
import { HintContainer } from './hint-item';
import { HINTS } from 'entities/hints/constants';



export const HintsContainer: FC = memo(() => {
  const { hintsQueue, currentHint, shownHints, shownNextHint, closeCurrentHint } = useHints();
  console.log('hintsQueue: ', hintsQueue);

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
    console.log('handleCloseHint');
    closeCurrentHint();
  },
    [closeCurrentHint]
  );

  const handleDontShowAgain = useCallback(() => {
    // TODO:
    console.log('handleDontShowAgain');
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
