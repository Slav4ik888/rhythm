import { hasRequiredAccess } from '..';


describe('hasRequiredAccess', () => {
  it('should allow when user has exact required access', () => {
    expect(hasRequiredAccess('v', 'v')).toBe(true);
    expect(hasRequiredAccess('e', 'e')).toBe(true);
    expect(hasRequiredAccess('n', 'n')).toBe(true);
  });

  it('should allow when user has higher access than required', () => {
    expect(hasRequiredAccess('e', 'v')).toBe(true);
    expect(hasRequiredAccess('e', 'n')).toBe(true);
  });

  it('should deny when user has lower access than required', () => {
    expect(hasRequiredAccess('v', 'e')).toBe(false);
    expect(hasRequiredAccess('n', 'v')).toBe(false);
    expect(hasRequiredAccess('n', 'e')).toBe(false);
  });

  it('should deny when user has no access (undefined)', () => {
    expect(hasRequiredAccess(undefined, 'v')).toBe(false);
    expect(hasRequiredAccess(undefined, 'e')).toBe(false);
    expect(hasRequiredAccess(undefined, 'n')).toBe(false);
  });
});

// npm run test:unit has-required-access.test.ts
