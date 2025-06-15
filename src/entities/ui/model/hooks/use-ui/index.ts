import * as s from '../../selectors';
import { actions } from '../../slice';
import { Message } from '../../types';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks';
import { isGreaterMd as isGreaterMdFn } from '../../utils';
import { Errors } from 'shared/lib/validators';



export const useUI = () => {
  const
    dispatch          = useAppDispatch(),

    loading           = useSelector(s.selectLoading),

    // Page Loader
    pageLoading       = useSelector(s.selectPageLoading),
    setPageLoading    = (status?: boolean) => dispatch(actions.setPageLoading(status)),
    pageText          = useSelector(s.selectPageText),
    setPageText       = (text?: string) => dispatch(actions.setPageText(text)),

    // Errors
    errors            = useSelector(s.selectErrors),
    setErrors         = (errors: Errors) => dispatch(actions.setErrors(errors)),

    errorStatus       = useSelector(s.selectErrorStatus),
    setErrorStatus    = (status: number) => dispatch(actions.setErrorStatus({ status })),

    // Messages
    message           = useSelector(s.selectMessage),
    setMessage        = (message: Message) => dispatch(actions.setMessage(message)),
    setSuccessMessage = (message: string)  => dispatch(actions.setSuccessMessage(message)),
    setWarningMessage = (message: string)  => dispatch(actions.setWarningMessage(message)),
    clearMessage      = () => dispatch(actions.clearMessage()),

    // Screen Formats
    screenFormats     = useSelector(s.selectScreenFormats),
    screenSize        = useSelector(s.selectScreenSize),
    isGreaterMd       = isGreaterMdFn(screenFormats),
    isMobile          = screenFormats?.isMobile,
    setScreenFormat   = (size: number) => dispatch(actions.setScreenFormats(size)),

    // Cookie
    acceptedCookie    = useSelector(s.selectAcceptedCookie),
    setAcceptedCookie = (value: boolean) => dispatch(actions.setAcceptedCookie(value)),

    // Replace Path
    replacePath       = useSelector(s.selectReplacePath),
    setReplacePath    = (path: string) => dispatch(actions.setReplacePath(path)),
    clearReplacePath  = () => dispatch(actions.clearReplacePath());



  return {
    loading,

    // Page Loader
    pageLoading,
    setPageLoading,
    pageText,
    setPageText,

    // Errors
    errors,
    setErrors,

    errorStatus,
    setErrorStatus,

    // Messages
    message,
    setMessage,
    setSuccessMessage,
    setWarningMessage,
    clearMessage,

    // Screen Formats
    screenFormats,
    screenSize,
    isGreaterMd,
    isMobile,
    setScreenFormat,

    // Cookie
    acceptedCookie,
    setAcceptedCookie,

    // Replace Path
    replacePath,
    setReplacePath,
    clearReplacePath
  }
};
