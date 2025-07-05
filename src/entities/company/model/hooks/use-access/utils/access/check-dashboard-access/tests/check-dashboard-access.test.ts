import { checkDashboardAccess } from '..';
import { ParamsCompany } from '../../../../../../../types';
import { CompanyDashboardAccessScheme } from '../../../../types';



describe('checkDashboardAccess', () => {
  const mockCompany = {
    owner: 'owner@example.com',
    dashboardMembers: [
      {
        e: 'admin@example.com',
        a: {
          f: 'e',
          x: { y: 'v' }
        }
      },
      {
        e: 'view.access.user@example.com',
        a: {
          f: 'v',
          y: 'n',
        }
      },
      {
        e: 'none.access.user@example.com',
        a: {
          f: 'n',
          y: 'n',
        }
      }
    ]
  } as unknown as ParamsCompany;

  // 1. Проверка для владельца компании
  it('should always return true for company owner', () => {
    expect(checkDashboardAccess(mockCompany, 'owner@example.com', CompanyDashboardAccessScheme.AF, 'n')).toBe(true);
    expect(checkDashboardAccess(mockCompany, 'owner@example.com', 'any.scheme' as CompanyDashboardAccessScheme, 'e')).toBe(true);
  });

  // 2. Проверка для пользователя с правами 'e'
  it('should return true when admin has required access level', () => {
    expect(checkDashboardAccess(mockCompany, 'admin@example.com', CompanyDashboardAccessScheme.AF, 'e')).toBe(true);
    expect(checkDashboardAccess(mockCompany, 'admin@example.com', CompanyDashboardAccessScheme.AF, 'v')).toBe(true);
  });

  // 3. Проверка для пользователя с правами 'v'
  it('should return true when user has exact required access', () => {
    expect(checkDashboardAccess(mockCompany, 'view.access.user@example.com', CompanyDashboardAccessScheme.AF, 'v')).toBe(true);
  });

  // 4. Проверка недостаточных прав
  it('should return false when access level is insufficient', () => {
    expect(checkDashboardAccess(mockCompany, 'view.access.user@example.com', CompanyDashboardAccessScheme.AF, 'e'))
      .toBe(false);
    expect(checkDashboardAccess(mockCompany, 'none.access.user@example.com', CompanyDashboardAccessScheme.AF, 'v'))
      .toBe(false);
    expect(checkDashboardAccess(mockCompany, 'view.access.user@example.com', 'x.y' as CompanyDashboardAccessScheme, 'v'))
      .toBe(false);
  });

  // 5. Проверка несуществующей схемы
  it('should return false for non-existent scheme', () => {
    expect(checkDashboardAccess(mockCompany, 'admin@example.com', 'not.existing.scheme' as CompanyDashboardAccessScheme, 'v'))
      .toBe(false);
    expect(checkDashboardAccess(mockCompany, 'view.access.user@example.com', 'a.b.c' as CompanyDashboardAccessScheme, 'v'))
      .toBe(false);
  });

  // 6. Проверка для несуществующего пользователя
  it('should return false for non-member user', () => {
    expect(checkDashboardAccess(mockCompany, 'unknown@example.com', 'a.d.f' as CompanyDashboardAccessScheme, 'v')).toBe(false);
    expect(checkDashboardAccess(mockCompany, 'unknown@example.com', 'a.d.f' as CompanyDashboardAccessScheme, 'n')).toBe(false);
  });

  // 7. Проверка с пустой компанией
  it('should return false when company is undefined', () => {
    // @ts-ignore
    expect(checkDashboardAccess(undefined, 'admin@example.com', 'a.d.f', 'v')).toBe(false);
  });

  // 8. Проверка с undefined members
  it('should handle company with undefined members', () => {
    const companyWithoutMembers = { owner: 'owner@example.com' };
    // @ts-ignore
    expect(checkDashboardAccess(companyWithoutMembers, 'view.access.user@example.com', 'a.d.f', 'v')).toBe(false);
  });

  // 9. Проверка граничных значений
  it('should handle empty scheme string', () => {
    expect(checkDashboardAccess(mockCompany, 'admin@example.com', '' as CompanyDashboardAccessScheme, 'v')).toBe(false);
  });

  // 10. Проверка вложенных схем
  it('should work with nested permission schemes', () => {
    const complexCompany = {
      owner: 'owner@example.com',
      dashboardMembers: [
        {
          e: 'view.access.user@example.com',
          a: {
            b: {
              c: 'e',
              d: 'v'
            }
          }
        }
      ]
    } as unknown as ParamsCompany;

    expect(checkDashboardAccess(complexCompany, 'view.access.user@example.com', 'a.b.c' as CompanyDashboardAccessScheme, 'e'))
      .toBe(true);
    expect(checkDashboardAccess(complexCompany, 'view.access.user@example.com', 'a.b.d' as CompanyDashboardAccessScheme, 'v'))
      .toBe(true);
    expect(checkDashboardAccess(complexCompany, 'view.access.user@example.com', 'a.b.d' as CompanyDashboardAccessScheme, 'e'))
      .toBe(false);
  });
});

// npm run test:unit check-dashboard-access.test.ts
