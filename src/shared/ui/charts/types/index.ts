
export interface ChartConfigDataSets {
  label?                : string
  data?                 : number[] // Данные
  tension?              : number
  pointRadius?          : number // Толщика точки (круглешков)
  pointBorderColor?     : "transparent"
  pointBackgroundColor? : string
  borderColor?          : string
  borderWidth?          : number // Толщика линии
  backgroundColor?      : string
  fill?                 : boolean
  maxBarThickness?      : number
}


type FontStyle = "normal" | "italic" | "oblique" | "initial" | "inherit"


export interface ChartConfigOptions {
  responsive?: boolean
  maintainAspectRatio?: boolean
  plugins?: {
    legend?: {
      display?: boolean
    }
  }
  interaction?: {
    intersect?: boolean
    mode?: "index"
  }
  scales?: {
    y?: {
      // Вертикальные линии на оси
      grid?: {
        drawBorder?: boolean
        display?: boolean
        drawOnChartArea?: boolean
        drawTicks?: boolean
        borderDash?: [number, number]
        color?: string
      }
      // Подпись оси
      ticks?: {
        display?: boolean
        color?: string
        padding?: number
        font?: {
          size?: number
          weight?: number
          family?: "Roboto"
          style?: FontStyle
          lineHeight?: number
        }
      }
    }
    x?: {
      // Горизонтальные линии на оси
      grid?: {
        drawBorder?: boolean
        display?: boolean
        drawOnChartArea?: boolean
        drawTicks?: boolean
        borderDash?: [number, number]
        color?: string
      }
      // Подпись оси
      ticks?: {
        display?: boolean
        color?: string
        padding?: number
        font?: {
          size?: number
          weight?: number
          family?: "Roboto"
          style?: FontStyle
          lineHeight?: number
        }
      }
    }
  }
}
