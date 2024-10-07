import { SignupData } from '../../model';

/** 
 * DEPRECATED
 * Prepare signup data before send to server 
 */
export const prepareUserData = (data: SignupData): SignupData => {
  console.log('data: ', data);
  console.log('document.forms[0]: ', document.forms[0]);

  const prepared = { ...data };
  prepared.email    = document.forms[0].email.value;
  prepared.password = document.forms[0].password.value;

  return prepared;
};
