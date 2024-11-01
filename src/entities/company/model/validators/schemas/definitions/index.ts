import { SCHEMA_NAME } from 'shared/lib/validators/ajv';


export const definitions = {
  $id  : SCHEMA_NAME.DEFS_COMPANY,
  type : 'object',

  definitions: {
    companyId   : { $ref: `${SCHEMA_NAME.DEFS_ITEM_BASE}#/definitions/id` },
    companyName : {
      type      : 'string',
      maxLength : 50
    },
    ownerId : { $ref: `${SCHEMA_NAME.DEFS_USER}#/definitions/userId` },
    owner   : { $ref: `${SCHEMA_NAME.DEFS_BASE}#/definitions/email` },
    logoUrl : {
      type      : 'string',
      maxLength : 300
    },

    subscribes: {
      type     : 'array',
      maxItems : 10
      // items: {
      //   $ref: SubscribesCompany
      // },
    },
    
    status: {
      isCompanyStatus: 'string'
    },

    createdAt  : { $ref: SCHEMA_NAME.FIX_DATE},
    lastChange : { $ref: SCHEMA_NAME.FIX_DATE}

    
    // payers: {
    //   type : 'object',
    //   required: ['selected', 'payers'],
    //   properties: {
    //     selected: {
    //       type: 'number'
    //     },
    //     payers: {
    //       type: 'array',
    //       items: {
    //         $ref: SCHEMA_NAME.PAYER
    //       },
    //       maxItems: 10
    //     }
    //   }
    // },
  }
};
