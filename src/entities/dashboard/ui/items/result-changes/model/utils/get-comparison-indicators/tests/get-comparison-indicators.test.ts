import { getComparisonIndicators } from '..';


describe('getComparisonIndicators', () => {
  const ARRAY = [1, 2, 3, 4, 5, 6, 7, 8];

  test('countValues is undefined', () => {
    expect(getComparisonIndicators(ARRAY, undefined as unknown as number)).toEqual([8, 7]);
  });

  test('array is undefined', () => {
    expect(getComparisonIndicators(undefined as unknown as number[], 3)).toEqual([]);
  });

  test('countValues = 0', () => {
    expect(getComparisonIndicators(ARRAY, 0)).toEqual([]);
  });

  test('countValues = 1', () => {
    expect(getComparisonIndicators(ARRAY, 1)).toEqual([8]);
  });

  test('countValues = 3', () => {
    expect(getComparisonIndicators(ARRAY, 3)).toEqual([8, 7, 6]);
  });

  test('countValues = длине всего массива', () => {
    expect(getComparisonIndicators(ARRAY, 8)).toEqual([8, 7, 6, 5, 4, 3, 2, 1]);
  });

  test('countValues > длины всего массива', () => {
    expect(getComparisonIndicators(ARRAY, 9)).toEqual([8, 7, 6, 5, 4, 3, 2, 1]);
  });
});

// npm run test:unit get-comparison-indicators.test.ts
