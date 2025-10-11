import { isValidPartnerCode } from '..';


describe('isValidPartnerCode', () => {
  test('Valid PartnerCode', () => expect(isValidPartnerCode('azbuka')).toEqual(true));
  test('Invalid PartnerCode', () => expect(isValidPartnerCode('Invalid')).toEqual(false));
  test('PartnerCode is undefined', () => expect(isValidPartnerCode(undefined)).toEqual(false));
  test('PartnerCode is empty', () => expect(isValidPartnerCode('')).toEqual(false));
  test('PartnerCode is true', () => expect(isValidPartnerCode(true as unknown as string)).toEqual(false));
});

// npm run test:unit is-valid-partner-code.test.ts
