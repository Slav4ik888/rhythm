
interface objStr {
  [k: string]: string | number | objStr
}

/**
 * v.2025-05-28
 */
export interface SxCard {
  root?        : objStr
  label?       : objStr // For Label
  children?    : objStr
  content?     : objStr
  input?       : objStr // For input
  bg?          : objStr // For around input field
  field?       : objStr // For input field
  column?      : objStr
  row?         : objStr
  hiddenLabel? : objStr // For hiddenLabel
  popover?     : objStr // For ColorPicker
}
