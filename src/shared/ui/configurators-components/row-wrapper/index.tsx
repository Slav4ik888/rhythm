import { FC, memo, ReactNode } from 'react';
import { Box } from '@mui/material';
import { f } from 'app/styles';



const useStyles = () => ({
  root: {
    ...f('-c-sb'),
    py : 0.5,
  }
});


interface Props {
  children: ReactNode
}

export const RowWrapper: FC<Props> = memo(({ children }) => {
  const sx = useStyles();


  return (
    <Box sx={sx.root}>
      {children}
    </Box>
  )
});
