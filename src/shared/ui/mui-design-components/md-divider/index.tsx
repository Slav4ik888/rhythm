import { FC, memo } from 'react';
import Divider from "@mui/material/Divider";



interface Props {
  mt?: number
  mb?: number
  my?: number
}

export const MDDivider: FC<Props> = memo(({ ...rest }) => 
  <Divider
    sx={{
      backgroundImage : 'linear-gradient(90deg, transparent, rgba(0, 0, 0, .4), transparent)',
      backgroundColor : 'transparent',
      height          : '1px',
      border          : 'none',
      ...rest,
    }} 
  />
);
