import { Box, Button } from '@mui/material';
import { SxProps } from '@mui/system';
import { FC, memo } from 'react';


interface Props {
  sx?: SxProps
}


export const PageError: FC<Props> = memo(({ sx }) => {
  const handlerReloadPage = () => {
    location.reload();
  };

  return (
    <Box sx={{
        display        : 'flex',
        flexDirection  : 'column',
        alignItems     : 'center',
        justifyContent : 'center',
        width          : '100%',
        height         : '100vh',
        ...sx
      }}
    >
      <p>Произошла непредвиденная ошибка</p>
      <Button
        onClick = {handlerReloadPage}
      >
        Обновить страницу
      </Button>
    </Box>
  )
});
