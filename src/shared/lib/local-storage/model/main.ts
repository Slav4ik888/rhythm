// v.2025-08-14
import * as h from './helpers';
import { __devLog } from '../../tests/__dev-log';

export const PREFIX = 'Rhythm-';

/** Вывод ошибки в консоль */
const showError = (text: string, fieldName: string) => __devLog('LS showError', `${text}: ${fieldName}`);


/**
 * Проверка на ошибку
 * Вывод ошибки
 * Ответ есть ли ошибка - true при наличии
 */
const checkError = (data: any, fieldName: string) => {
  if (!data) {
    showError('Не указано значение', fieldName);
    return true;
  }
  return false;
};



/** Сохраняем в LocalStorage */
export const setStorageData = (storageName: string, data: any) => {
  try {
    if (checkError(storageName, '"Имя хранилища"')) return;
    if (checkError(data, '"Данные для сохранения"')) return;

    localStorage.setItem(PREFIX + storageName, JSON.stringify(data));
  }
  catch (e: any) {
    if (e.name === 'QuotaExceededError') {
      console.error('LS заполнен, очистили старые данные и сохранили новые');

      const companyId = storageName.split('-')[1];

      if (! companyId) {
        localStorage.clear();
        // eslint-disable-next-line no-alert
        if (confirm('Необходимо обновить страницу')) {
          location.reload();
        }
      }

      const cookie = h.getAcceptedCookie();
      const userState = h.getUserState(companyId);
      const lastCompanyId = h.getLastCompanyId();
      const companyState = h.getCompanyState(companyId);
      const paramsCompanyState = h.getParamsCompanyState();
      const uIConfiguratorState = h.getUIConfiguratorState();
      const dashboardTemplates = h.getTemplates();
      const dashboardTemplatesBunchesUpdated = h.getTemplatesBunchesUpdated();
      const dashboardDataState = h.getDataState(companyId);
      const dashboardBunches = h.getBunches(companyId);
      const dashboardViewBunchesUpdated = h.getViewBunchesUpdated(companyId);


      localStorage.clear();

      if (cookie) h.setAcceptedCookie();
      if (userState) h.setUserState(companyId, userState);
      if (lastCompanyId) h.setLastCompanyId(lastCompanyId);
      if (companyState) h.setCompanyState(companyId, companyState);
      if (paramsCompanyState) h.setParamsCompanyState(paramsCompanyState);
      if (uIConfiguratorState) h.setUIConfiguratorState(uIConfiguratorState);
      h.setTemplates(dashboardTemplates);
      h.setTemplatesBunchesUpdated(dashboardTemplatesBunchesUpdated);
      if (dashboardDataState) h.setDataState(companyId, dashboardDataState);
      h.setBunches(companyId, dashboardBunches);
      h.setViewBunchesUpdated(companyId, dashboardViewBunchesUpdated);
    }
    else {
      console.error('Ошибка LocalStorage:', e);
    }
    return false;
  }
};


/**
 * v.2025-06-05
 * Достаём из LocalStorage
 */
export function getStorageData<A>(storageName: string): A | undefined {
  if (checkError(storageName, '"Имя хранилища"')) return;

  const data = localStorage.getItem(PREFIX + storageName);
  if (data) return JSON.parse(data);
}

/** Clear item by storageName */
export const removeStorageData = (storageName: string) => {
  if (checkError(storageName, '"Имя хранилища"')) return;

  localStorage.removeItem(PREFIX + storageName);
};
