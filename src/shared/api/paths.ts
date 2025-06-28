export const paths = {
  auth: {
    login: {
      byEmail            : '/auth/login/byEmail',
      resetEmailPassword : '/auth/login/resetEmailPassword',
    },
    signup: {
      byEmail: '/auth/signup/byEmail',
    },
  },
  user: {
    getAuth               : '/user/getAuth',
    // getStartResourseData  : '/user/getStartResourseData',
    update                : '/user/update',
    sendEmailConfirmation : '/user/sendEmailConfirmation',
    logout                : '/user/logout',
  },
  company: {
    // get    : '/company/get',
    update : '/company/update',
    // deleteCompany : '/deleteCompany/:companyId',
  },
  paramsCompany: {
    get    : '/paramsCompany/get',
  },
  dashboard: {
    bunch:  {
      get    : '/dashboard/bunch/get',
    },
    view: {
      // add              : '/dashboard/view/add',
      createGroupItems : '/dashboard/view/createGroupItems',
      // get              : '/dashboard/view/get', // Get all ViewItemsByCompanyId
      update           : '/dashboard/view/update',
      delete           : '/dashboard/view/delete',
    },
  },
  templates: {
    bunch:  {
      get    : '/templates/bunch/get',
    },
  },
  docs: {
    getPolicy: '/getPolicy',
  },
  google: {
    getData: '/getData',
  },
  transactions: {
    sendTransactions: '/sendTransactions',
  }
};
