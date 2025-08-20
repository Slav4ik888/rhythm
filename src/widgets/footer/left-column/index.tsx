import { FC, memo } from 'react';
import { useTheme } from 'app/providers/theme';
import { getTypography, f } from 'shared/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { ProgressiveImage } from 'shared/lib/progressiv-image';
import osnovaLogo from 'shared/assets/logos/logo_osnova.png';



export const FooterLeftColumn: FC = memo(() => {
  const theme = useTheme();
  const { size } = getTypography(theme);


  return (
    <Box sx={{
      ...f('c-fs-fs'),
      gap: 1
    }}>
      <ProgressiveImage
        alt         = 'Основа лого'
        src         = {osnovaLogo}
        sx          = {{ root: { width: '5rem' } }}
      />
      <Box sx={f('-c-fs-w')}>
        &copy;&nbsp;{new Date().getFullYear()}&nbsp;
        {/* <Link href={href} target='_blank' sx={{ textDecoration: 'none' }}> */}
          <Typography sx={{ fontSize: size.xs }}>
            Учебный центр Основа
          </Typography>
        {/* </Link> */}
      </Box>
    </Box>
  );
})
