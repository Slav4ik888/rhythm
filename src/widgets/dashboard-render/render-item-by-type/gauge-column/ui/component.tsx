import { FC, memo } from 'react';
import Box from '@mui/material/Box';
import { f } from 'shared/styles';



interface Props {
  bgColor : string
  height  : string // Высота колонки
  width   : string // Ширина колонки
}


export const ItemGaugeColumnComponent: FC<Props> = memo(({ bgColor, width, height }) => (
  <Box
    sx={{
      ...f('-c-c'),
      backgroundColor: bgColor,
      width,
      height,
    }}
  />
));
