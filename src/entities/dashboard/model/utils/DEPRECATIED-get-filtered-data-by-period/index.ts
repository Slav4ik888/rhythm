// import { DashboardDataSegment, DashboardPeriodDates } from '../../types';
// import { getFilteredDatesByPeriod } from '../get-filtered-dates-by-period';


// /** 
//  * Возвращает новый массив массивов "обрезанный" промежутком дат
//  *  - строки где нет дат - не добавляются
//  */
// export const getFilteredDataByPeriod = (data: DashboardDataSegment, period: DashboardPeriodDates): DashboardDataSegment => {
//   const filtredData = getFilteredDatesByPeriod(data, period);
//   const startIdx    = data[0].findIndex(item => filtredData[0] === item);
//   const endIdx      = data[0].findIndex(item => filtredData[filtredData.length - 1] === item);

//   const result: DashboardDataSegment = [];

//   data.forEach((column) => {
//     result.push(column.slice(startIdx, endIdx + 1));
//   });

//   return result;
// }
