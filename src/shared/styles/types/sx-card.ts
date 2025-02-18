
interface objStr {
  [k: string]: string | number | objStr
}

/**
 * v.2024-02-08
 */
export interface SxCard {
  root?        : objStr
  label?       : objStr // For Label
  children?    : objStr
  content?     : objStr
  field?       : objStr // For input field
  bg?          : objStr // For around input field
  column?      : objStr
  row?         : objStr
  hiddenLabel? : objStr // For hiddenLabel
  popover?     : objStr // For ColorPicker
};
