import { ParamsCompany } from '../../../../types';
import { getUserAccess } from '..';



describe('getUserAccess', () => {
  const mockCompany = {
    members: {
      '1': { e: 'user1@example.com', role: 'admin' },
      '2': { e: 'user2@example.com', role: 'member' },
    }
  } as unknown as ParamsCompany;

  it('should return user access when user is a member', () => {
    const result = getUserAccess(mockCompany, 'user1@example.com');
    expect(result).toEqual({ e: 'user1@example.com', role: 'admin' });
  });

  it('should return undefined when user is not a member', () => {
    const result = getUserAccess(mockCompany, 'nonexistent@example.com');
    expect(result).toBeUndefined();
  });

  it('should return undefined when company is undefined', () => {
    // @ts-ignore
    const result = getUserAccess(undefined, 'user1@example.com');
    expect(result).toBeUndefined();
  });

  it('should return undefined when company.members is undefined', () => {
    // @ts-ignore
    const result = getUserAccess({}, 'user1@example.com');
    expect(result).toBeUndefined();
  });

  it('should return undefined when company.members is empty', () => {
    // @ts-ignore
    const result = getUserAccess({ members: {} }, 'user1@example.com');
    expect(result).toBeUndefined();
  });

  it('should be case sensitive for email comparison', () => {
    const result = getUserAccess(mockCompany, 'USER1@example.com');
    expect(result).toBeUndefined();
  });

  it('should return the first matching member if email exists in multiple members', () => {
    const companyWithDuplicates = {
      members: {
        '1': { e: 'user@example.com', role: 'admin' },
        '2': { e: 'user@example.com', role: 'member' },
      }
    } as unknown as ParamsCompany;
    const result = getUserAccess(companyWithDuplicates, 'user@example.com');
    expect(result).toEqual({ e: 'user@example.com', role: 'admin' });
  });
});

// npm run test:unit get-user-access.test.ts
