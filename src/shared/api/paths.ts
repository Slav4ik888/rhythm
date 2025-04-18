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
    getStartResourseData  : '/user/getStartResourseData',
    update                : '/user/update',
    sendEmailConfirmation : '/user/sendEmailConfirmation',
    logout                : '/user/logout',
  },
  company: {
    update : '/company/update',
    // deleteCompany : '/deleteCompany/:companyId',
  },
  dashboard: {
    view: {
      add              : '/dashboard/view/add',
      createGroupItems : '/dashboard/view/createGroupItems',
      update           : '/dashboard/view/update',
      delete           : '/dashboard/view/delete',
    }
  },
  transactions: {
    sendTransactions: '/sendTransactions',
  }
};
