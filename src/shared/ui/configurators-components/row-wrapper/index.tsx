import { FC, memo, ReactNode } from 'react';
import { Box } from '@mui/material';
import { f } from 'app/styles';



const useStyles = (flexStart?: boolean) => ({
  root: {
    ...f(flexStart ? '-fs-sb' : '-c-sb'),
    py : 0.5,
  }
});


interface Props {
  flexStart? : boolean
  children   : ReactNode
}

export const RowWrapper: FC<Props> = memo(({ children, flexStart }) => {
  const sx = useStyles(flexStart);


  return (
    <Box sx={sx.root}>
      {children}
    </Box>
  )
});
