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

import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import { CustomMUITheme, GradientsBgColorName, RadiusName, GreyColor } from 'app/providers/theme';



interface OwnerState {
  variant: string
  bgColor: GreyColor | GradientsBgColorName
  color: string
  opacity: number
  borderRadius: RadiusName
  shadow: any
  coloredShadow: string
}

// @ts-ignore
export default styled(Box)(({ theme, ownerState }) => {
  const { palette, functions, borders, boxShadows } = theme as unknown as CustomMUITheme;
  const { variant, bgColor, color, opacity, borderRadius, shadow, coloredShadow } = ownerState as OwnerState;

  const { gradients, grey, white } = palette;
  const { linearGradient } = functions;
  const { borderRadius: radius } = borders;
  const { colored } = boxShadows;

  const greyColors = {
    "grey-100": grey[100],
    "grey-200": grey[200],
    "grey-300": grey[300],
    "grey-400": grey[400],
    "grey-500": grey[500],
    "grey-600": grey[600],
    "grey-700": grey[700],
    "grey-800": grey[800],
    "grey-900": grey[900],
  };
  

  const validGradients: GradientsBgColorName[] = [
    "primary",
    "secondary",
    "info",
    "success",
    "warning",
    "error",
    "dark",
    "light",
    "department_7",
    "department_1",
    "department_2",
    "department_3",
    "department_4",
    "department_5",
    "department_6",
  ];

  const validColors = [
    "transparent",
    "white",
    "black",
    "primary",
    "secondary",
    "info",
    "success",
    "warning",
    "error",
    "light",
    "dark",
    "text",
    "grey-100",
    "grey-200",
    "grey-300",
    "grey-400",
    "grey-500",
    "grey-600",
    "grey-700",
    "grey-800",
    "grey-900",
  ];

  const validBorderRadius = ["xs", "sm", "md", "lg", "xl", "xxl", "section"];
  const validBoxShadows = ["xs", "sm", "md", "lg", "xl", "xxl", "inset"];

  // background value
  let backgroundValue = bgColor as string;

  if (variant === "gradient") {
    backgroundValue = validGradients.find((el) => el === bgColor)
      ? linearGradient(gradients[bgColor as GradientsBgColorName].main, gradients[bgColor as GradientsBgColorName].state)
      : white.main;
  } else if (validColors.find((el) => el === bgColor)) {
    // @ts-ignore
    backgroundValue = palette[bgColor] ? palette[bgColor].main : greyColors[bgColor];
  } else {
    backgroundValue = bgColor;
  }

  // color value
  let colorValue = color;

  if (validColors.find((el) => el === color)) {
    // @ts-ignore
    colorValue = palette[color] ? palette[color].main : greyColors[color];
  }

  // borderRadius value
  let borderRadiusValue = borderRadius as string;

  if (validBorderRadius.find((el) => el === borderRadius)) {
    borderRadiusValue = radius[borderRadius];
  }

  // boxShadow value
  let boxShadowValue = "none";

  if (validBoxShadows.find((el) => el === shadow)) {
    // @ts-ignore
    boxShadowValue = boxShadows[shadow];
  } else if (coloredShadow) {
    // @ts-ignore
    boxShadowValue = colored[coloredShadow] ? colored[coloredShadow] : "none";
  }

  return {
    opacity,
    background: backgroundValue,
    color: colorValue,
    borderRadius: borderRadiusValue,
    boxShadow: boxShadowValue,
  };
});
