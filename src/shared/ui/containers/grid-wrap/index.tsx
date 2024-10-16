import { FC, memo, ReactNode } from 'react';
import { GridSize, Grid } from "@mui/material";



export interface GridStyle {
  xs? : GridSize
  sm? : GridSize
};


type Props = {
  grid?     : GridStyle
  sx?       : any    // Styles for Gridbox
  children? : ReactNode
  onClick?  : () => void
}

/**
 * v.2023-08-23
 */
export const GridWrap: FC<Props> = memo(({ grid, children, sx, onClick }) => (
  <Grid
    item
    xs      = {grid?.xs || 12}
    sm      = {grid?.sm || 3}
    sx      = {sx?.root}
    onClick = {onClick}
  >
    {
      children
    }
  </Grid>
));
