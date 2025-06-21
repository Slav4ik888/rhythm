import { FC, memo } from 'react';
import Box from '@mui/material/Box';
import { DialogInfo } from 'shared/ui/dialogs';
import { useValue } from 'shared/lib/hooks';
import { ShowPolicyText } from 'features/docs/get-policy';



export const PolicyDescription: FC = memo(() => {
  const hookOpen = useValue();

  return (
    <>
      <Box
        sx={{
          display    : 'inline',
          fontSize   : '0.8rem',
          lineHeight : 1.4
        }}
      >
        Выражаю своё согласие на обработку персональных данных в соответствии с&nbsp;
        <Box
          sx={{
            display : 'inline',
            cursor  : 'pointer',
            color   : 'secondary.main',
            '&:hover': {
              textDecoration: 'underline',
            }
          }}
          onClick={() => hookOpen.setOpen()}
        >
          «Политикой конфиденциальности»
        </Box>
      </Box>

      <DialogInfo
        hookOpen = {hookOpen}
        title    = 'Политика конфиденциальности'
        children = {<ShowPolicyText />}
      />
    </>
  );
});
