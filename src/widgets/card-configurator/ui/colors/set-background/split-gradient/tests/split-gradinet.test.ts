import { splitGradinet } from '..';


describe('splitGradinet', () => {
  test('data is undefined', () => {
    expect(splitGradinet(undefined as unknown as string)).toEqual([]);
  });

  test('invalid data', () => {
    expect(splitGradinet('#195d64b5f6'))
      .toEqual([]);
  });

  test('valid data', () => {
    expect(splitGradinet('linear-gradient(195deg, #bbdefb, #64b5f6)'))
      .toEqual(['195', '#bbdefb', '#64b5f6']);
  });
});

// npm run test:unit split-gradinet.test.ts
