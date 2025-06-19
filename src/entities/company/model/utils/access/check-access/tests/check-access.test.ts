import { checkAccess } from '..';
import { ParamsCompany } from '../../../../types';



describe('checkAccess', () => {
  const mockCompany = {
    owner: 'owner@example.com',
    members: {
      '1': {
        e: 'admin@example.com',
        a: {
          d: { f: 'e' },
          x: { y: 'v' }
        }
      },
      '2': {
        e: 'view.access.user@example.com',
        a: {
          d: { f: 'v' },
          y: 'n',
        }
      },
      '3': {
        e: 'none.access.user@example.com',
        a: {
          d: { f: 'n' },
          y: 'n',
        }
      }
    }
  } as unknown as ParamsCompany;

  // 1. Проверка для владельца компании
  it('should always return true for company owner', () => {
    expect(checkAccess(mockCompany, 'owner@example.com', 'a.d.f', 'n')).toBe(true);
    expect(checkAccess(mockCompany, 'owner@example.com', 'any.scheme', 'e')).toBe(true);
  });

  // 2. Проверка для пользователя с правами 'e'
  it('should return true when admin has required access level', () => {
    expect(checkAccess(mockCompany, 'admin@example.com', 'a.d.f', 'e')).toBe(true);
    expect(checkAccess(mockCompany, 'admin@example.com', 'a.d.f', 'v')).toBe(true);
  });

  // 3. Проверка для пользователя с правами 'v'
  it('should return true when user has exact required access', () => {
    expect(checkAccess(mockCompany, 'view.access.user@example.com', 'a.d.f', 'v')).toBe(true);
  });

  // 4. Проверка недостаточных прав
  it('should return false when access level is insufficient', () => {
    expect(checkAccess(mockCompany, 'view.access.user@example.com', 'a.d.f', 'e')).toBe(false);
    expect(checkAccess(mockCompany, 'none.access.user@example.com', 'a.d.f', 'v')).toBe(false);
    expect(checkAccess(mockCompany, 'view.access.user@example.com', 'x.y', 'v')).toBe(false);
  });

  // 5. Проверка несуществующей схемы
  it('should return false for non-existent scheme', () => {
    expect(checkAccess(mockCompany, 'admin@example.com', 'not.existing.scheme', 'v')).toBe(false);
    expect(checkAccess(mockCompany, 'view.access.user@example.com', 'a.b.c', 'v')).toBe(false);
  });

  // 6. Проверка для несуществующего пользователя
  it('should return false for non-member user', () => {
    expect(checkAccess(mockCompany, 'unknown@example.com', 'a.d.f', 'v')).toBe(false);
    expect(checkAccess(mockCompany, 'unknown@example.com', 'a.d.f', 'n')).toBe(false);
  });

  // 7. Проверка с пустой компанией
  it('should return false when company is undefined', () => {
    // @ts-ignore
    expect(checkAccess(undefined, 'admin@example.com', 'a.d.f', 'v')).toBe(false);
  });

  // 8. Проверка с undefined members
  it('should handle company with undefined members', () => {
    const companyWithoutMembers = { owner: 'owner@example.com' };
    // @ts-ignore
    expect(checkAccess(companyWithoutMembers, 'view.access.user@example.com', 'a.d.f', 'v')).toBe(false);
  });

  // 9. Проверка граничных значений
  it('should handle empty scheme string', () => {
    expect(checkAccess(mockCompany, 'admin@example.com', '', 'v')).toBe(false);
  });

  // 10. Проверка вложенных схем
  it('should work with nested permission schemes', () => {
    const complexCompany = {
      owner: 'owner@example.com',
      members: {
        '1': {
          e: 'view.access.user@example.com',
          a: {
            b: {
              c: 'e',
              d: 'v'
            }
          }
        }
      }
    } as unknown as ParamsCompany;

    expect(checkAccess(complexCompany, 'view.access.user@example.com', 'a.b.c', 'e')).toBe(true);
    expect(checkAccess(complexCompany, 'view.access.user@example.com', 'a.b.d', 'v')).toBe(true);
    expect(checkAccess(complexCompany, 'view.access.user@example.com', 'a.b.d', 'e')).toBe(false);
  });
});

// npm run test:unit check-access.test.ts
