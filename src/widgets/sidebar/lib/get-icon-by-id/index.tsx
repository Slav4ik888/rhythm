import { defaultIcons, DefaultIconId } from 'shared/assets';


/**
 * Get icon by id
 */
export const getIconById = (id?: DefaultIconId | null): MuiIcon | string => {
  if (! id) return ''

  return defaultIcons[id];
}
