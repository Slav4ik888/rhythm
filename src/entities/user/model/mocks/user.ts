import { MOCK_COMPANY_ID } from 'entities/company/model/mocks';
import { creatorFixDate } from 'entities/ui';
import { cloneObj } from 'shared/helpers/objects';
import { Role, User, UserStatus } from '../types';
import { MOCK_PERSON, MOCK_PERSON_EMPTY } from './person';
import { USER_SETTINGS } from './settings';



export const MOCK_USER_ID = 'FmyRl2ZALlMSZTloX9JXFPrMB303';


export const MOCK_USER_EMPTY: User = {
  id            : '',
  companyId     : '',

  person        : cloneObj(MOCK_PERSON_EMPTY),
  email         : '',
  permissions   : false,

  positions     : [],
  role          : Role.EMPLOYEE,
  emailVerified : false,
  status        : UserStatus.NEW,
  order         : 100,

  settings      : cloneObj(USER_SETTINGS),
  createdAt     : creatorFixDate(),
  lastChange    : creatorFixDate()
};


export const MOCK_USER_EMPLOYEE: User = {
  id            : MOCK_USER_ID,
  companyId     : MOCK_COMPANY_ID,

  person        : cloneObj(MOCK_PERSON),
  email         : 'korzan.va@mail.ru',
  permissions   : false,

  positions     : [],
  role          : Role.EMPLOYEE,
  emailVerified : false,
  status        : UserStatus.NEW,
  order         : 100,
  settings      : cloneObj(USER_SETTINGS),
  
  createdAt     : creatorFixDate(MOCK_USER_ID),
  lastChange    : creatorFixDate(MOCK_USER_ID)
};
