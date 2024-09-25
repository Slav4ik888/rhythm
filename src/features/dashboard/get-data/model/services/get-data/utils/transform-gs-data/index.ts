import { DashboardEntities, DashboardDates } from 'entities/dashboard';
import { DashboardItemData, DashboardStatisticItem } from 'entities/dashboard';
import { DashboardStatisticType } from 'entities/dashboard/model/config';
import { GoogleSheetData, ResGetData, StartEntitiesData } from '../../../../types';



/** Returns startEntities & startDates  */
export const getEntities = (data: ResGetData): StartEntitiesData => {
  const startEntities: DashboardEntities = {};
  const startDates: DashboardDates = {};

  // Обрабатываем каждую вкладку 
  for (const key in data) {
    if (Object.prototype.hasOwnProperty.call(data, key)) {
      // Трансформируем в столбцы 
      const allSheetData = transformGSData(data[key]);

      // Определяем индексы констант по 1й колонке
      const { kodIdx, statisticTypeIdx, companyTypeIdx, productTypeIdx, titleIdx } = getIdxAnchors(allSheetData);
      const sheetStatisticType = allSheetData[1][0] as string; // В ячейке B1 находится #sheet_type - тип статистики вкладки: мес | нед | мес (кален)
      const dataRow = allSheetData[1][1] as number; // В ячейке B2 находится № строки с которой начинаются данные
        
        
      // Добавляем в entities
      allSheetData.forEach((columnData: DashboardItemData, idx) => {
        const kod = columnData[kodIdx] as string;
        const currentStatisticType = columnData[statisticTypeIdx] as DashboardStatisticType;
        const validStatisticType = currentStatisticType === sheetStatisticType;

        // Проверить есть ли код, соответствует ли statisticType данной вкладке и idx !== 0 (это колонка с датой)
        if (kod && idx && validStatisticType) {
          startEntities[kod]               = {} as DashboardStatisticItem;
          startEntities[kod].kod           = kod;
          startEntities[kod].statisticType = currentStatisticType;
          startEntities[kod].companyType   = columnData[companyTypeIdx] as string;
          startEntities[kod].productType   = columnData[productTypeIdx] as string;
          startEntities[kod].title         = columnData[titleIdx] as string;
          startEntities[kod].data          = columnData.slice(dataRow - 1);
        }
      });

      // Добавляем в dates
      startDates[sheetStatisticType] = allSheetData[0]
        .slice(dataRow - 1)
        .map(date => new Date(date).getTime());
    }
  }

  return {
    startEntities,
    startDates
  }
}


/** Вернуть индексы якорей */
function getIdxAnchors(allSheetData: DashboardItemData[]) {
  const getIdxByKod = (label: string): number => allSheetData[0].findIndex(value => value === label);

  return {
    kodIdx           : getIdxByKod('#kod'),
    statisticTypeIdx : getIdxByKod('#statisticType'),
    companyTypeIdx   : getIdxByKod('#companyType'),
    productTypeIdx   : getIdxByKod('#productType'),
    titleIdx         : getIdxByKod('#title')
  }
}



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
      if (!obj[`col_${colIdx}`]) {
        obj[`col_${colIdx}`] = [];
      }

      obj[`col_${colIdx}`].push(data[rowIdx][colIdx]);
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
