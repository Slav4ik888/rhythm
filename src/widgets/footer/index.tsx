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
import { MDBox, MDTypography } from 'shared/ui/mui-design-components';
import { useTheme } from 'app/providers/theme';
import { CustomTheme } from 'app/providers/theme';
import { pxToRem, getTypography } from 'shared/styles';
import { SidebarRegulatorWrapper } from 'shared/ui/wrappers';



interface Props {
  company?: {
    href: string;
    name: string;
  };
  links?: {
    href: string;
    name: string;
  }[];
}


export const Footer: FC<Props> = ({
  company = { href: 'https://rhy.thm.su/', name: 'Учебный центр Основа' },
  links = [
    { href: 'https://rhy.thm.su/', name: 'Creative Rhythm' },
    { href: 'https://rhy.thm.su/', name: 'About Us' },
    { href: 'https://rhy.thm.su/', name: 'License' },
  ] }) => {
  const { href, name } = company;
  const theme = useTheme();
  const { size } = getTypography(theme);

  const renderLinks = () =>
    links.map((link) => (
      <MDBox key={link.name} component='li' px={2} lineHeight={1}>
        <Link href={link.href} target='_blank'>
          <MDTypography variant='button' fontWeight='regular' color='text'>
            {link.name}
          </MDTypography>
        </Link>
      </MDBox>
    ));

  return (
    <SidebarRegulatorWrapper>
      <MDBox
        display='flex'
        flexDirection={{ xs: 'column', lg: 'row' }}
        justifyContent='space-between'
        alignItems='center'
        width='100%'
        height={pxToRem(85)}
        px={1.5}
      >
        <MDBox
          display='flex'
          justifyContent='center'
          alignItems='center'
          flexWrap='wrap'
          color='text'
          fontSize={size.sm}
          px={1.5}
        >
          &copy;{new Date().getFullYear()}&nbsp; 
          <Link href={href} target='_blank' sx={{ textDecoration: 'none' }}>
            <MDTypography variant='button'  color='text'>
              {name}
            </MDTypography>
          </Link>
        </MDBox>
        <MDBox
          component='ul'
          sx={({ breakpoints }: CustomTheme) => ({
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'center',
            listStyle: 'none',
            mt: 3,
            mb: 0,
            p: 0,

            [breakpoints.up('lg')]: {
              mt: 0,
            },
          })}
        >
          {/* {renderLinks()} */}
        </MDBox>
      </MDBox>
    </SidebarRegulatorWrapper>
  );
}
