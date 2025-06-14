import * as s from '../../selectors';
import { actions } from '../../slice';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks';
import { getAuth, ReqGetAuth } from '../../services';
// import { User } from '../../types';
import { Errors } from 'shared/lib/validators';
import { serviceLogout as logout } from 'features/user';



export const useUser = () => {
  const
    dispatch = useAppDispatch(),

    loading        = useSelector(s.selectLoading),
    errors         = useSelector(s.selectErrors),
    setErrors      = (err: Errors) => dispatch(actions.setErrors(err)),
    clearErrors    = () => dispatch(actions.clearErrors()),

    // _isLoaded      = useSelector(s.selectIsLoaded),
    auth           = useSelector(s.selectAuth),
    user           = useSelector(s.selectUser),
    userId         = useSelector(s.selectUserId),
    isVerified     = useSelector(s.selectIsEmailVerified),
    email          = useSelector(s.selectUserEmail),
    role           = useSelector(s.selectUserRole),
    companyId      = useSelector(s.selectCompanyId),

    serviceGetAuth = (data: ReqGetAuth) => dispatch(getAuth(data)),
    // serviceGetStartResourseData = (data: ReqGetStartResourseData = {}) => dispatch(getStartResourseData(data)),
    // serviceUpdateUser            = (user: Partial<User>) => dispatch(updateUser(user)),
    // serviceDeleteUser            = (companyId: string, userId: string) => dispatch(deleteUser({ companyId, userId })),
    serviceLogout            = () => dispatch(logout());
    // serviceSendEmailConfirmation = (email: string) => dispatch(sendEmailConfirmation(email));

  return {
    loading,
    errors,
    setErrors,
    clearErrors,
    // _isLoaded,

    auth,
    user,
    userId,
    isVerified,
    email,
    role,
    companyId,

    serviceGetAuth,
    // serviceUpdateUser,
    // serviceDeleteUser,
    serviceLogout
    // serviceSendEmailConfirmation
  }
};
