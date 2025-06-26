import * as s from '../../selectors';
import { actions } from '../../slice';
import { Message } from '../../types';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks';
import { isGreaterMd as isGreaterMdFn } from '../../utils';
import { Errors } from 'shared/lib/validators';
import { useMemo } from 'react';
import { SetPageText } from '../../slice/types';



export const useUI = () => {
  const dispatch = useAppDispatch();

  const loading = useSelector(s.selectLoading);

  // Page Loader
  const pageLoading = useSelector(s.selectPageLoading);
  const pageText = useSelector(s.selectPageText);

  // Errors
  const errors = useSelector(s.selectErrors);

  const errorStatus = useSelector(s.selectErrorStatus);

  // Messages
  const message = useSelector(s.selectMessage);

  // Screen Formats
  const screenFormats = useSelector(s.selectScreenFormats);
  const screenSize = useSelector(s.selectScreenSize);
  const isGreaterMd = isGreaterMdFn(screenFormats);
  const isMobile = screenFormats?.isMobile;

  // Cookie
  const acceptedCookie = useSelector(s.selectAcceptedCookie);

  // Replace Path
  const replacePath = useSelector(s.selectReplacePath);

  const api = useMemo(() => ({
    setPageLoading    : (status?: boolean) => dispatch(actions.setPageLoading(status)),
    setPageText       : (data: SetPageText) => dispatch(actions.setPageText(data)),
    setErrors         : (errors: Errors) => dispatch(actions.setErrors(errors)),
    setErrorStatus    : (status: number) => dispatch(actions.setErrorStatus({ status })),
    setMessage        : (message: Message) => dispatch(actions.setMessage(message)),
    setSuccessMessage : (message: string)  => dispatch(actions.setSuccessMessage(message)),
    setWarningMessage : (message: string)  => dispatch(actions.setWarningMessage(message)),
    clearMessage      : () => dispatch(actions.clearMessage()),
    setScreenFormat   : (size: number) => dispatch(actions.setScreenFormats(size)),
    setAcceptedCookie : (value: boolean) => dispatch(actions.setAcceptedCookie(value)),
    setReplacePath    : (path: string) => dispatch(actions.setReplacePath(path)),
    clearReplacePath  : () => dispatch(actions.clearReplacePath()),
  }),
    [dispatch]
  );


  return {
    loading,
    // Page Loader
    pageLoading,
    pageText,

    // Errors
    errors,

    errorStatus,

    // Messages
    message,

    // Screen Formats
    screenFormats,
    screenSize,
    isGreaterMd,
    isMobile,

    // Cookie
    acceptedCookie,

    // Replace Path
    replacePath,
    ...api
  }
};
