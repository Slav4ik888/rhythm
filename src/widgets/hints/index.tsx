import { FC, memo, useEffect, useCallback, useMemo } from 'react'
import { HINTS } from 'entities/hints';
import { HintContainer } from './hint-item';
import { useFeatureHints } from 'features/hints';
import { useUser } from 'entities/user';
import { LS } from 'shared/lib/local-storage';



export const HintsContainer: FC = memo(() => {
  const { companyId, userId, hintsDontShowAgain } = useUser();
  const { hintsQueue, currentHintId, shownNextHint, closeCurrentHint, serviceDontShowAgain } = useFeatureHints();

  // Текущая подсказка
  const hint = useMemo(() => HINTS.find(hint => hint.id === currentHintId),
    [currentHintId]
  );

  // Указал ли пользователь не показывать эту подсказку
  const dontShowAgain = userId
    ? hintsDontShowAgain.includes(currentHintId || '')
    : LS.getHintsDontShowAgain().includes(currentHintId || '');


  // Если пользователь указал эту подсказку не показывать, то показываем следующую
  useEffect(() => {
    if (dontShowAgain && currentHintId) {
      shownNextHint();
    }
  },
    [currentHintId, dontShowAgain, shownNextHint]
  );

  // Автоматически показываем первую подсказку при монтировании
  useEffect(() => {
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
    if (! currentHintId) return

    // Если пользователь не авторизован, то внутри сохраниться в LS
    serviceDontShowAgain({
      companyId,
      id       : userId,
      settings : {
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
