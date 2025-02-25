import { setIfNotUndefined } from '..';


describe('setIfNotUndefined', () => {
  test('obj is undefined', () => {
    const obj = undefined;

    // @ts-ignore
    setIfNotUndefined(obj, 'field1', { b: 2 })
    expect(obj).toEqual(obj);
  });

  test('obj is not object', () => {
    const obj = ['1'];

    // @ts-ignore
    setIfNotUndefined(obj, 'field1', { b: 2 })
    expect(obj).toEqual(obj);
  });

  test('valid data, field is undefined', () => {
    const obj = {
      a: 1
    };

    // @ts-ignore
    setIfNotUndefined(obj, 'field1', { b: 2 })
    expect(obj).toEqual({
      a: 1,
      field1: { b: 2}
    });
  });

  test('valid data, field is present', () => {
    const obj = {
      a: 1,
      field1: 2
    };

    // @ts-ignore
    setIfNotUndefined(obj, 'field1', { b: 2 })
    expect(obj).toEqual({
      a: 1,
      field1: { b: 2}
    });
  });
});

// npm run test:unit set-if-not-undefined.test.ts
