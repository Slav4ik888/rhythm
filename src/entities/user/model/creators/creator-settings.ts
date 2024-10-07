import { Languages, UserSettings } from '../types';


/** v.2023-11-11 */
export const creatorUserSettings = (cfg: Partial<UserSettings> = {}): UserSettings => ({
  language: cfg.language || Languages.RU
});
