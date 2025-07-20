import { GaugeColumnItem } from 'entities/dashboard-view';



/**
 * Находит первое удовлетворяющее условие
 */
export function findGaugeColumnItem(
  currentValue     : number, // ожидается значение от _ до _
  gaugeColumnItems : GaugeColumnItem[] = []
): GaugeColumnItem | undefined {
  // Ищем первый элемент, условия которого удовлетворяют currentValue
  return gaugeColumnItems.find((item) => {
    const isLessCondition = item.valueLess !== undefined && currentValue < item.valueLess;
    const isMoreCondition = item.valueMore !== undefined && currentValue >= item.valueMore;

    // Если указаны оба условия, проверяем их комбинацию (диапазон)
    if (item.valueLess !== undefined && item.valueMore !== undefined) {
      return currentValue >= item.valueMore && currentValue < item.valueLess;
    }

    // Если только одно из условий
    return isLessCondition || isMoreCondition;
  });
}
