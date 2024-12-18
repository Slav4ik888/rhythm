
export type BorderStyleType = 'solid' | 'dashed' | 'dotted' | 'double' | 'groove' | 'ridge' | 'inset' | 'outset' | 'none';
export const arrayBorderStyles = ['solid', 'dashed', 'dotted', 'double', 'groove', 'ridge', 'inset', 'outset', 'none'];

export interface ItemStyles {
  width?     : number | string // In px | '100%' | 'auto' | 'max-content' | 'min-content'
  minWidth?  : number | string
  maxWidth?  : number | string
  
  height?    : number | string // In px | '100%' | 'auto' | 'max-content' | 'min-content'
  minHeight? : number | string
  maxHeight? : number | string
  

  // padding - 1 === 8px
  p? : number
  px?: number
  py?: number

  pt?: number
  pr?: number
  pb?: number
  pl?: number

  // margin - 1 === 8px
  m? : number
  mx?: number
  my?: number

  mt?: number
  mr?: number
  mb?: number
  ml?: number

  // border
  borderStyle?  : BorderStyleType
  borderWidth?  : number | string // In px
  borderRadius? : number | string // In px
  borderColor?  : string

  // background
  background?: string

  // color
  color?: string

  // font
  fontSize?: string // In rem

  // fontWeight?: number
  // fontStyle?: string
  // fontFamily?: string
  // textAlign?: string
  // textDecoration?: string
  // textTransform?: string
  // textShadow?: string
  // textOutline?: string
  // textOverflow?: string
  // textWrap?: string

}

export type ItemStylesField = keyof ItemStyles;
