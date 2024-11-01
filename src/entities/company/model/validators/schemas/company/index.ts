import { SCHEMA_NAME } from 'shared/lib/validators/ajv';


export const schema = {
  $id                  : SCHEMA_NAME.COMPANY,
  type                 : 'object',
  required             : ['companyId'],
  additionalProperties : false,

  properties: {
    // companyName   : { $ref: `${SCHEMA_NAME.DEFS_COMPANY}#/definitions/companyName`},
    // companyId     : { $ref: `${SCHEMA_NAME.DEFS_COMPANY}#/definitions/companyId`},
    // ownerId       : { $ref: `${SCHEMA_NAME.DEFS_COMPANY}#/definitions/ownerId`},
    // owner         : { $ref: `${SCHEMA_NAME.DEFS_COMPANY}#/definitions/owner`},

    // logoUrl       : { $ref: `${SCHEMA_NAME.DEFS_COMPANY}#/definitions/logoUrl`},

    // payers        : { $ref: `${SCHEMA_NAME.DEFS_COMPANY}#/definitions/payers`},
    // courseAccess  : { $ref: `${SCHEMA_NAME.DEFS_COMPANY}#/definitions/courseAccess`},
    // subscriptions : { $ref: `${SCHEMA_NAME.DEFS_COMPANY}#/definitions/subscriptions`},

    // status        : { $ref: `${SCHEMA_NAME.DEFS_COMPANY}#/definitions/status`},
    // partnerCode   : { $ref: `${SCHEMA_NAME.DEFS_COMPANY}#/definitions/partnerCode`},
    // createdAt     : { $ref: `${SCHEMA_NAME.DEFS_COMPANY}#/definitions/createdAt`},
    // lastChange    : { $ref: `${SCHEMA_NAME.DEFS_COMPANY}#/definitions/lastChange`}
  }
};
