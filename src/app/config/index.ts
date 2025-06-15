const cfg = {
  ASSEMBLY_DATE           : '2025-06-15',

  COOKIE_NAME             : 'Rhythm',
  DEFAULT_MESSAGE_TIMEOUT : 6000,

  UPLOAD: {
    MAX_FILE_SIZE       : 3  * 1024 * 1024, // 3Mb
    MAX_TOTAL_FILE_SIZE : 12 * 1024 * 1024  // 12Mb
  },

  // DEV
  /** If checks should been disabled */
  IS_EXPERIMENTAL : false,
  IS_DEV: false, // true, // Если загрузить данные надо не с сервера а из LS, например, когда нет интернета
}

export default cfg
