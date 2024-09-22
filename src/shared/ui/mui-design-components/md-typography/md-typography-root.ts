/**
=========================================================
* Material Dashboard 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import { CustomMUITheme, ColorName } from 'app/providers/theme';



interface OwnerState {
  color          : ColorName
  textTransform  : "none" | "capitalize" | "uppercase" | "lowercase"
  verticalAlign? : "unset" | "baseline" | "sub" | "super" | "text-top" | "text-bottom" | "middle" | "top" | "bottom"
  textGradient?  : boolean
  opacity        : number
  fontWeight?    : "light" | "regular" | "medium" | "bold"
  darkMode       : boolean
}


// @ts-ignore
export default styled(Typography)(({ theme, ownerState }) => {
  const { palette, typography, functions } = theme as unknown as CustomMUITheme;
  const { color, textTransform, verticalAlign, fontWeight, opacity, textGradient, darkMode } = ownerState as OwnerState;

  const { gradients, transparent, white } = palette;
  const { fontWeightLight, fontWeightRegular, fontWeightMedium, fontWeightBold } = typography;
  const { linearGradient } = functions;

  // fontWeight styles
  const fontWeights = {
    light   : fontWeightLight,
    regular : fontWeightRegular,
    medium  : fontWeightMedium,
    bold    : fontWeightBold,
  };

  // styles for the typography with textGradient={true}
  const gradientStyles = () => ({
    backgroundImage:
      // @ts-ignore
      color !== "inherit" && color !== "text" && color !== "white" && gradients[color]
        // @ts-ignore
        ? linearGradient(gradients[color].main, gradients[color].state)
        : linearGradient(gradients.dark.main, gradients.dark.state),
    display: "inline-block",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: transparent.main,
    position: "relative",
    zIndex: 1,
  });

  // color value                          если нет цвета, то inherit
  // @ts-ignore
  let colorValue = color === "inherit" || ! palette[color] ? "inherit" : palette[color].main;

  // @ts-ignore
  if (darkMode && (color === "inherit" || ! palette[color])) {
    colorValue = "inherit";
  }
  else if (darkMode && color === "dark") colorValue = white.main;


  return {
    opacity,
    textTransform,
    verticalAlign,
    textDecoration: "none",
    color: colorValue,
    // @ts-ignore
    fontWeight: fontWeights[fontWeight] && fontWeights[fontWeight],
    ...(textGradient && gradientStyles()),
  };
});
