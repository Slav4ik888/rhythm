import { FC, ReactNode } from 'react';
import { Box } from '@mui/material';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components';



const reducers: ReducersList = {
  
};


const useStyles = () => ({
  root: {
    display       : 'flex',
    flexDirection : 'column',
    width         : '100%',
    height        : 'calc(100vh - 65px)',
    p             : 2
  }
});


interface Props {
  children: ReactNode
}

export const WrapperDynamicReducers: FC<Props> = ({ children }) => {
  const sx = useStyles();

  return (
    // <RequireAuth>
      <DynamicModuleLoader reducers={reducers}>
        <Box sx={sx.root}>
          {
            children
          }
        </Box>
      </DynamicModuleLoader>
    // </RequireAuth>
  );
};
