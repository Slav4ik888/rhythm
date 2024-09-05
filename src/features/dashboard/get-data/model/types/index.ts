

export interface ResGetData {
  weekData  : GoogleSheetData
  monthData : GoogleSheetData
}

export type GoogleSheetData = Array<Array<string | number>>;
