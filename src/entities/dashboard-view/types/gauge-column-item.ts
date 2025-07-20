
export interface GaugeColumnItem {
  label?     : string
  color?     : string
  // Значение, когда должен быть сработать этот параметр и включится этот цвет
  valueLess? : number // < и не равно
  valueMore? : number // >= и не равно
}
