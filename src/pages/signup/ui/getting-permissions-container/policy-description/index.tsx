import { FC, memo } from 'react';
import { Box } from '@mui/material';
import { DialogInfo } from 'shared/ui/dialogs';
import { useValue } from 'shared/lib/hooks';
import { CustomTheme, useTheme } from 'app/providers/theme-old';
import { ShowPolicyText } from 'features/docs';
import { useTranslation } from 'react-i18next';



const useStyles = (theme: CustomTheme) => ({
  root: {
    display: 'inline',
    fontSize: '0.8rem',
    lineHeight: 1.4
  },
  confidence: {
    display: 'inline',
    cursor: 'pointer',
    color: theme.palette.secondary.main,
    '&:hover': {
      textDecoration: 'underline',
    }
  }
});


export const PolicyDescription: FC = memo(() => {
  const
    sx = useStyles(useTheme()),
    { t } = useTranslation('auth'),
    hookOpen = useValue();


  return (
    <>
      <Box sx={sx.root}>
        {t('Выражаю своё согласие на обработку персональных данных в соответствии с')}&nbsp;
        <Box
          sx={sx.confidence}
          onClick={() => hookOpen.setOpen()}
        >
          {t('«Политикой конфиденциальности»')}
        </Box>
      </Box>

      <DialogInfo
        hookOpen = {hookOpen}
        title    = {t('Политика конфиденциальности')}
        children = {<ShowPolicyText />}
      />
    </>
  );
});
