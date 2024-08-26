const cfg = {
  ASSEMBLY_DATE           : '2024-08-28',
  
  COOKIE_NAME             : 'company-rules',
  DEFAULT_MESSAGE_TIMEOUT : 6000,

  SITE_TITLE_FULL         : 'Company Rules',
  
  UPLOAD: {
    MAX_FILE_SIZE       : 3  * 1024 * 1024, // 3Mb
    MAX_TOTAL_FILE_SIZE : 12 * 1024 * 1024  // 12Mb
  },

  // DEV
  /** If checks should been disabled */
  IS_EXPERIMENTAL : false
}

export default cfg
