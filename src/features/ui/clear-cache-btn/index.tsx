import { FC, memo, useCallback } from 'react';
import { Tooltip } from 'shared/ui/tooltip';
import Box from '@mui/material/Box';
import { LS } from 'shared/lib/local-storage';
import { useUI } from 'entities/ui';



export const ClearCacheBtn: FC = memo(() => {
  const { setSuccessMessage } = useUI();

  const handleClick = useCallback(() => {
    LS.clearStorage();
    setSuccessMessage('Кэш очищен')
  },
    [setSuccessMessage]
  );


  return (
    <Tooltip title='Очистить кэш'>
      <Box
        sx={{
          cursor: 'pointer',
        }}
        onClick={handleClick}
      >
        Очистить кэш
      </Box>
    </Tooltip>
  )
});
