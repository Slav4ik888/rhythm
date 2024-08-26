import { actionsUI } from 'entities/ui';
import { AnyAction, ThunkDispatch } from '@reduxjs/toolkit';
import { StateSchema, ThunkExtraArg } from './state';
import { Errors } from 'shared/lib/validators';


export interface CustomAxiosError {
  response: {
    status: number
    data: Errors
  }
}

export const errorHandlers = (
  e         : CustomAxiosError,
  dispatch  : ThunkDispatch<StateSchema, ThunkExtraArg, AnyAction>,
  pathname? : string
) => {
  console.log('e: ', e);
  console.log('response: ', e.response);
  console.log('status: ', e.response?.status);


  const
    errors = e.response?.data || {},
    status = e.response?.status;

  console.log('pathname: ', pathname);

  if (errors.general) {
    if (errors.general !== 'auth/user-not-found') dispatch(actionsUI.setWarningMessage(errors.general));
  }
  
  if (errors.message) dispatch(actionsUI.setWarningMessage(errors.message));

  // Нужно авторизоваться, будет редирект to loginPage
  if (status === 401) {
    dispatch(actionsUI.setErrorStatus({ status: 401, pathname }));
  }
  else if (status === 403) dispatch(actionsUI.setErrorStatus({ status: 403, pathname }));
  else if (status === 502 || status === 504) {
    // dispatch(actionsUI.setErrorStatus(504));
    dispatch(actionsUI.setWarningMessage('Извините, сервер временно не доступен...'))
  }
}
