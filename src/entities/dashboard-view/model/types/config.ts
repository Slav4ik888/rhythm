
/** DigitalIndicators settings */
export interface IndicatorsConfig {
  growthColor?    : boolean // if true - зелёный при росте / красным при падении
  plusMinus?      : boolean // Если true - показывать знаки + и -
  reduce?         : boolean // Убрать разряды: 12 500 700 => 12.5 млн
  fractionDigits? : number  // Количество знаков после запятой
  addZero?        : boolean // Добавлять ли нули после запятой, чтобы выровнить до нужного кол-ва знаков
}
