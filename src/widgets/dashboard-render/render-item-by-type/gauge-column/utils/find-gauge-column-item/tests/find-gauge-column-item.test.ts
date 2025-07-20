import { GaugeColumnItem } from 'entities/dashboard-view';
import { findGaugeColumnItem } from '..';



describe('findGaugeColumnItem', () => {
  const testItems: GaugeColumnItem[] = [
    { label: 'Low', color: 'red', valueLess: 0.3 },
    { label: 'Medium', color: 'yellow', valueMore: 0.3, valueLess: 0.7 },
    { label: 'High', color: 'green', valueMore: 0.7 },
  ];

  // Корректные случаи
  it('возвращает элемент для значения < 0.3 (Low)', () => {
    const result = findGaugeColumnItem(0.2, testItems);
    expect(result).toEqual({ label: 'Low', color: 'red', valueLess: 0.3 });
  });

  it('возвращает элемент для значения >= 0.3 и < 0.7 (Medium)', () => {
    const result = findGaugeColumnItem(0.5, testItems);
    expect(result).toEqual({ label: 'Medium', color: 'yellow', valueMore: 0.3, valueLess: 0.7 });
  });

  it('возвращает элемент для значения >= 0.7 (High)', () => {
    const result = findGaugeColumnItem(0.8, testItems);
    expect(result).toEqual({ label: 'High', color: 'green', valueMore: 0.7 });
  });

  // Граничные условия
  it('обрабатывает границу 0.3 (включено в Medium)', () => {
    const result = findGaugeColumnItem(0.3, testItems);
    expect(result).toEqual({ label: 'Medium', color: 'yellow', valueMore: 0.3, valueLess: 0.7 });
  });

  it('обрабатывает границу 0.7 (включено в High)', () => {
    const result = findGaugeColumnItem(0.7, testItems);
    expect(result).toEqual({ label: 'High', color: 'green', valueMore: 0.7 });
  });

  // Некорректные данные
  // it('возвращает undefined для значения вне диапазона [0, 1]', () => {
  //   const consoleWarnMock = jest.spyOn(console, 'warn').mockImplementation();
  //   expect(findGaugeColumnItem(-0.1, testItems)).toBeUndefined();
  //   expect(findGaugeColumnItem(1.1, testItems)).toBeUndefined();
  //   expect(consoleWarnMock).toHaveBeenCalledTimes(2);
  //   consoleWarnMock.mockRestore();
  // });

  it('возвращает undefined, если нет подходящего элемента', () => {
    const customItems: GaugeColumnItem[] = [
      { label: 'A', color: 'blue', valueLess: 0.1 },
      { label: 'B', color: 'orange', valueMore: 0.9 },
    ];
    expect(findGaugeColumnItem(0.5, customItems)).toBeUndefined();
  });

  // Пустой массив
  it('возвращает undefined для пустого массива', () => {
    expect(findGaugeColumnItem(0.5, [])).toBeUndefined();
  });
});

// npm run test:unit find-gauge-column-item.test.ts
