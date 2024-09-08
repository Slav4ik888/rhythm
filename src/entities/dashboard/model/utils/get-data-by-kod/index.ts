

/** Возвращает колонку с данными по указанному коду */
export function getDataByKod<T>(
  filteredWeekData : T[][],   // Массив колонок с данными
  kod              : string,
  rowIdxTarget     : number // index строки, в которой нужно искать код
): T[] {

  let index;

  filteredWeekData.forEach((item, idx) => {
    if (item[rowIdxTarget] === kod) index = idx;
  });
}
