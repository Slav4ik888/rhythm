import { FC, memo, ReactNode } from 'react';
import { Box } from '@mui/material';
import { f } from 'app/styles';



const useStyles = (style?: any) => ({
  root: {
    ...f('-c-sb'),
    py : 0.5,
    ...style
  }
});


interface Props {
  sx?      : any
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
