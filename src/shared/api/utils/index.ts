
const ROW_PREFIX = 'row_';

interface TransformedGSData {
  [key: string]: any[]
}


/**
 * Transform Google Sheets data into column
 * @param data Google Sheets data
 */
export const transformGSData = (data: any): TransformedGSData => {
  const obj: TransformedGSData = {};

  for (let rowIdx = 0; rowIdx < data.length; rowIdx++) {
    for (let colIdx = 0; colIdx < data[rowIdx].length; colIdx++) {
      if (!obj[`${ROW_PREFIX}${colIdx}`]) {
        obj[`${ROW_PREFIX}${colIdx}`] = [];
      }

      obj[`${ROW_PREFIX}${colIdx}`].push(data[rowIdx][colIdx]);
    }
  }

  return obj;
}
