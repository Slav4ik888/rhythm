import Ajv from 'ajv';
import { defsCompany, schemaCompany } from 'entities/company/model/validators/schemas';
import { defsBase } from '../../schemas';
import { defsItemBase, schemaFixDate } from 'entities/base/model/validators/schemas';
import {
  defsFIO, defsPhone, defsUser, schemaPerson, schemaPhoneNumber, schemaPosition
 } from 'entities/user/model/validators/schemas';
import { schemaAuthByLogin } from 'pages/login/model/validators/schemas';
import { schemaSignupData } from 'pages/signup/model/validators/schemas';
// eslint-disable-next-line max-len
import { schemaRecoveryData } from 'widgets/auth/action-container/action-helps/recovery-password/model/validators/schemas';



export const addSchemas = (ajv: Ajv) => {
  ajv
    .addSchema([
      defsBase,

      // UI
      schemaFixDate,
      defsItemBase,

      // Auth
      schemaAuthByLogin,
      schemaRecoveryData,
      schemaSignupData,

      // User
      defsFIO,
      defsPhone,
      defsUser,
      schemaPerson,
      schemaPhoneNumber,
      schemaPosition,

      // Company
      defsCompany,
      schemaCompany,
    ])
};
