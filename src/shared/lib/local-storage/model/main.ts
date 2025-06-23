// v.2025-06-08
import { __devLog } from '../../tests/__dev-log';

const PREFIX = 'Rhythm-';

/** Вывод ошибки в консоль */
const showError = (text: string, fieldName: string) => __devLog(`${text}: ${fieldName}`);


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
  if (checkError(storageName, '"Имя хранилища"')) return;
  if (checkError(data, '"Данные для сохранения"')) return;

  localStorage.setItem(PREFIX + storageName, JSON.stringify(data));
};


/**
 * v.2025-06-05
 * Достаём из LocalStorage
 */
export function getStorageData<A>(storageName: string): A | undefined {
  if (checkError(storageName, '"Имя хранилища"')) return;

  const data = localStorage.getItem(PREFIX + storageName);
  if (data) return JSON.parse(data);
  return;
}

/** Clear item by storageName */
export const removeStorageData = (storageName: string) => {
  if (checkError(storageName, '"Имя хранилища"')) return;

  localStorage.removeItem(PREFIX + storageName);
};
