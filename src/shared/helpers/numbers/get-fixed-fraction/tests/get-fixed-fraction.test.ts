import { getFixedFraction } from '..';


describe('getFixedFraction', () => {
  test('12,1234567 f undefined => 12', () => expect(getFixedFraction(12.1234567)).toEqual(12));
  test('12,1234567 f3 => 12,123', () => expect(getFixedFraction(12.1234567, 3)).toEqual(12.123));
  test('12,1234567 f7 => 12,1234567', () => expect(getFixedFraction(12.1234567, 7)).toEqual(12.1234567));
  test('12,1234567 f8 => 12,1234567', () => expect(getFixedFraction(12.1234567, 8)).toEqual(12.1234567));
  test('12 f8 => 12', () => expect(getFixedFraction(12, 8)).toEqual(12));
  test('undefined f8 => 0', () => expect(getFixedFraction(undefined as unknown as number, 8)).toEqual(NaN));
});

// npm run test:unit get-fixed-fraction.test.ts
