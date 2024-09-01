import { DashboardData } from 'entities/dashboard';

const ROW_PREFIX = 'col_';
const START_DATA_ROW = 13; // № строки с которой в таблице начинаются значения



/**
 * Transform Google Sheets row data into column data
 * @param data Google Sheets data
 */
export const transformGSData = (data: any): DashboardData => {
  const obj = transformToObject(data);
  const res = transformToArray(obj);

  return res;
}



interface ObjGSData {
  [key: string]: Array<string | number>;
}


// Transform Google Sheets data into object where { col_1: array, col_2: array }  column data
function transformToObject(data: any): ObjGSData {
  const obj: ObjGSData = {};

  for (let rowIdx = 0; rowIdx < data.length; rowIdx++) {
    for (let colIdx = 0; colIdx < data[rowIdx].length; colIdx++) {
      if (!obj[`${ROW_PREFIX}${colIdx}`]) {
        obj[`${ROW_PREFIX}${colIdx}`] = [];
      }

      obj[`${ROW_PREFIX}${colIdx}`].push(data[rowIdx][colIdx]);
    }
  }

  return obj
}




function transformToArray(obj: ObjGSData): DashboardData {
  const res: DashboardData = [];


  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      res.push(obj[key]);
    }
  }

  return res
}
