import { FORMAT, getMonth, getMonthDDсYYYY, getMonthYYYY, SUB, getDDMonthYYYY,
getDMonthYYYY, getDMonthYYYYHHMM, getYYYYMMDDt, getYYYYMMDD, getDDMMYYYYt, getDDMMYYYYd,
getDDMMYYdHHMM, getHHMM } from '..';


// Validate
const isNoCorrect = (ms: number) => ! ms || ms < 0 || typeof ms !== 'number';


/**
 * v.2023-04-28
 * Возвращаем дату от time в нужном формате
 * @return {string} - дата в нужном формате
 */
export function formatDate(
  _ms    : number | string, // таймстамп
  format : string,          // формат, в котором нужно вернуть ms
  sub    : SUB = SUB.EN,    // если нужно в на русском или нужно склонение 'Февраля'
): string {                 // дата в нужном формате

  let date;
  
  if (Date.parse(_ms as string)) date = new Date(_ms)
  else {
    const ms = parseInt(_ms as string);
    if (isNoCorrect(ms)) return 'Указана некорректная дата';
    date = new Date(ms);
  }
    

  switch (format) {
    case FORMAT.Month:          return getMonth          (date, sub);
    case FORMAT.MonthYYYY:      return getMonthYYYY      (date, sub);
    case FORMAT.MonthDDсYYYY:   return getMonthDDсYYYY   (date, sub);
    case FORMAT.DDMonthYYYY:    return getDDMonthYYYY    (date, sub);
    case FORMAT.DMonthYYYY:     return getDMonthYYYY     (date, sub);
    case FORMAT.DMonthYYYYHHMM: return getDMonthYYYYHHMM (date, sub);
    case FORMAT.YYYYMMDDt:      return getYYYYMMDDt      (date);
    case FORMAT.YYYYMMDD:       return getYYYYMMDD       (date);
    case FORMAT.DDMMYYYYt:      return getDDMMYYYYt      (date);
    case FORMAT.DDMMYYYYd:      return getDDMMYYYYd      (date);
    case FORMAT.DDMMYYdHHMM:    return getDDMMYYdHHMM    (date);
    case FORMAT.HHMM:           return getHHMM           (date);

    default: return String(date);
  }
};
