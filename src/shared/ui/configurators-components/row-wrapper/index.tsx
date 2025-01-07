import { FC, memo, ReactNode } from 'react';
import { Box } from '@mui/material';
import { f, pxToRem } from 'shared/styles';



const useStyles = (style?: any) => ({
  root: {
    ...f('-c-sb'),
    position  : 'relative',
    minHeight : pxToRem(46),
    py        : 0.5,
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
