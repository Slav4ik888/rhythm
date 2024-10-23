import { FC, memo } from 'react';
import Divider from "@mui/material/Divider";



export const SidenavDivider = memo(() => 
  <Divider
    sx={{
      backgroundImage : 'linear-gradient(90deg, transparent, rgba(0, 0, 0, .4), transparent)',
      backgroundColor : 'transparent',
      height          : '1px',
      border          : 'none',
    }} 
  />
);
