import { FC, memo, useEffect } from 'react';
import { useUI } from 'entities/ui';
import Circular from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import { f } from 'shared/styles';
import Typography from '@mui/material/Typography';



type Props = {
  loading : boolean
  text?   : string
}

/** v.2025-06-15 */
export const PageLoaderContainer: FC<Props> = memo(({ loading, text }) => {
  const { pageText } = useUI();
  const showText = pageText || text;


  // При block - блокируем прокрутку и фокус
  useEffect(() => {
    if (loading) {
      document.body.style.overflow = 'hidden';
      document.body.setAttribute('inert', ''); // Отключает фокус клавиатуры
    }
    else if (! loading) {
      document.body.style.overflow = '';
      document.body.removeAttribute('inert');
    }
    return () => {
      document.body.style.overflow = '';
      document.body.removeAttribute('inert');
    }
  }, [loading]);


  return (
    <Box
      id='PageLoaderText'
      sx={(theme) => ({
        position      : 'fixed',
        width         : '100%',
        height        : '100%',
        top           : 0,
        right         : 0,
        bottom        : 0,
        left          : 0,
        pointerEvents : 'none',
        overflow      : 'hidden',
        touchAction   : 'none', /* Для мобилок */
        background    : theme.palette.background.default,
        opacity       : '60%',

        zIndex        : 9999,
        ...f('-c-c'),
      })}
    >
      {
        showText && (
          <Typography sx={{ color: 'text.dark', mr: 1 }}>{showText}</Typography>
        )
      }
      <Circular
        size = {showText ? 20 : 60}
        sx   = {{
          '&.MuiCircularProgress-root': {
            color: 'text.dark'
          },
        }}
      />
    </Box>
  )
});
