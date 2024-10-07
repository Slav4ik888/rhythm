import { MOCK_USER_EMPTY, MOCK_USER_EMPLOYEE } from '../../../mocks';
import { cloneObj } from 'shared/helpers/objects';
import { creatorUser } from '..';
import { Languages } from 'entities/user/model/types';



describe('creatorUser', () => {
  test('With User data', () => {
    expect(creatorUser(MOCK_USER_EMPLOYEE)).toEqual(MOCK_USER_EMPLOYEE);
  });

  test('User data id undefined', () => {
    const
      res = creatorUser(undefined),
      user = cloneObj(MOCK_USER_EMPTY);

    res.createdAt.date   = 0;
    res.lastChange.date  = 0;
    user.settings.language = Languages.RU;
    user.createdAt.date  = 0;
    user.lastChange.date = 0;
    
    expect(res).toEqual(user);
  });
});

// npm run test:unit creator-user.test.ts
