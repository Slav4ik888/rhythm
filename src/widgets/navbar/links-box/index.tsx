import { FC, memo } from 'react';
import { MDBox, MDTypography } from 'shared/ui/mui-design-components';
import { sxNavbarRow } from '../styles';
import { CustomTheme } from 'app/providers/theme';
import { LinkType, RoutePath } from 'app/providers/routes';
import { Link } from 'react-router-dom';



interface Props {
  isMini : boolean
}

export const NavbarLinksBox: FC<Props> = memo(({ isMini = false }) => {
  const links: LinkType[] = [
    {
      name: 'Перейти в Dashboard',
      href: RoutePath.DASHBOARD,
    },
  ];

  const renderLinks = () =>
    links.map((link) => (
      <MDBox
        key={link.name}
        component='li'
        sx={{
          lineHeight : 1,
          listStyle  : 'none',
          px         : 2,
        }}
      >
        <Link to={link.href}>
          <MDTypography variant='body1' fontWeight='regular' color='text'>
            {link.name}
          </MDTypography>
        </Link>
      </MDBox>
    ));

  return (
    <MDBox
      color = 'inherit'
      mb    = {{ xs: 1, md: 0 }}
      sx    = {(theme: CustomTheme) => sxNavbarRow(theme, isMini)}
    >
      {renderLinks()}
    </MDBox>
  );
})
