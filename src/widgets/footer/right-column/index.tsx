import { FC, memo } from 'react';
import { f } from 'shared/styles';
import { VersionWidjet } from 'widgets/version';
import { ClearCacheBtn } from 'features/ui';
import Box from '@mui/material/Box';



export const FooterRightColumn: FC = memo(() => (
  <Box sx={{ ...f('c'), gap: 1 }}>
    <VersionWidjet />
    <ClearCacheBtn />
  </Box>
));
