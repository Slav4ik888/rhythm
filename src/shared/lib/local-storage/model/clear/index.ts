import { PREFIX } from '../main';

export const clearStorage = () => {
  Object.keys(localStorage).forEach(key => {
    if (key.startsWith(PREFIX)) {
      localStorage.removeItem(key);
    }
  });
  // window.dispatchEvent(new Event('storageCleared'));
};
