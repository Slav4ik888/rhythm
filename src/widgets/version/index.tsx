import { FC } from 'react';
import { useTheme } from 'app/providers/theme';
import { pxToRem, getTypography } from 'shared/styles';
import cfg from 'app/config';
import { Tooltip } from 'shared/ui/tooltip';
import Box from '@mui/material/Box';



export const VersionWidjet: FC = () => {
  const theme = useTheme();
  const { size } = getTypography(theme);


  return (
    <Tooltip
      title={`Версия ${cfg.VERSION} от ${cfg.ASSEMBLY_DATE}`}
    >
      <Box
        sx={{
          borderRadius    : pxToRem(12),
          fontSize        : size.xs,
          backgroundColor : theme.palette.background.paper,
          color           : 'text.light',
          textAlign       : 'center',
          px              : pxToRem(12),
          py              : pxToRem(3),
        }}
      >
        {cfg.VERSION}
      </Box>
    </Tooltip>
  );
}
