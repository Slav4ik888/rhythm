import { SignupData } from '../../model';


export const createUserData = (isMobile: boolean): SignupData => ({
    firstName       : '',
    email           : '',
    password        : '',
    confirmPassword : '',
    companyName     : '',
    permissions     : false,
    isMobile
});
  