import { hour } from 'shared/helpers/dates'

const cfg = {
  VERSION                 : '1.11.0',
  ASSEMBLY_DATE           : '2025-07-16',

  COOKIE_NAME             : 'Rhythm',
  DEFAULT_MESSAGE_TIMEOUT : hour(2),

  UPLOAD: {
    MAX_FILE_SIZE       : 3  * 1024 * 1024, // 3Mb
    MAX_TOTAL_FILE_SIZE : 12 * 1024 * 1024  // 12Mb
  },

  // DEV
  /** If checks should been disabled */
  IS_EXPERIMENTAL   : false,
  // set IS_DEV = false before PRODUCTION
  IS_DEV            : false, // true, // Если загрузить данные надо не с сервера а из LS, например, когда нет интернета
  DASHBOARD_DISABLE : false, // true, // Don`t render dashboard
}

export default cfg
