import { ColorName } from 'app/providers/theme';



export interface SxSmallContainer {
  root?: {
    width?  : string // in rem
    height? : string // in rem
  } | any,
  header?: {
    color?     : ColorName
    background : string // from MUIColors
  } | any,
  content?: {
    background? : string // from MUIColors
    height?     : string // in rem
  } | any

  growthResult?: {
    root?: any
    growthChange?: {
      size?: number // 0.7 | 0.8 | 0.9 | 1 | 1.25 | 1.5 in rem
    } | any
    measurementIcon?: {
      size?: number // 0.7 | 0.8 | 0.9 | 1 | 1.25 | 1.5 in rem
    } | any
    growthIcon?: {
      scale?: number
    } | any
  }
}
