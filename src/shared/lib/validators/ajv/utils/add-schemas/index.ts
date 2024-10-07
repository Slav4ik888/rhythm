import Ajv from 'ajv';
import { defsCompany, schemaCompany } from 'entities/company/model/validators/schemas';
import { defsBase } from '../../schemas';
import { defsItemBase, schemaFixDate } from 'entities/ui/model/validators/schemas';
import { defsFIO, defsPhone, defsUser, schemaPerson, schemaPhoneNumber, schemaPosition } from 'entities/user/model/validators/schemas';
import { schemaAuthByLogin } from 'pages/login/model/validators/schemas';
import { schemaSignupData } from 'pages/signup/model/validators/schemas';
import { schemaRecoveryData } from 'widgets/auth/action-container/action-helps/recovery-password/model/validators/schemas';
import { schemaFolder } from 'entities/folders/model/validators/schemas';
import { defsRule, schemaRule } from 'entities/rules/model/validators/schemas';



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

      // Folders
      schemaFolder,

      // Rules
      defsRule,
      schemaRule
    ])
};
