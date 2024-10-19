export const paths = {
  auth: {
    signup: {
      byEmail: '/auth/signup/byEmail',
      sendEmailConfirmation: '/auth/signup/sendEmailConfirmation',
    },
    login: {
      byEmail: '/auth/login/byEmail',
      resetEmailPassword: '/auth/login/resetEmailPassword',
    },
    logout: '/auth/logout',
  },
  user: {
    getStartResourseData: '/user/getStartResourseData',
    update: 'user/update',
  },
};
