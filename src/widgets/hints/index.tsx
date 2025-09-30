import { FC, memo, useEffect, useCallback, useMemo } from 'react'
import { HINTS } from 'entities/hints';
import { HintContainer } from './hint-item';
import { useFeatureHints } from 'features/hints';
import { useUser } from 'entities/user';



export const HintsContainer: FC = memo(() => {
  const { companyId, userId, hintsDontShowAgain } = useUser();
  const { hintsQueue, currentHint, shownNextHint, closeCurrentHint, serviceDontShowAgain } = useFeatureHints();

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
    console.log('handleDontShowAgain');
    if (! currentHint) return
    serviceDontShowAgain({
      companyId,
      id: userId,
      settings: {
        hintsDontShowAgain: [...hintsDontShowAgain, currentHint]
      }
    });
  },
    [serviceDontShowAgain, currentHint, companyId, userId, hintsDontShowAgain]
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
