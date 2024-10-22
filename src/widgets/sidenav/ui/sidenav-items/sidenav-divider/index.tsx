import { FC, memo } from 'react';
import Divider from "@mui/material/Divider";



interface Props {
  k?: string;
}


export const SidenavDivider: FC<Props> = memo(({ k: key }) => 
  <Divider
    key={key}
    sx={{
      backgroundImage : 'linear-gradient(90deg, transparent, rgba(0, 0, 0, .4), transparent)',
      backgroundColor : 'transparent',
      height          : '1px',
      border          : 'none',
    }} 
  />
);
