import { FC, memo, ReactNode } from 'react';
import { GridSize, Grid } from "@mui/material";



export interface GridStyle {
  lg? : GridSize
  md? : GridSize
  sm? : GridSize
  xl? : GridSize
  xs? : GridSize
};


type Props = {
  grid?     : GridStyle
  sx?       : any    // Styles for Gridbox
  children? : ReactNode
  onClick?  : () => void
}

/**
 * v.2024-11-09
 */
export const GridWrap: FC<Props> = memo(({ grid, children, sx, onClick }) => (
  <Grid
    item
    lg      = {grid?.lg || 12}
    md      = {grid?.md || 12}
    sm      = {grid?.sm || 3}
    xl      = {grid?.xl || 12}
    xs      = {grid?.xs || 12}
    sx      = {sx?.root}
    onClick = {onClick}
  >
    {
      children
    }
  </Grid>
));
