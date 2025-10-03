import { FC, memo, useEffect, useCallback, useMemo } from 'react'
import { HINTS } from 'entities/hints';
import { HintContainer } from './hint-item';
import { useFeatureHints } from 'features/hints';
import { useUser } from 'entities/user';



export const HintsContainer: FC = memo(() => {
  const { companyId, userId, hintsDontShowAgain } = useUser();
  const { hintsQueue, currentHintId, shownNextHint, closeCurrentHint, serviceDontShowAgain } = useFeatureHints();

  // Текущая подсказка
  const hint = useMemo(() => HINTS.find(hint => hint.id === currentHintId),
    [currentHintId]
  );

  // Указал ли пользователь не показывать эту подсказку
  const dontShowAgain = useMemo(() => currentHintId && hintsDontShowAgain.includes(currentHintId),
    [currentHintId, hintsDontShowAgain]
  );

  // Если пользователь указал эту подсказку не показывать, то показываем следующую
  useEffect(() => {
    console.log('HHH currentHintId: ', currentHintId);

    if (dontShowAgain && currentHintId) {
      console.log('HHH shownNextHint');
      shownNextHint();
    }
  },
    [currentHintId, dontShowAgain, shownNextHint]
  );

  // Автоматически показываем первую подсказку при монтировании
  useEffect(() => {
    console.log(123123123);

    if (hintsQueue?.length > 0 && ! currentHintId) {
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
    if (! currentHintId) return
    serviceDontShowAgain({
      companyId,
      id: userId,
      settings: {
        hintsDontShowAgain: [...hintsDontShowAgain, currentHintId]
      }
    });
  },
    [serviceDontShowAgain, currentHintId, companyId, userId, hintsDontShowAgain]
  );


  if (! currentHintId || ! hint || dontShowAgain) return null;

  return (
    <HintContainer
      hint            = {hint}
      leftHints       = {hintsQueue.length}
      onCloseHint     = {handleCloseHint}
      onDontShowAgain = {handleDontShowAgain}
    />
  )
})
