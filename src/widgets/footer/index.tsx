/**
=========================================================
* Material Dashboard 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

import { FC } from 'react';
import Link from '@mui/material/Link';
import { useTheme, CustomTheme } from 'app/providers/theme';
import { AppRoutes, LinkType, RoutePath } from 'app/providers/routes';
import { pxToRem, getTypography, f } from 'shared/styles';
import { SidebarRegulatorWrapper } from 'shared/ui/wrappers';
import { VersionWidjet } from 'widgets/version';
import { ClearCacheBtn } from 'features/ui';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { ProgressiveImage } from 'shared/lib/progressiv-image';
import osnovaLogo from 'shared/assets/logos/logo_osnova.png';
import { NavLink, To } from 'react-router-dom';



interface Props {
  company? : LinkType
  links?   : LinkType[]
}


export const Footer: FC<Props> = ({
  company = { href: 'https://rhy.thm.su/', name: 'Учебный центр Основа' },
  links = [
    { name: 'Примеры дашбордов', route: RoutePath[AppRoutes.DEMO] },
    // { href: 'https://rhy.thm.su/', route: '', name: 'About Us' },
    // { href: 'https://rhy.thm.su/', route: '', name: 'License' },
  ] }) => {
  console.log('RENDERING FOOTER...');

  const { href, name } = company;
  const theme = useTheme();
  const { size } = getTypography(theme);

  const renderLinks = () =>
    links.map(({ route, name, href }) => (
      <Box key={name} component='li' px={2} lineHeight={1}>
        {
          route
            ? <NavLink to={route}>
                <Typography color='text'>
                  {name}
                </Typography>
              </NavLink>
            : <Link href={href} target='_blank'>
                <Typography color='text'>
                  {name}
                </Typography>
              </Link>
        }
      </Box>
    )
  );


  return (
    <SidebarRegulatorWrapper>
      <Box
        sx={(theme) => {
          const { breakpoints } = theme as CustomTheme;

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
        <Box sx={{ ...f('c-fs-fs'), gap: 1 }}>
          <ProgressiveImage
            alt         = 'Основа лого'
            src         = {osnovaLogo}
            sx          = {{ root: { width: '5rem' } }}
          />
          <Box sx={f('-c-fs-w')}>
            &copy;&nbsp;{new Date().getFullYear()}&nbsp;
            {/* <Link href={href} target='_blank' sx={{ textDecoration: 'none' }}> */}
              <Typography sx={{ fontSize: size.xs }}>
                {name}
              </Typography>
            {/* </Link> */}
          </Box>
        </Box>

        <Box
          component = 'ul'
          sx        = {{ ...f('c-fs-fs'), listStyle : 'none' }}
        >
          {renderLinks()}
        </Box>

        <Box sx={{ ...f('c'), gap: 1 }}>
          <VersionWidjet />
          <ClearCacheBtn />
        </Box>
      </Box>
    </SidebarRegulatorWrapper>
  );
}
