import { ColorMode } from 'app/providers/theme';
import { setStorageData, getStorageData, removeStorageData } from './main';
import { Names } from './names';


export const setColorMode = (data: ColorMode) => setStorageData('ColorMode', data);
export const getColorMode = () => getStorageData<ColorMode>('ColorMode');

/** Auth */
export const setAcceptedCookie = () => setStorageData(Names.ACCEPTED_COOKIE, 'true');
export const getAcceptedCookie = (): string => getStorageData(Names.ACCEPTED_COOKIE);
