import { DashboardEntities, DashboardDates } from 'entities/dashboard';
import { DashboardItemData } from 'entities/dashboard/model/types';
import { GoogleSheetData, ResGetData, PayloadGetData } from '../../../../types';





export const getEntities = (data: ResGetData): PayloadGetData => {
  const startEntities: DashboardEntities = {};
  const startDates: DashboardDates = {};

  for (const key in data) {
    if (Object.prototype.hasOwnProperty.call(data, key)) {
      // Трансформируем каждую вкладку 
      transformGSData(data[key]);

      // Добавляем в entities
      // Добавляем в dates
    }
  }

  return {
    startEntities,
    startDates
  }
}




const ROW_PREFIX = 'col_';


/**
 * Transform Google Sheets row data into column data
 * @param data Google Sheets data
 */
export const transformGSData = (data: GoogleSheetData): DashboardItemData[] => {
  const obj = transformToObject(data);
  const res = transformToArray(obj);

  return res;
}



interface ObjGSData {
  [key: string]: DashboardItemData;
}


// Transform Google Sheets data into object where { col_1: array, col_2: array }  column data
function transformToObject(data: GoogleSheetData): ObjGSData {
  const obj: ObjGSData = {};

  for (let rowIdx = 0; rowIdx < data.length; rowIdx++) {
    for (let colIdx = 0; colIdx < data[rowIdx]?.length; colIdx++) {
      if (!obj[`${ROW_PREFIX}${colIdx}`]) {
        obj[`${ROW_PREFIX}${colIdx}`] = [];
      }

      obj[`${ROW_PREFIX}${colIdx}`].push(data[rowIdx][colIdx]);
    }
  }

  return obj
}




function transformToArray(obj: ObjGSData): DashboardItemData[] {
  const res: DashboardItemData[] = [];


  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      res.push(obj[key]);
    }
  }

  return res
}
