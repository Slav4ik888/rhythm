import { useMemo } from 'react';
import * as s from '../../selectors';
import { actions } from '../../slice';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks';
import { getAuth, ReqGetAuth } from '../../services';
// import { User } from '../../types';
import { Errors } from 'shared/lib/validators';
import { serviceLogout as logout } from 'features/user';



export const useUser = () => {
  const dispatch = useAppDispatch();

  const loading    = useSelector(s.selectLoading);
  const errors     = useSelector(s.selectErrors);

  const auth       = useSelector(s.selectAuth);
  const user       = useSelector(s.selectUser);
  const userId     = useSelector(s.selectUserId);
  const isVerified = useSelector(s.selectIsEmailVerified);
  const email      = useSelector(s.selectUserEmail);
  const role       = useSelector(s.selectUserRole);
  const companyId  = useSelector(s.selectCompanyId);


    // serviceGetStartResourseData = (data: ReqGetStartResourseData = {}) => dispatch(getStartResourseData(data)),
    // serviceUpdateUser            = (user: Partial<User>) => dispatch(updateUser(user)),
    // serviceDeleteUser            = (companyId: string, userId: string) => dispatch(deleteUser({ companyId, userId })),
    // serviceSendEmailConfirmation = (email: string) => dispatch(sendEmailConfirmation(email));

  const api = useMemo(() => ({
    setErrors      : (err: Errors) => dispatch(actions.setErrors(err)),
    clearErrors    : () => dispatch(actions.clearErrors()),
    serviceGetAuth : (data: ReqGetAuth) => dispatch(getAuth(data)),
    serviceLogout  : () => dispatch(logout()),
  }),
    [dispatch]
  );


  return {
    loading,
    errors,
    // _isLoaded,

    auth,
    user,
    userId,
    isVerified,
    email,
    role,
    companyId,

    ...api
  }
};
