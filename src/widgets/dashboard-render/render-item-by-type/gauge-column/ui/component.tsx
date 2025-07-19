import { FC, memo } from 'react';
import Box from '@mui/material/Box';
import { f, SxCard } from 'shared/styles';
import { Increased } from 'entities/dashboard-data';
// import { getStyles } from './styles';



interface Props {
  bgcolor : string | undefined
  sx      : SxCard
}


export const ItemGaugeColumnComponent: FC<Props> = memo(({ sx: style, bgcolor }) => {
  const icon = '';

  return (
    <Box
      sx={{
        ...f('-c-c'),
        backgroundColor: bgcolor,
        ...style?.root
      }}
    >
      {icon}
    </Box>
  );
});
