import { SCHEMA_NAME } from 'shared/lib/validators/ajv';


export const definitions = {
  $id  : SCHEMA_NAME.DEFS_USER,
  type : 'object',

  definitions: {
    userId: {
      type      : 'string',
      minLength : 28,
      maxLength : 28
    },
    
    // Разрешения на обработку персональных данных
    permissions: {
      type: 'boolean'
    },
    emailVerified: {
      type: 'boolean'
    },
    status    : { isUserStatus: 'string' },
    role      : { isRole: 'string' },

    positions : {
      type  : 'array',
      items : {
        $ref: SCHEMA_NAME.POSITION
      },
      maxItems: 50
    },
   

    // ITEM-BASE
    condition   : { $ref: `${SCHEMA_NAME.DEFS_ITEM_BASE}#/definitions/condition` },
    label       : { $ref: `${SCHEMA_NAME.DEFS_ITEM_BASE}#/definitions/label` },
    description : { $ref: `${SCHEMA_NAME.DEFS_ITEM_BASE}#/definitions/description` },
    comment     : { $ref: `${SCHEMA_NAME.DEFS_ITEM_BASE}#/definitions/comment` },
    order       : { $ref: `${SCHEMA_NAME.DEFS_ITEM_BASE}#/definitions/order` },

    createdAt   : { $ref: SCHEMA_NAME.FIX_DATE},
    lastChange  : { $ref: SCHEMA_NAME.FIX_DATE}
  }
}
