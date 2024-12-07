
/**
 * v.2024-12-07
 * @returns строку с разделением тысяч пробелом, а дроби ','
 * @param _number - число или строка (символ отделяющий дробную часть должна быть точка '.')
 */
export function addSpaceBetweenNumbers(_number: number | string): string {
  if (_number === undefined || _number === null) return '';

  const number = parseFloat(_number as string);
  if (! number && number !== 0) return '';
  
  // Перевести в строку
  let newNumber = String(_number);

  // Разрезаем до и после знака
  let beforeDot = newNumber.split('.')[0];
  let afterDot = newNumber.split('.')[1] ? ',' + newNumber.split('.')[1] : '';

  // Добавляем пробелы
  let result = '';
  let newResult = '';

  if (beforeDot.length > 2) {
    let num = 0; // Чтобы отсчитывать по 3 числа
    for (let i = beforeDot.length - 1; i > -1; i--) {
      num++;

      if (num / 4 === Math.floor(num / 4) && (num > 0)) {
        num = 0;
        result += ' ';
        i++;
      } else {
        result += beforeDot[i];
      }
    }
    // Переводим в обратную сторону
    for (let i = result.length - 1; i > -1; i--) {
      newResult += result[i];
    }
    beforeDot = newResult;
  }

  return beforeDot + afterDot
}
