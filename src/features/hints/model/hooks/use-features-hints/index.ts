import { useHints } from 'entities/hints';
import { dontShowAgain, ReqGetBunches } from '../../services';
import { useMemo } from 'react';
import { useAppDispatch } from 'shared/lib/hooks';



export const useFeatureHints = () => {
  const dispatch = useAppDispatch();
  const actions = useHints();

  const api = useMemo(() => ({
    serviceDontShowAgain  : (data: ReqGetBunches) => dispatch(dontShowAgain(data)),
  }),
    [dispatch]
  );


  return {
    ...actions,
    ...api
  }
};
