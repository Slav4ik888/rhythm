import { calcTrend2 } from '..';


describe('calcTrend2', () => {
  test('valid values', () => {
    const dates = ['first', 'second', 'third', 'fourth', 'fifth', 'six', 'seven', 'eight'];
    const y = [NaN, 10, 0, 15, NaN, NaN, NaN, NaN, 35, NaN, 20, NaN];

    const res = calcTrend2(dates, y).map(item => item.toFixed(3));
    
    
    // @ts-ignore
    expect(res).toEqual([9.166, 11.666, 14.166, 16.666, 19.166, 21.666, 24.166, 26.666]);
  });


  test('invalid dates', () => {
    const y = [10, 0, 15, 35, NaN, 20, NaN];
    // @ts-ignore
    expect(calcTrend2(undefined, y)).toEqual([]);
  });


  test('invalid items', () => {
    const dates = ['first', 'second', 'third', 'fourth', 'fifth', 'six', 'seven'];
    // @ts-ignore
    expect(calcTrend2(dates, undefined)).toEqual([]);
  });
});

// npm run test:unit calc-trend-2.test.ts
