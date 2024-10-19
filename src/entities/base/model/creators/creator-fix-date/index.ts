import { getCurrentMs } from 'shared/helpers/dates';
import { isNum } from 'shared/lib/validators';
import { FixDate } from '../../types';

/**
 * @param date if undefined => be currentMs()
 */
export const creatorFixDate = (userId: string = '', date?: number): FixDate => ({
  userId,
  date: isNum(date) ? date as number : getCurrentMs()
});
