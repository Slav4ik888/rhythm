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

/**
  The boxShadow() function helps you to create a box shadow for an element
 */

// Material Dashboard 2 React helper functions
import { rgba } from "./rgba";
import { pxToRem } from "./pxToRem";
import { Offset, Radius } from '../../types';


export function boxShadow(
  offset  : Offset = [],
  radius  : Radius = [],
  color   : string,
  opacity : number,
  inset = ""
): string {
  const [x, y] = offset;
  const [blur, spread] = radius;

  return `${inset} ${pxToRem(x)} ${pxToRem(y)} ${pxToRem(blur)} ${pxToRem(spread)} ${rgba(
    color,
    opacity
  )}`;
}
