// import { MOCK_PAYER } from '../../../../../../model/payers/mocks';
// import { MOCK_SUBSCRIPTION_CHECKING } from '../../../../../../model/subscriptions/mocks';
// import { cloneObj, getMockStrLength, createArr } from '../../../../../../../../utils';
// import { Payer, Payers } from '../../../../../payers/types';
// import { MOCK_COMPANY } from '../../../../mocks';
// import { Company, CompanyStatusType, CourseAccessStatus } from '../../../../types';
// import { Mocks } from "./types";


// // More maxItems
// const INVALID_PAYERS: Payers = {
//   selected : 1,
//   payers   : [...createArr(11, MOCK_PAYER)]
// };


// export const mocks: Mocks = [
//   [
//     {
//       description: 'Valid data',
//       data: MOCK_COMPANY
//     }, {
//       errors: {}, valid: true
//     }
//   ],
//   [
//     {
//       description: 'Data is undefined',
//       data: undefined
//     }, {
//       errors: {
//         general: 'Не верный формат данных.'
//       },
//       valid: false
//     }
//   ],
//   [
//     {
//       description: 'With additional parameters',
//       data: { ...MOCK_COMPANY, addy: 'fuck' } as Company
//     }, {
//       errors: {
//         addy: 'Присутствует недопустимое поле \"addy\".'
//       },
//       valid: false
//     }
//   ],
//   [
//     {
//       description: 'Without some fields',
//       data: {
//         ...(() => {
//           const obj = cloneObj(MOCK_COMPANY);
//           delete obj.companyId;

//           return obj
//         })()
//       } as Company
//     }, {
//       errors: {
//         companyId: 'Отсутствует обязательное поле \"companyId\".'
//       },
//       valid: false
//     }
//   ],
//   [
//     {
//       description: 'Payers field is apsent',
//       data: {
//         ...(() => {
//           const obj = cloneObj(MOCK_COMPANY);
//           obj.payers = {
//             selected: 0
//           } as Payers;

//           return obj
//         })()
//       } as Company
//     }, {
//       errors: {
//         payers: 'Отсутствует обязательное поле \"payers\".'
//       },
//       valid: false
//     }
//   ],
//   [
//     {
//       description: 'Payers field is invalid - object',
//       data: {
//         ...(() => {
//           const obj = cloneObj(MOCK_COMPANY);
//           obj.payers = {
//             selected: 0,
//             payers: {}
//           } as Payers;

//           return obj
//         })()
//       } as Company
//     }, {
//       errors: {
//         general: 'Не верный формат данных.'
//       },
//       valid: false
//     }
//   ],
//   [
//     {
//       description: 'Payers field is invalid - object',
//       data: {
//         ...(() => {
//           const obj = cloneObj(MOCK_COMPANY);
//           obj.payers = {
//             selected: 0,
//             payers: [{ id: '123' } as unknown as Payer]
//           } as Payers;

//           return obj
//         })()
//       } as Company
//     }, {
//       errors: {
//         ITN       : 'Отсутствует обязательное поле \"ITN\".',
//         payerName : 'Отсутствует обязательное поле \"payerName\".',
//         general   : 'Не верный формат данных.',
//       },
//       valid: false
//     }
//   ],
//   [
//     {
//       description: 'Invalid many fields',
//       data: {
//         ...MOCK_COMPANY,
//         companyName   : getMockStrLength(51),
//         companyId     : getMockStrLength(21),
//         ownerId       : getMockStrLength(29),
//         owner         : getMockStrLength(40),

//         logoUrl       : getMockStrLength(301),

//         payers        : INVALID_PAYERS,
//         courseAccess  : 'FuckStatus' as CourseAccessStatus,
//         subscriptions : [...createArr(11, MOCK_SUBSCRIPTION_CHECKING)],
//         partnerCode   : getMockStrLength(11),
//         status        : 'FuckStatus' as CompanyStatusType,
//         createdAt     : undefined,
//         lastChange    : -1,
//       }
//     }, {
//       errors: {
//         companyId     : 'Поле "companyId" не должно быть больше 20 символов.',
//         companyName   : 'Поле "Название компании" не должно быть больше 50 символов.',
//         owner         : 'Не верный формат данных.',
//         logoUrl       : 'Поле "logoUrl" не должно быть больше 300 символов.',
//         ownerId       : 'Поле "ownerId" не должно быть больше 28 символов.',
//         partnerCode   : 'Поле "partnerCode" не должно быть больше 10 символов.',
//         courseAccess  : 'Поле "courseAccess" не является одним из допустимых значений.',
//         status        : 'Поле "status" не является одним из допустимых значений.',
//         lastChange    : 'Поле "lastChange" не должно быть меньше 0.',
//         payers        : 'Массив "payers" не должен быть больше 10 элементов.',
//         subscriptions : 'Массив "subscriptions" не должен быть больше 10 элементов.'
//       },
//       valid: false
//     }
//   ]
// ];
