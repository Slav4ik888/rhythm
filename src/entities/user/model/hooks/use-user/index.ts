import * as s from '../../selectors';
import { actions } from '../../slice';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks';
import { getStartResourseData } from '../../services';
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

    auth           = useSelector(s.selectAuth),
    user           = useSelector(s.selectUser),
    userId         = useSelector(s.selectUserId),
    isVerified     = useSelector(s.selectIsEmailVerified),
    email          = useSelector(s.selectUserEmail),
    role           = useSelector(s.selectUserRole),
    companyId      = useSelector(s.selectCompanyId),

    serviceGetStartResourseData = () => dispatch(getStartResourseData()),
    // serviceUpdateUser            = (user: Partial<User>) => dispatch(updateUser(user)),
    // serviceDeleteUser            = (companyId: string, userId: string) => dispatch(deleteUser({ companyId, userId })),
    serviceLogout            = () => dispatch(logout());
    // serviceSendEmailConfirmation = (email: string) => dispatch(sendEmailConfirmation(email));
  
  return {
    loading,
    errors,
    setErrors,
    clearErrors,

    auth,
    user,
    userId,
    isVerified,
    email,
    role,
    companyId,

    serviceGetStartResourseData,
    // serviceUpdateUser,
    // serviceDeleteUser,
    serviceLogout
    // serviceSendEmailConfirmation
  }
};
