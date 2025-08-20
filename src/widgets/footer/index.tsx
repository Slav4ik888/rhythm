import { FC, memo } from 'react';
import { CustomTheme } from 'app/providers/theme';
import { pxToRem, getTypography, f } from 'shared/styles';
import { SidebarRegulatorWrapper } from 'shared/ui/wrappers';
import Box from '@mui/material/Box';
import { FooterMiddleColumn } from './middle-column';
import { FooterLeftColumn } from './left-column';
import { FooterRightColumn } from './right-column';



export const Footer: FC = memo(() => (
  <SidebarRegulatorWrapper>
    <Box
      sx={(theme) => {
        const { breakpoints } = theme as CustomTheme;
        const { size } = getTypography(theme as CustomTheme);

        return {
          ...f('r-fs-sb'),
          width    : '100%',
          height   : pxToRem(85),
          color    : 'text',
          fontSize : size.xs,
          px       : 1.5,

          [breakpoints.down('sm')]: {
            flexDirection  : 'column',
            justifyContent : 'flex-start',
            height         : 'auto',
            pb             : 4,
          },
        }
      }}
    >
      <FooterLeftColumn />
      <FooterMiddleColumn />
      <FooterRightColumn />
    </Box>
  </SidebarRegulatorWrapper>
));
