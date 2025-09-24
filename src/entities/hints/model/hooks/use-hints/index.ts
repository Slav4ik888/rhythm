import { useMemo } from 'react';
import * as s from '../../selectors';
import { actions } from '../../slice';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks';
import { Errors } from 'shared/lib/validators';



export const useHints = () => {
  const dispatch = useAppDispatch();

  const loading  = useSelector(s.selectLoading);
  const errors   = useSelector(s.selectErrors);
  const entities = useSelector(s.selectEntities);
  const activeId = useSelector(s.selectActiveId);

  const api = useMemo(() => ({
    setErrors      : (err: Errors) => dispatch(actions.setErrors(err)),
    clearErrors    : () => dispatch(actions.clearErrors()),
    setIsShown     : (id: string) => dispatch(actions.setIsShown),
  }),
    [dispatch]
  );


  return {
    loading,
    errors,
    activeId,
    entities,

    ...api
  }
};
