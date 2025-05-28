import { FC, memo, ReactNode } from 'react';
import { Box } from '@mui/material';
import { f, SxCard } from 'shared/styles';



const useStyles = (sx?: SxCard) => ({
  root: {
    ...f('-c-sb'),
    position : 'relative',
    py       : 0.5,
    ...sx?.root
  }
});


interface Props {
  sx?      : SxCard
  children : ReactNode
}

export const RowWrapper: FC<Props> = memo(({ children, sx: style }) => {
  const sx = useStyles(style);

  return (
    <Box sx={sx.root}>
      {children}
    </Box>
  )
});
