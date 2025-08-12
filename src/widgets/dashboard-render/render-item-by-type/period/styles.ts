import { BorderStyleType, RgbaString, stylesToSx } from 'entities/dashboard-view';
import { isNotUndefined as is } from 'shared/lib/validators';



interface Styles {
  activeColor?        : RgbaString
  activeBackground?   : RgbaString
  activeFontWeight?   : number
  activeBorderStyle?  : BorderStyleType
  activeBorderWidth?  : number | string
  activeBorderRadius? : number | string
  activeBorderColor?  : string
  activeBoxShadow?    : string
}

export const getStyles = ({
  activeColor, activeBackground, activeFontWeight, activeBorderStyle, activeBorderWidth,
  activeBorderRadius, activeBorderColor, activeBoxShadow
}: Styles) => {
  const root: any = {};

  if (is(activeColor)) {
    root.color = activeColor
  }
  if (is(activeBackground)) {
    root.background = activeBackground
  }
  if (is(activeFontWeight)) {
    root.fontWeight = activeFontWeight
  }
  if (is(activeBorderStyle)) {
    root.borderStyle = activeBorderStyle
  }
  if (is(activeBorderWidth)) {
    root.borderWidth = stylesToSx({ activeBorderWidth });
  }
  if (is(activeBorderRadius)) {
    root.borderRadius = stylesToSx({ activeBorderRadius });
  }
  if (is(activeBorderColor)) {
    root.borderColor = activeBorderColor
  }
  if (is(activeBoxShadow)) {
    root.boxShadow = activeBoxShadow
  }

  return {
    ...root
  }
};
