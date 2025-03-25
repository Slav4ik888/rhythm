import { getStrNumber } from '..';


describe('getStrNumber', () => {
  // Invalid values
  test('str undefined, => ","', () => {
    expect(getStrNumber('undefined,')).toEqual(',');
  });
  test('undefined => ""', () => {
    expect(getStrNumber(undefined as unknown as string)).toEqual('');
  });

  // Positive values
  test('10000000,4567 => 10 000 000,4567', () => {
    expect(getStrNumber('10000000,4567')).toEqual('10 000 000,4567');
  });
  test('10000000, => 10 000 000,', () => {
    expect(getStrNumber('10000000,')).toEqual('10 000 000,');
  });

  // Negative values
  test('-10000000, => -10 000 000,', () => {
    expect(getStrNumber('-10000000,')).toEqual('-10 000 000,');
  });
});

// npm run test:unit get-str-number.test.ts
