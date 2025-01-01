import { rgbaStringToRgba } from '..';


describe('rgbaStringToRgba', () => {
  test('data is undefined', () => {
    expect(rgbaStringToRgba(undefined as unknown as string)).toEqual({ r: 0, g: 0, b: 0, a: 1 });
  });

  test('valid data', () => {
    expect(rgbaStringToRgba('rgba(255, 255, 255, 1)')).toEqual({ r: 255, g: 255, b: 255, a: 1 });
  });

  // test('invalid data', () => {
  //   expect(rgbaStringToRgba('rgba(255, 255, 255, 1)')).toEqual({ r: 255, g: 255, b: 255, a: 1 });
  // });
});

// npm run test:unit rgba-string-to-rgba.test.ts
