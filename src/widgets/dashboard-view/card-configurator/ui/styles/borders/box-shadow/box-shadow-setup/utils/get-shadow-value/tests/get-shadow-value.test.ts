import { getBoxShadowValue } from '..';


describe('getBoxShadowValue', () => {
  test('getBoxShadowValue', () => {
    const value = '5px 1px 3px 0px rgba(184, 184, 184, 1)';

    expect(getBoxShadowValue(value, 0)).toEqual(5);
    expect(getBoxShadowValue(value, 1)).toEqual(1);
    expect(getBoxShadowValue(value, 2)).toEqual(3);
    expect(getBoxShadowValue(value, 3)).toEqual(0);
    expect(getBoxShadowValue(value, 4)).toEqual('rgba(184, 184, 184, 1)');
    expect(getBoxShadowValue(value, 10)).toEqual('rgba(184, 184, 184, 1)');
  });
});

// npm run test:unit get-shadow-value.test.ts
