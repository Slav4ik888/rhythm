import { actionsUI } from 'entities/ui';
import { AnyAction, ThunkDispatch } from '@reduxjs/toolkit';
import { StateSchema, ThunkExtraArg } from './state';
import { Errors } from 'shared/lib/validators';
import { actionsUser } from 'entities/user';
import { __devLog } from 'shared/lib/tests/__dev-log';
import { LS } from 'shared/lib/local-storage';



export interface CustomAxiosError {
  code     : string
  stack    : string
  response : {
    status : number
    data   : Errors
    config : {
      url: string
    }
  }
}

export const errorHandlers = (
  e         : CustomAxiosError,
  dispatch  : ThunkDispatch<StateSchema, ThunkExtraArg, AnyAction>,
  pathname? : string
) => {
  __devLog('e: ', e);
  __devLog('response: ', e.response);
  __devLog('status: ', e.response?.status);
  __devLog('stack: ', e.stack);

  const
    errors = e.response?.data || {},
    status = e.response?.status;

  __devLog('pathname: ', pathname);

  dispatch(actionsUI.setPageLoading()); // Снять крутилку

  if (errors.updateRequired) {
    LS.clearStorage();
    return dispatch(actionsUI.setInfoMessage('Приложение обновилось. Необходимо обновить страницу.'));
  }
  if (e.code === 'ECONNABORTED') {
    return dispatch(actionsUI.setWarningMessage('Отсутствует интернет-соединение. Попробуйте позже.'))
  }
  if (errors.general) {
    if (errors.general !== 'auth/user-not-found') return dispatch(actionsUI.setWarningMessage(errors.general));
    return dispatch(actionsUI.setErrorMessage(errors.general));
  }

  // if (errors.message) return dispatch(actionsUI.setWarningMessage(errors.message));

  if (status === 204) { // No Content
    return dispatch(actionsUI.setWarningMessage('По вашему запросу отсутствуют данные.'));
  }
  // Нужно авторизоваться, будет редирект to loginPage
  else if (status === 401) {
    dispatch(actionsUser.setAuth(false));
    return dispatch(actionsUI.setErrorStatus({ status: 401, pathname }));
  }
  else if (status === 403) return dispatch(actionsUI.setErrorStatus({ status: 403, pathname }));
  else if (status === 404) {
    return dispatch(actionsUI.setWarningMessage(
      `Сервер вернул ошибку - отсутствует обработчик на данный запрос [${e.response?.config?.url}].
       Повторите действие позже.`
    ));
  }
  else if (status === 500 || status === 501 || status === 502 || status === 504) {
    // dispatch(actionsUI.setErrorStatus(504));
    return dispatch(actionsUI.setWarningMessage('Извините, сервер временно не доступен...'));
  }
  // else if (e.stack) {
  //   return dispatch(actionsUI.setErrorMessage(e.stack));
  // }
}
