import { FC, memo, useCallback } from 'react';
import { Tooltip } from 'shared/ui/tooltip';
import Box from '@mui/material/Box';
import { LS } from 'shared/lib/local-storage';
import { useUI } from 'entities/ui';
import { useTheme } from 'app/providers/theme';
import { getTypography } from 'shared/styles';



export const ClearCacheBtn: FC = memo(() => {
  const { setSuccessMessage } = useUI();
  const theme = useTheme();
  const { size } = getTypography(theme);

  const handleClick = useCallback(() => {
    LS.clearStorage();
    setSuccessMessage('Кэш очищен')
  },
    [setSuccessMessage]
  );


  return (
    <Tooltip title='Нажмите, чтобы очистить кэш'>
      <Box
        sx={{
          fontSize : size.xs,
          color    : 'text.light',
          cursor   : 'pointer',
          '&:hover': {
            color: 'text.main'
          }
        }}
        onClick={handleClick}
      >
        Очистить кэш
      </Box>
    </Tooltip>
  )
});
