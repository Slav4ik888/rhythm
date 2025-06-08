// @ts-ignore
import { InteractionMode } from 'node_modules/chart.js/dist/types/index.d.ts';


export type ChartType = 'line' | 'bar' | 'pie' | 'doughnut'
export const arrChartType: ChartType[] = ['line', 'bar', 'pie', 'doughnut'];
export type LegendPosition = 'left' | 'top' | 'right' | 'bottom' | 'center';
export const arrLegendPosition: LegendPosition[] = ['left', 'top', 'right', 'bottom', 'center'];


export interface ChartConfigDatasets {
  label?                : string
  data                  : number[] // Данные
  tension?              : number
  pointRadius?          : number // Толщика точки (круглешков)
  pointBorderColor?     : string | 'transparent'
  pointBackgroundColor? : string
  borderColor?          : string | string[] // Несколько цветов [], если нужно каждый столбик раскрасить разным цветом
  borderWidth?          : number // Толщика линии
  backgroundColor?      : string | string[] // Несколько цветов [], если нужно каждый столбик раскрасить разным цветом
  fill?                 : boolean
  maxBarThickness?      : number
  barPercentage?        : number // For Bar - Ширина колонок графика
  categoryPercentage?   : number // For Bar - Ширина колонок графика

  type?                 : ChartType // Если на 1 графике несколько Charts и 1й 'bar', but not 'line'
  // Если на 1 графике несколько Charts, то упорядочиваются они
  // изменением местоположения (перемещением) в массиве charts.
  // order нужно оставить для вывода тренда поверх parent графика
  order?                : number
  parentChartsIdx?      : number  // For trendLine чтобы знать чей это тренд charts
  cutout?               : string  // Doughnut in percent
  hoverOffset?          : number  // For Doughnut
  spanGaps?             : boolean // For Line соединять линию есть есть пропуск NaN
  shiftValues?          : number  // Для сдвига графика (выше или ниже)
  hidden?               : boolean // Скрытие графика
}

// Для Тренда
export interface ChartConfigTrendDatasets {
  data?                 : number[] // Данные
  borderColor?          : string
  borderWidth?          : number // Толщика линии
}

export type ChartConfigDatasetsField = keyof ChartConfigDatasets;


export type FontStyle = 'normal' | 'italic' | 'oblique' | 'initial' | 'inherit'

export interface ChartConfigOptions {
  responsive?          : boolean

  aspectRatio?         : number // или другое значение, которое вам подходит
  maintainAspectRatio? : boolean // важно отключить это свойство, если хотите изменить размер диаграммы

  plugins?: {
    legend?: {
      display?  : boolean
      position? : LegendPosition
      align?    : 'start' | 'center' | 'end'
    }
  }
  interaction?: {
    intersect? : boolean  // true - событие срабатывает только если курсор пересекает элемент (например, находится прямо над точкой или столбцом)
    mode?      : InteractionMode // 'index'
  }

  scales?: {
    y?: {
      display?: boolean
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
          family?: 'Roboto' | 'Arial'
          style?: FontStyle
          lineHeight?: number
        }
      }
      beginAtZero?: boolean // y axis starts at 0
      suggestedMin?: number | undefined
      suggestedMax?: number | undefined
      min?: number | undefined
      max?: number | undefined
    }
    x?: {
      display?: boolean
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
          family?: 'Roboto' | 'Arial'
          style?: FontStyle
          lineHeight?: number
        }
      }
    }
  }
}


export interface ChartConfig {
  labels   : any[] // Dates (метки на оси X)
  datasets : ChartConfigDatasets[]
  options? : ChartConfigOptions
}
