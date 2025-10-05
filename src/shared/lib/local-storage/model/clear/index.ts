import { PREFIX } from '../main';
import * as h from '../helpers';

export const clearStorage = () => {
  // Сохраняем важное
  const cookie = h.getAcceptedCookie();
  const hintsDontShowAgain = h.getHintsDontShowAgain();

  Object.keys(localStorage).forEach(key => {
    if (key.startsWith(PREFIX)) {
      localStorage.removeItem(key);
    }
  });

  // Восстанавливаем важное
  if (cookie) h.setAcceptedCookie();
  h.setHintsDontShowAgain(hintsDontShowAgain);

  // window.dispatchEvent(new Event('storageCleared'));
};
