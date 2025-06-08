import Ajv from 'ajv';
// import { isCompanyStatus } from 'entities/company/model/validators/schemas';
import {
  isCountryCode, isPhoneNumberScheme, isPhoneType, isRole, isUserStatus
} from 'entities/user/model/validators/schemas';


export const addKeywords = (ajv: Ajv) => {
  ajv
    // Company
    // @ts-ignore
    // .addKeyword(isCompanyStatus)

    // User
    // @ts-ignore
    .addKeyword(isCountryCode)
    // @ts-ignore
    .addKeyword(isPhoneNumberScheme)
    // @ts-ignore
    .addKeyword(isPhoneType)
    // @ts-ignore
    .addKeyword(isRole)
    // @ts-ignore
    .addKeyword(isUserStatus)
};
