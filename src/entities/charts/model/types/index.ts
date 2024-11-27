// @ts-ignore
import { InteractionMode } from 'node_modules/chart.js/dist/types/index.d.ts';



export interface ChartConfig {
  labels   : any[] // Dates (метки на оси X)
  datasets : ChartConfigDatasets[]
  options? : ChartConfigOptions
}


export interface ChartConfigDatasets {
  label?                : string
  data?                 : number[] // Данные
  tension?              : number
  pointRadius?          : number // Толщика точки (круглешков)
  pointBorderColor?     : 'transparent'
  pointBackgroundColor? : string
  borderColor?          : string | string[] // Несколько цветов [], если нужно каждый столбик раскрасить разным цветом
  borderWidth?          : number // Толщика линии
  backgroundColor?      : string | string[] // Несколько цветов [], если нужно каждый столбик раскрасить разным цветом
  fill?                 : boolean
  maxBarThickness?      : number
}


export type FontStyle = 'normal' | 'italic' | 'oblique' | 'initial' | 'inherit'

export interface ChartConfigOptions {
  responsive?: boolean
  maintainAspectRatio?: boolean
  plugins?: {
    legend?: {
      display?: boolean
    }
  }
  interaction?: {
    intersect? : boolean
    mode?      : InteractionMode //'index'
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
          family?: 'Roboto'
          style?: FontStyle
          lineHeight?: number
        }
      }
      beginAtZero?: boolean // y axis starts at 0
      suggestedMin?: number | undefined
      suggestedMax?: number | undefined
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
          family?: 'Roboto'
          style?: FontStyle
          lineHeight?: number
        }
      }
    }
  }
}
